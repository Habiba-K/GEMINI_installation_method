import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-custom-purple">
      <div className="container mx-auto px-6 h-full flex justify-between items-center">
        <div className="text-3xl font-bold text-white">
          <Link href="/">
            Canva
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center space-x-10">
            <li>
              <Link href="/features" className="text-white hover:text-gray-200 text-lg font-medium">
                Features
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-white hover:text-gray-200 text-lg font-medium">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-gray-200 text-lg font-medium">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-gray-200 text-lg font-medium">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="bg-white text-custom-purple text-lg font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
