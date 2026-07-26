import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="hover:text-blue-600 font-bold">
          LamaCommerce
        </Link>
        <div className="hidden md:flex space-x-6 ">
          <Link href="/" className="text-blue-600">
            Home
          </Link>
          <Link href="/" className="hover:text-blue-600 hover:border-b-2">
            Products
          </Link>
          <Link className="hover:text-blue-600 hover:border-b-2" href="/">
            Checkout
          </Link>
        </div>
        <div className="flex items-center space-x-4">|Cart|</div>
      </div>
    </nav>
  );
};

export default Navbar;
