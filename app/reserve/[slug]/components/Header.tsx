import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <div>
      <h3 className="font-bold">You`re almost done!</h3>
      <div className="mt-5 flex">
        <Image
          src="https://picsum.photos/200/300/?blur"
          alt=""
          className="w-32 h-32 rounded"
          width={100}
          height={100}
        />
        <div className="ml-4">
          <h1 className="text-3xl font-bold">Restaurant name</h1>
          <div className="flex mt-3">
            <p className="mr-6">Tuesday, 2, 2023</p>
            <p className="mr-6">7:30 PM</p>
            <p className="mr-6">3 people</p>
          </div>
        </div>
      </div>
    </div>
  );
}
