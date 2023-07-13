import Image from 'next/image';
import Link from 'next/link';

export default function RestaurantCard() {
  return (
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
            <Link href="/restaurant/milestone">View more information</Link>
          </div>
        </div>
      </div>
  );
}