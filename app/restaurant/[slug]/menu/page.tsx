export default function RestaurantMenu() {
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

        <div className="h-96 overflow-hidden">
          <div className="bg-center bg-gradient-to-t from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
            <h1 className="text-7xl text-white capitalize text-shadow text-center">
              Milestones Grill (Torinto)
            </h1>
          </div>
        </div>

        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            <nav className="flex text-reg border-b pb-2">
              <a href="" className="mr-7">
                Overview
              </a>
              <a href="" className="mr-7">
                Menu
              </a>
            </nav>

            <main className="bg-white mt-5">
              <div>
                <div className="mt-4 pb-1 mb-1">
                  <h1 className="font-bold text-4xl">Menu</h1>
                </div>

                <div className="flex flex-wrap justify-between">
                  <div className="border rounded p-3 w-[49%] mb-3">
                    <h3 className="font-bold text-lg">Surf and Turf</h3>
                    <p className="font-light mt-1 text-sm">
                      A well done steak with lobster and rice
                    </p>
                    <p className="mt-7">$80.00</p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </main>
    </main>
  );
}
