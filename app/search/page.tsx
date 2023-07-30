import Header from './components/Header';
import SearchSideBar from './components/SearchSideBar';
import RestaurantCard from './components/RestaurantCard';
import { Cuisine, Location, PRICE, PrismaClient, Prisma, Review } from '@prisma/client';

export interface RestaurantProps {
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  reviews: Review[];
  slug: string;
}

interface SerachParams {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}

const prisma = new PrismaClient();

const fetchRestaurantsByCity = ({
  city,
  cuisine,
  price,
}: SerachParams): Promise<RestaurantProps[]> => {
  const where: Prisma.RestaurantWhereInput = {};

  if (city) {
    where.location = {
      name: {
        equals: city.toLowerCase(),
      },
    };
  }

  if (cuisine) {
    where.cuisine = {
      name: {
        equals: cuisine.toLowerCase(),
      },
    };
  }

  if (price) {
    where.price = {
      equals: price,
    };
  }

  const select = {
    id: true,
    name: true,
    main_image: true,
    cuisine: true,
    location: true,
    price: true,
    reviews: true,
    slug: true,
  };

  return prisma.restaurant.findMany({
    where,
    select,
  });
};

const fetchLocations = () => {
  return prisma.location.findMany();
};

const fetchCuisines = () => {
  return prisma.cuisine.findMany();
};

export default async function Search({ searchParams }: { searchParams: SerachParams }) {
  const restaurants = await fetchRestaurantsByCity(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar locations={locations} cuisines={cuisines} searchParams={searchParams} />
        <div className="w-5/6">
          {restaurants.length ? (
            restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))
          ) : (
            <p>Sorry, we could not found any restaurant with the provided location</p>
          )}
        </div>
      </div>
    </>
  );
}
