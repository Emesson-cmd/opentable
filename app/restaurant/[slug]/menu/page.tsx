import Header from '../components/Header';
import RestaurantNavBar from '../components/RestaurantnavBar';
import Menu from '../components/Menu';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug },
    select: {
      items: true,
    },
  });

  if (!restaurant) throw new Error();

  return restaurant.items
};

export default async function RestaurantMenu({ params }: { params: { slug: string } }) {
  const menu = await fetchRestaurantMenu(params.slug)
  console.log("🚀 ~ file: page.tsx:23 ~ RestaurantMenu ~ menu:", menu)
  
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavBar slug={params.slug} />
      <Menu menu={menu} />
    </div>
  );
}
