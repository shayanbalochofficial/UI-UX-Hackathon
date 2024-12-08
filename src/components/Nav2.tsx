import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="px-16 w-full absolute top-0 z-50 bg-black">
      <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-yellow-500">
          <span className="text-white">Food</span>tuck
        </h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-white">
          {[
            { name: "Home", path: "/" },
            { name: "Menu", path: "/Menu" },
            { name: "Blog", path: "/blog" },
            { name: "Pages", path: "/pages" },
            { name: "About", path: "/about" },
            { name: "Shop", path: "/ShopList" },
            { name: "Contact", path: "/contact" },
          ].map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="relative group hover:text-yellow-500 transition duration-300"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Search and Cart Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <FiSearch className="text-white text-xl cursor-pointer hover:text-yellow-500 transition duration-300" />

          <Link href="/ShoppingCart"><FiShoppingBag className="text-white text-xl cursor-pointer hover:text-yellow-500 transition duration-300" /></Link>
          <FaRegUser className="text-white text-xl cursor-pointer hover:text-yellow-500 transition duration-300" />
        </div>
      </div>
    </header>
  );
}
