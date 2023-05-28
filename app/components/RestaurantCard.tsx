import Image from 'next/image';
import Link from 'next/link';

export default function RestaurantCard() {
  return (
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
  );
}
