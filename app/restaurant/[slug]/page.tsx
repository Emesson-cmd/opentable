export default function RestaurantDetails() {
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
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <nav className="flex text-reg border-b pb-2">
              <a href="" className="mr-7">
                Overview
              </a>
              <a href="" className="mr-7">
                Menu
              </a>
            </nav>

            <div className="mt-4 border-b pb-6">
              <h1 className="font-bold text-6xl">Milesstone Grill</h1>
            </div>

            <div className="flex items-end">
              <div className="ratings mt-2 flex items-center">
                <p>*****</p>
                <p className="text-reg ml-3">4.9</p>
              </div>

              <div>
                <p className="text-reg ml-4">600 reviews</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-lg font-light">
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </p>
            </div>

            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">7 photos</h1>
              <div className="flex flex-wrap">
                <img className="w-56 h-44 mr-1 mb-1" src="https://picsum.photos/536/354" alt="" />
                <img
                  className="w-56 h-44 mr-1 mb-1"
                  src="https://picsum.photos/id/237/536/354"
                  alt=""
                />
                <img
                  className="w-56 h-44 mr-1 mb-1"
                  src="https://picsum.photos/seed/picsum/200/300"
                  alt=""
                />
                <img
                  className="w-56 h-44 mr-1 mb-1"
                  src="https://picsum.photos/id/1084/536/354?grayscale"
                  alt=""
                />
                <img
                  className="w-56 h-44 mr-1 mb-1"
                  src="https://picsum.photos/id/1060/536/354?blur=2"
                  alt=""
                />
              </div>
            </div>

            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                What 100 people are saying
              </h1>

              <div>
                <div className="border-b pb-7 mb-7">
                  <div className="flex">
                    <div className="w-1/6 flex flex-col items-center">
                      <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                        <h2 className="text-white text-2xl">MJ</h2>
                      </div>
                      <p className="text-center">Michael Jordan</p>
                    </div>
                    <div className="ml-10 w-5/6">
                      <div className="flex items-center">
                        <div className="flex mr-5">*****</div>
                      </div>
                      <div className="mt-5">
                        <p className="text-lg font-light">
                          Sed ante metus, lacinia ultricies nisi at, pharetra congue urna. Morbi nec
                          velit urna. Vivamus sit amet gravida ipsum. Duis consectetur odio ut
                          convallis dapibus. Quisque et facilisis dolor. Duis facilisis urna vitae
                          massa pharetra, quis vehicula mi pharetra. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Maecenas efficitur nulla euismod mauris
                          ornare, viverra posuere tortor vehicula.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[27%] relative text-reg">
            <div className="fixed w-[15%] bg-white rounded p-3 shadow">
              <div className="text-center border-b pb-2 font-bold">
                <h4 className="mr-7 text-lg">Make a Reservation</h4>
              </div>

              <div className="my-3 flex flex-col">
                <label htmlFor="">Party Size</label>
                <select name="" id="" className="py-3 border-b font-light">
                  <option value="">1 person</option>
                  <option value="">2 person</option>
                </select>
              </div>

              <div className="flex justify-between">
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="">Date</label>
                  <input type="text" className="py-3 border-b front-light w-28" />
                </div>

                <div className="flex flex-col w-[48%]">
                  <label htmlFor="">Time</label>
                  <select name="" id="" className="py-3 border-b font-light ">
                    <option value="">7:30 AM</option>
                    <option value="">9:30 AM</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
                  Find a Time
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
