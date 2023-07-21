import Header from './components/Header';
import SearchSideBar from './components/SearchSideBar';
import RestaurantCard from './components/RestaurantCard';
import { Cuisine, Location, PRICE, PrismaClient } from '@prisma/client';

export interface RestaurantProps {
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
}

const prisma = new PrismaClient();

const fetchRestaurantsByLocation = (city: string | undefined): Promise<RestaurantProps[]> => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    cuisine: true,
    location: true,
    price: true,
  };

  if (!city) return prisma.restaurant.findMany({ select });

  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          contains: city.toLowerCase(),
        },
      },
    },
    select,
  });
};

const fetchLocations = () => {
  return prisma.location.findMany()
}

const fetchCuisines = () => {
  return prisma.cuisine.findMany()
}

export default async function Search({ searchParams }: { searchParams: { city: string } }) {
  const restaurants = await fetchRestaurantsByLocation(searchParams.city);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();
  
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar locations={locations} cuisines={cuisines} />
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
