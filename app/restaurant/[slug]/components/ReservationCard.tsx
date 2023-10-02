'use client';

import { partySize as partySizes, displayTimeArray, convertToDisplayTime } from '@/data';
import useAvailabilities from '@/hooks/useAvailabilities';
import { CircularProgress } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

type ReservationCardProps = {
  openTime: string;
  closeTime: string;
  slug: string;
};

export default function ReservationCard({ closeTime, openTime, slug }: ReservationCardProps) {
  const { data, loading, error, fetchAvailabilities } = useAvailabilities();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState(openTime);
  const [partySize, setPartySize] = useState('2');
  const [day, setDay] = useState(new Date().toISOString().split('T')[0]);

  const handleChangeDate = (date: Date | null) => {
    if (date) {
      setDay(date.toISOString().split('T')[0]);
      return setSelectedDate(date);
    }
    return setSelectedDate(null);
  };

  const handleClick = () => {
    fetchAvailabilities({
      slug,
      day,
      time,
      partySize,
    });
  };

  // Fills the restaurant time window according to its opening and closing time
  const filterTimeByRestaurantOpenWindow = () => {
    const timeWithInWindow: typeof displayTimeArray = [];

    let isWithinWindow = false;

    displayTimeArray.forEach((time) => {
      if (time.value === openTime) {
        isWithinWindow = true;
      }
      if (isWithinWindow) {
        isWithinWindow = true;
        timeWithInWindow.push(time);
      }
      if (time.value === closeTime) {
        isWithinWindow = false;
      }
    });

    return timeWithInWindow;
  };

  return (
    <div className="fixed w-[15%] bg-white rounded p-3 shadow">
      <div className="text-center border-b pb-2 font-bold">
        <h4 className="mr-7 text-lg">Make a Reservation</h4>
      </div>

      <div className="my-3 flex flex-col">
        <label htmlFor="">Party Size</label>
        <select
          name=""
          id=""
          className="py-3 border-b font-light"
          value={partySize}
          onChange={(e) => setPartySize(e.target.value)}
        >
          {partySizes.map((size) => (
            <option key={size.value} value={size.value}>
              {size.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col w-[48%]">
          <label htmlFor="">Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleChangeDate}
            className="py-3 border font-light text-reg w-20"
            dateFormat="MMM d"
            wrapperClassName="w-[48%]"
          />
        </div>

        <div className="flex flex-col w-[48%]">
          <label htmlFor="">Time</label>
          <select
            name=""
            id=""
            className="py-3 border-b font-light"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {filterTimeByRestaurantOpenWindow().map((time) => (
              <option key={time.value} value={time.value}>
                {time.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <button
          className="bg-red-600 rounded w-full px-4 text-white font-bold h-16"
          onClick={handleClick}
          disabled={loading}
        >
          {loading ? <CircularProgress color="inherit" /> : 'Find a time'}
        </button>
      </div>

      {data && data.length ? (
        <div className="mt-4">
          <p className="text-reg">Select a time</p>
          <div className="flex flex-wrap mt-2">
            {data.map((time) => {
              return time.available ? (
                <Link
                  href={`/reserve/${slug}?date=${day}T${time.time}&partySize=${partySize}`}
                  className="bg-red-600 cursor-pointer p-2 w-24 text-center text-white mb-3 rounded mr-3"
                >
                  <p className="text-small font-bold">{convertToDisplayTime(time.time as any)}</p>
                </Link>
              ) : (
                <p className="bg-gray-300 p-2 w-24 mb-3 rounded mr-3"></p>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
