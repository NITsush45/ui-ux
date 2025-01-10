import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex justify-between items-center flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-sm">
            <Link
              to="/privacy-policy"
              className="hover:underline hover:text-pink-400 transition-all duration-300"
            >
              Privacy Policy
            </Link>
            <span className="mx-2 text-gray-400">|</span>
            <Link
              to="/terms"
              className="hover:underline hover:text-pink-400 transition-all duration-300"
            >
              Terms of Service
            </Link>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {[
              {
                href: "https://facebook.com",
                src: "https://img.icons8.com/ios-filled/24/ffffff/facebook--v1.png",
                alt: "Facebook",
              },
              {
                href: "https://instagram.com",
                src: "https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png",
                alt: "Instagram",
              },
              {
                href: "https://linkedin.com",
                src: "https://img.icons8.com/ios-filled/24/ffffff/linkedin-circled--v1.png",
                alt: "LinkedIn",
              },
            ].map((icon, index) => (
              <motion.a
                key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hover:scale-110 transition-transform"
              >
                <img src={icon.src} alt={icon.alt} />
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="text-center text-sm mt-6 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-pink-400 font-bold">
            RelationShip
            <span className="text-blue-400 mx-1">♥</span>
            Care
          </span>
          . All rights reserved.
        </motion.div>
        <motion.div
          className="mt-4 mx-auto w-32 h-1 bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        ></motion.div>
      </div>
    </footer>
  );
};

export default Footer;
