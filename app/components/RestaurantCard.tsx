import Image from 'next/image';
import Link from 'next/link';
import { RestaurantCardType } from '../page';
import Price from './Price';
import Stars from './Stars';

interface Props {
  restaurant: RestaurantCardType;
}

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <Link href={`/restaurant/${restaurant.slug}`}>
      <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
        <Image
          src={restaurant.main_image}
          alt=""
          className="w-full h-36"
          width={100}
          height={100}
        />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">{restaurant.name}</h3>
          <div className="flex items-start">
            <Stars reviews={restaurant.reviews} />
            <p className="ml-2">
              {restaurant.reviews.length} {restaurant.reviews.length > 1 ? 'reviews' : 'review'}
            </p>
          </div>
          <div className="flex font-light capitalize">
            <p className=" mr-3">{restaurant.cuisine.name}</p>
            <Price price={restaurant.price} />
            <p>{restaurant.location.name}</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </div>
    </Link>
  );
}
