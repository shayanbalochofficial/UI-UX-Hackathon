"use client";
import Link from "next/link";
import { FiSearch, FiShoppingBag, FiMenu } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="px-6 md:px-16 w-full absolute top-0 z-50 bg-transparent">
      <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-yellow-500">
          <span className="text-white">Food</span>tuck
        </h1>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex space-x-8 text-white md:flex md:space-x-8 md:text-white`}
        >
          {[ 
            { name: "Home", path: "/" },
            { name: "Menu", path: "/Menu" },
            { name: "Blog", path: "/blog" },
            { name: "Pages", path: "/pages" },
            { name: "About", path: "/about" },
            { name: "Shop", path: "/ShopList" },
            { name: "Contact", path: "/contact" }
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

        {/* Search and Cart (hidden on mobile) */}
        <div className="flex items-center space-x-4">
          {/* Search Input (hidden on mobile) */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-40 py-2 px-4 bg-transparent border border-yellow-500 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <FiSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-yellow-500 cursor-pointer" />
          </div>

          {/* Cart Icon */}
          <Link href="/ShoppingCart">
            <FiShoppingBag className="text-white text-xl cursor-pointer hidden hover:text-yellow-500 md:block" />
          </Link>
        </div>

        {/* Hamburger Icon (Move to the right) */}
        <div className="md:hidden ml-auto">
          <FiMenu
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 md:hidden`}
        onClick={toggleMenu}
      >
        <div className="absolute top-0 left-0 w-3/4 bg-white p-8">
          <nav className="flex flex-col space-y-4 text-black">
            {[ 
              { name: "Home", path: "/" },
              { name: "Menu", path: "/Menu" },
              { name: "Blog", path: "/blog" },
              { name: "Pages", path: "/pages" },
              { name: "About", path: "/about" },
              { name: "Shop", path: "/ShopList" },
              { name: "Contact", path: "/contact" }
            ].map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="hover:text-yellow-500 transition duration-300"
              >
                {link.name}
              </Link>
            ))}
            {/* Cart Link in Mobile Menu */}
            <Link href="/ShoppingCart">
              <div className="text-black hover:text-yellow-500 transition duration-300">
                Cart
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
