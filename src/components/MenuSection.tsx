import Image from "next/image";
import Link from "next/link";

interface MenuItem {
  imageSrc: string;
  title: string;
  price: string;
}

const MenuSection = () => {
  const menuItems: MenuItem[] = [
    {
      imageSrc: "/hero/lettuce.png",
      title: "Lettuce Leaf",
      price: "12.55",
    },
    {
      imageSrc: "/hero/lettuce.png",
      title: "Fresh Breakfast",
      price: "14.95",
    },
    {
      imageSrc: "/hero/lettuce.png",
      title: "Milk Butter",
      price: "13.85",
    },
    {
      imageSrc: "/hero/lettuce.png",
      title: "Fresh Broccoli",
      price: "12.55",
    },
    {
      imageSrc: "/hero/lettuce.png",
      title: "Glow Cheese",
      price: "14.95",
    },
    {
      imageSrc: "/hero/lettuce.png",
      title: "Italian Pizza",
      price: "15.25",
    },
    {
      imageSrc: "/hero/lettuce.png",
      title: "Slice Beef",
      price: "14.25",
    },
    {
      imageSrc: "/hero/lettuce.png",
      title: "Mushroom Pizza",
      price: "13.25",
    },
  ];

  const MenuCard = ({ imageSrc, title, price }: MenuItem) => {
    return (
      <div className="flex  md:flex-col items-center gap-4 lg:bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transition cursor-pointer">
        <div className="w-16 h-16 rounded-lg overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            width={90}
            height={90}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-orange-500 font-bold text-sm">${price}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-black py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-lg text-orange-400 font-great-vibes">
            Choose & Enjoy
          </h3>
          <h2 className="text-4xl font-bold text-white">
            From Our <span className="text-orange-500">Menu</span>
          </h2>
        </div>

        {/* Top Navigation Links */}
        <div className="text-center mb-12 hidden lg:block md:block">
          <nav>
            <ul className="flex justify-center gap-8 text-orange-400">
              <li className="relative group">
                <Link href="#breakfast">
                  <span className="hover:text-orange-500">Breakfast</span>
                </Link>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-500"></span>
              </li>
              <li className="relative group">
                <Link href="#lunch">
                  <span className="hover:text-orange-500">Lunch</span>
                </Link>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-500"></span>
              </li>
              <li className="relative group">
                <Link href="#dinner">
                  <span className="hover:text-orange-500">Dinner</span>
                </Link>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-500"></span>
              </li>
              <li className="relative group">
                <Link href="#dessert">
                  <span className="hover:text-orange-500">Dessert</span>
                </Link>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-500"></span>
              </li>
              <li className="relative group">
                <Link href="#drink">
                  <span className="hover:text-orange-500">Drink</span>
                </Link>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-500"></span>
              </li>
              <li className="relative group">
                <Link href="#snacks">
                  <span className="hover:text-orange-500">Snacks</span>
                </Link>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-500"></span>
              </li>
            </ul>
          </nav>
        </div>

        {/* Menu Content */}
        <div className="flex flex-row gap-8 items-start">
          {/* Left Image */}
          <div className="w-1/2 flex justify-center items-center mt-12">
            <Image
              src="/hero/image.png"
              alt="Salad Plate"
              width={366}
              height={362}
              className="rounded-full object-cover"
            />
          </div>

          {/* Menu Items */}
          <div className="w-1/2">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6">
              {menuItems.map((item, index) => (
                <MenuCard
                  key={index}
                  imageSrc={item.imageSrc}
                  title={item.title}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
