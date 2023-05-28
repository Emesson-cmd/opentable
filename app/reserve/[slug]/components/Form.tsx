import React from 'react';

export default function Form() {
  return (
    <div className="mt-10 flex flex-wrap flex-row justify-between w-[600px]">
      <input type="text" className="border rounded p-3 w-[48%] mb-4" placeholder="First name" />

      <input type="text" className="border rounded p-3 w-[48%] mb-4" placeholder="Last name" />

      <input type="text" className="border rounded p-3 w-[48%] mb-4" placeholder="Phone number" />

      <input type="text" className="border rounded p-3 w-[48%] mb-4" placeholder="Email" />

      <input
        type="text"
        className="border rounded p-3 w-[48%] mb-4"
        placeholder="Occasion (optional)"
      />

      <input
        type="text"
        className="border rounded p-3 w-[48%] mb-4"
        placeholder="Requests (optional)"
      />

      <button className="bg-red-600 w-full p-3 rounded text-white font-bold disabled:bg-gray-300">
        Complete reservation
      </button>

      <p className="text-sm mt-4">
        Sed ante metus, lacinia ultricies nisi at, pharetra congue urna. Morbi nec velit urna.
        Vivamus sit amet gravida ipsum. Duis consectetur odio ut convallis dapibus. Quisque et
        facilisis dolor. Duis facilisis urna vitae massa pharetra, quis vehicula mi pharetra. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur nulla euismod mauris
        ornare, viverra posuere tortor vehicula.
      </p>
    </div>
  );
}
