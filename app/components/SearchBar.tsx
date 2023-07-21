'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    if (location === '') return;
    router.push(`/search?city=${location}`);
    setLocation('');
  };

  return (
    <div className="text-left py-3 m-auto flex justify-center">
      <input
        className="rounded text-lg text-black mr-3 w-74 p-2 w-[450px] bg-white "
        type="text"
        placeholder="State, city or town"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        enterKeyHint="enter"
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSearch();
        }}
      />
      <button
        className="bg-red-600 px-9 py-2 text-white rounded"
        onClick={() => {
          handleSearch();
        }}
      >
        Let`s go
      </button>
    </div>
  );
}
