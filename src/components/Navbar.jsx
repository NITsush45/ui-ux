import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      className="bg-pink-600 text-white shadow-md sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          RelationShip
          <span className="text-blue-400 mx-1">♥</span>
          Care
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="hover:text-pink-300 transition duration-300 font-medium"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="hover:text-pink-300 transition duration-300 font-medium"
          >
            Services
          </Link>
          <Link
            to="/about-us"
            className="hover:text-pink-300 transition duration-300 font-medium"
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
            className="hover:text-pink-300 transition duration-300 font-medium"
          >
            Contact Us
          </Link>
          <Link
            to="/blog"
            className="hover:text-pink-300 transition duration-300 font-medium"
          >
            Blog
          </Link>
          <Link
            to="/faqs"
            className="hover:text-pink-300 transition duration-300 font-medium"
          >
            FAQs
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-pink-700 text-white space-y-2 px-6 py-4">
          <Link
            to="/"
            className="block hover:bg-pink-500 rounded-lg px-4 py-2 font-medium"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="block hover:bg-pink-500 rounded-lg px-4 py-2 font-medium"
            onClick={handleLinkClick}
          >
            Services
          </Link>
          <Link
            to="/about-us"
            className="block hover:bg-pink-500 rounded-lg px-4 py-2 font-medium"
            onClick={handleLinkClick}
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
            className="block hover:bg-pink-500 rounded-lg px-4 py-2 font-medium"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
          <Link
            to="/blog"
            className="block hover:bg-pink-500 rounded-lg px-4 py-2 font-medium"
            onClick={handleLinkClick}
          >
            Blog
          </Link>
          <Link
            to="/faqs"
            className="block hover:bg-pink-500 rounded-lg px-4 py-2 font-medium"
            onClick={handleLinkClick}
          >
            FAQs
          </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
