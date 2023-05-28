import Image from 'next/image';
import Link from 'next/link';

export default function Search() {
  return (
    <main>
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

        <div className="bg-gradient-to-r to-[#5f6984]  from-[#0f1f47] p-2">
          <div className="text-left py-3 m-auto flex justify-center">
            <input
              className="rounded text-lg text-black mr-3 w-74 p-2 w-[450px] bg-white "
              type="text"
              placeholder="State, city or town"
            />
            <button className="bg-red-600 px-9 py-2 text-white rounded">Let`s go</button>
          </div>
        </div>

        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <div className="w-1/5">
            <div className="border-b pb-4">
              <h1 className="mb-">Regions</h1>
              <p className="font-light text-reg">Toronto</p>
              <p className="font-light text-reg">Ottawa</p>
              <p className="font-light text-reg">Motreal</p>
              <p className="font-light text-reg">Hamilton</p>
              <p className="font-light text-reg">Lingston</p>
              <p className="font-light text-reg">Niiagara</p>
            </div>

            <div className="border-b pb-4 mt-3">
              <h1 className="mb-">Vuisine</h1>
              <p className="font-light text-reg">Mexican</p>
              <p className="font-light text-reg">Italian</p>
              <p className="font-light text-reg">Brazilian</p>
              <p className="font-light text-reg">Chinese</p>
            </div>

            <div className="mt-3 pb-4">
              <h1 className="mb-2">Price</h1>
              <div className="flex">
                <button className="border w-full text-reg font-light rounded-l p-2">$</button>
                <button className="border-r border-t border-b w-full font-light text-reg p-2">
                  $$
                </button>
                <button className="border-r border-t border-b w-full font-light text-reg rounded-r p-2">
                  $$$
                </button>
              </div>
            </div>
          </div>

          <div className="w-5/6">
            <div className="border-b flex pb-5">
              <Image
                src="https://picsum.photos/id/870/536/354?grayscale&blur=2"
                alt=""
                className="w-44 rounded"
                width={100}
                height={100}
              />
              <div className="pl-5">
                <h2 className="text-3xl">Restaurant name</h2>
                <div className="flex items-start">
                  <div className="flex mb-2">*****</div>
                  <p className="ml-2 text-sm">Awsome</p>
                </div>

                <div className="mb-9">
                  <div className="font-light flex text-reg">
                    <p className="mr-4">$$$</p>
                    <p className="mr-4">Mexican</p>
                    <p className="mr-4">Ottawa</p>
                  </div>
                </div>

                <div className="text-red-600">
                  <a href="">View more information</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
