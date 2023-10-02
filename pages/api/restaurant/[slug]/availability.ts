import { timeAndSearch } from '@/data';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

/**
 * This endpoint will be used to check the availability of a specific date and time
 *
 * @param req
 * @param res
 * @returns
 */
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { slug, day, time, partySize } = req.query as {
    slug: string;
    day: string;
    time: string;
    partySize: string;
  };

  if (!day || !time || !partySize) {
    return res.status(400).json({
      errorMessage: 'Invalid data provided',
    });
  }

  // Gets the searchTimes of the time sent by user
  const searchTimes = timeAndSearch.find((t) => {
    return t.time === time;
  })?.searchTimes;

  if (!searchTimes) {
    return res.status(400).json({
      errorMessage: 'Invalid data provided',
    });
  }

  // Gets all the bookings between the first and last searchTimes
  const bookings = await prisma.booking.findMany({
    where: {
      booking_time: {
        gte: new Date(`${day}T${searchTimes[0]}`),
        lte: new Date(`${day}T${searchTimes[searchTimes.length - 1]}`),
      },
    },
    select: {
      number_of_people: true,
      booking_time: true,
      tables: true,
    },
  });

  /**
   "bookingTablesObg": {
        "2023-09-17T12:00:00.000Z": {
            "1": true
        }
    }
   */
  const bookingTablesObg: { [key: string]: { [key: number]: true } } = {};

  /**
   * Gets all bookings from the date and time range (searchTime)
   * Will transform "bookings" in an array of objects as above
   */
  bookings.forEach((booking) => {
    bookingTablesObg[booking.booking_time.toISOString()] = booking.tables.reduce((obj, table) => {
      return {
        ...obj,
        [table.table_id]: true,
      };
    }, {});
  });

  // Return the tables from the restaurant which the user is trying to book
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      tables: true,
      open_time: true,
      close_time: true,
    },
  });

  if (!restaurant) {
    return res.status(400).json({
      errorMessage: 'Invalid data provided',
    });
  }

  const tables = restaurant.tables;

  // Returns an array with times and table
  const searchTimesWithTables = searchTimes.map((searchTime) => {
    return {
      date: new Date(`${day}T${searchTime}`),
      time: searchTime,
      tables,
    };
  });

  // Remove time option from search time if it has already been taken
  searchTimesWithTables.forEach((t) => {
    t.tables = t.tables.filter((table) => {
      if (bookingTablesObg[t.date.toDateString()]) {
        if (bookingTablesObg[t.date.toDateString()][table.id]) return false;
      }
      return true;
    });
  });

  const availabilities = searchTimesWithTables
    .map((t) => {
      const sumSeats = t.tables.reduce((sum, table) => {
        return sum + table.seats;
      }, 0);

      return {
        time: t.time,
        available: sumSeats >= parseInt(partySize),
      };
    })
    .filter((availability) => {
      const timeIsAfterOpeningHour =
        new Date(`${day}T${availability.time}`) >= new Date(`${day}T${restaurant.open_time}`);
      const timeIsBeforeClosingHours =
        new Date(`${day}T${availability.time}`) <= new Date(`${day}T${restaurant.close_time}`);

      return timeIsAfterOpeningHour && timeIsBeforeClosingHours;
    });

  return res.json({
    searchTimes,
    bookings,
    bookingTablesObg,
    searchTimesWithTables,
    availabilities,
  });
}

// http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability?day=2023-01-01&time=23:00:00.000Z&partySize=4
// vivaan-fine-indian-cuisine-ottawa
