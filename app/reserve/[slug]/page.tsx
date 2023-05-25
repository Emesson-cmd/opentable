export default function Reserve() {
  return (
    <main>
      <main className="max-w-screen-2xl m-auto bg-white">
        <nav className="bg-white p-2 flex justify-between">
          <a href="" className="font-bold text-gray-700 text-2xl">
            OpenTable
          </a>
          <div>
            <div className="flex">
              <button className="bg-blue-400 text-white border p-2 px-4 rounded mr-3">
                Sign In
              </button>
              <button className="text-black border p-2 px-4 rounded">Sign Up</button>
            </div>
          </div>
        </nav>

        <div className="border-top h-screen">
          <div className="py-9 w-3/5 m-auto">
            <div>
              <h3 className="font-bold">You're almost done!</h3>
              <div className="mt-5 flex">
                <img
                  src="https://picsum.photos/200/300/?blur"
                  alt=""
                  className="w-32 h-18 rounded"
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

            <div className="mt-10 flex flex-wrap flex-row justify-between w-[600px]">
              <input
                type="text"
                className="border rounded p-3 w-[48%] mb-4"
                placeholder="First name"
              />

              <input
                type="text"
                className="border rounded p-3 w-[48%] mb-4"
                placeholder="Last name"
              />

              <input
                type="text"
                className="border rounded p-3 w-[48%] mb-4"
                placeholder="Phone number"
              />

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
                Sed ante metus, lacinia ultricies nisi at, pharetra congue urna. Morbi nec velit
                urna. Vivamus sit amet gravida ipsum. Duis consectetur odio ut convallis dapibus.
                Quisque et facilisis dolor. Duis facilisis urna vitae massa pharetra, quis vehicula
                mi pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                efficitur nulla euismod mauris ornare, viverra posuere tortor vehicula.
              </p>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
