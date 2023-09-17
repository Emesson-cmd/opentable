'use client';

import {
  partySize,
  convertToDisplayTime,
  displayTimeObject,
  displayTimeArray,
  Time,
  generateTimeArray,
} from '@/data';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

type ReservationCardProps = {
  openTime: string;
  closeTime: string;
};

export default function ReservationCard({ closeTime, openTime }: ReservationCardProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleChangeDate = (date: Date | null) => {
    if (date) {
      return setSelectedDate(date);
    }
    return setSelectedDate(null);
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
        <select name="" id="" className="py-3 border-b font-light">
          {partySize.map((size) => (
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
          <select name="" id="" className="py-3 border-b font-light">
            {filterTimeByRestaurantOpenWindow().map((time) => (
              <option key={time.value} value={time.value}>
                {time.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
          Find a Time
        </button>
      </div>
    </div>
  );
}
