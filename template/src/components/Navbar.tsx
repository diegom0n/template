import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-gray-600 shadow-md">
      <div className="flex justify-between items-center px-4 py-2 max-w-screen-xl mx-auto w-full">
        <div className="logo text-white text-2xl font-semibold">
          <Link href="/">LOGO</Link>
        </div>
        <div className="social-icons flex gap-4">
          <Link href="https://www.facebook.com" target="_blank" className="text-white hover:text-blue-500">
            <FaFacebook size={24} />
          </Link>

          <Link href="https://www.twitter.com" target="_blank" className="text-white hover:text-blue-400">
            <FaTwitter size={24} />
          </Link>

          <Link href="https://www.instagram.com" target="_blank" className="text-white hover:text-pink-500">
            <FaInstagram size={24} />
          </Link>

          <Link href="https://www.linkedin.com" target="_blank" className="text-white hover:text-blue-700">
            <FaLinkedin size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
