'use client';

import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();
  const [location, setLocation] = useState('');

  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <nav className="bg-white p-2 flex justify-between">
          <Link href="/" className="font-bold text-gray-700 text-2xl">
            OpenTable
          </Link>
          <div>
            <div className="flex">
              <button className="bg-blue-400 text-white border p-2 px-4 rounded mr-3">
                Sign In
              </button>
              <button className="text-black border p-2 px-4 rounded">Sign Up</button>
            </div>
          </div>
        </nav>

        <main>
          <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
            <div className="text-center mt-10">
              <h1 className="text-white text-5xl font-bold mb-2">
                Find your table for any ocassion
              </h1>
            </div>

            <div className="text-left py-3 m-auto flex justify-center">
              <input
                className="rounded text-lg text-black mr-3 w-74 p-2 w-[450px] bg-white "
                type="text"
                placeholder="State, city or town"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <button
                className="bg-red-600 px-9 py-2 text-white rounded"
                onClick={() => {
                  if (location === 'banana') return;
                  router.push('/search');
                }}
              >
                Let`s go
              </button>
            </div>
          </div>
        </main>

        <div className="py-3 px-36 mt-10 flex flex-wrap">
          <Link href="/restaurant/milestones-grill">
            <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661629473263-572abf51d7c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
                alt=""
                className="w-full h-36"
                width={100}
                height={100}
              />
              <div className="p-1">
                <h3 className="font-bold text-2xl mb-2">Milestones Grill</h3>
                <div className="flex items-start">
                  <div className="flex mb-2">*****</div>
                  <p className="ml-2">77 reviews</p>
                </div>
                <div className="flex font-light capitalize">
                  <p className=" mr-3">Mexican</p>
                  <p className="mr-3">$$$$$</p>
                  <p>Toronto</p>
                </div>
                <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </main>
  );
}
