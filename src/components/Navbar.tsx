"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl">
      <div className="container mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo with gradient effect */}
        <div className="text-3xl font-bold tracking-wider">
          <Link
            href="/"
            className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent transition-all hover:scale-105"
          >
            Brand Name
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-lg font-medium py-2 px-4 rounded-lg hover:bg-gray-700/30"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-lg font-medium py-2 px-4 rounded-lg hover:bg-gray-700/30"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-lg font-medium py-2 px-4 rounded-lg hover:bg-gray-700/30"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-teal-400 transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-700">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-300 hover:text-teal-400 text-lg px-4 py-3 rounded-lg hover:bg-gray-700/30 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-300 hover:text-teal-400 text-lg px-4 py-3 rounded-lg hover:bg-gray-700/30 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-gray-300 hover:text-teal-400 text-lg px-4 py-3 rounded-lg hover:bg-gray-700/30 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
