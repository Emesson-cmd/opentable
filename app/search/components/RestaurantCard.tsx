import Image from 'next/image';
import Link from 'next/link';
import { RestaurantProps } from '../page';
import Price from '../../components/Price';
import { getAvaregeRating } from '../../../utils/calculateReviewRatingAvarage';
import Stars from '../../components/Stars';

export default function RestaurantCard({ restaurant }: { restaurant: RestaurantProps }) {
  const getRatingText = () => {
    const averageRating = getAvaregeRating(restaurant.reviews);

    switch (true) {
      case averageRating === 0:
        return '';
      case averageRating < 2.6:
        return 'Mediocre Meals';
      case averageRating < 4.6:
        return 'Surprising Flavors';
      default:
        return 'Exceptional Culinary Experience';
    }
  };

  return (
    <div className="border-b flex pb-5">
      <Image src={restaurant.main_image} alt="" className="w-44 rounded" width={100} height={100} />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <Stars reviews={restaurant.reviews} />
          <p className="ml-2 text-sm">{getRatingText()}</p>
        </div>

        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={restaurant.price} />
            <p className="mr-4">{restaurant.cuisine.name}</p>
            <p className="mr-4">{restaurant.location.name}</p>
          </div>
        </div>

        <div className="text-red-600">
          <Link href="/restaurant/milestone">View more information</Link>
        </div>
      </div>
    </div>
  );
}
