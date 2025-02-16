import React, { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <nav
      className={`bg-[#38323e] p-4 shadow-md fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        scrollY > 50 ? "-translate-y-10" : "translate-y-0"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-row items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-16 hover:scale-150 transition"
          />
          <p className="font-bold text-gray-300">WAVE PROGRAMMING</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/home"
            className={`text-white font-semibold hover:text-gray-600 pb-2 ${
              location.pathname === "/home" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`text-white font-semibold hover:text-gray-600 pb-2 ${
              location.pathname === "/services" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            Services
          </Link>
          <Link
            to="/blog"
            className={`text-white font-semibold hover:text-gray-600 pb-2 ${
              location.pathname === "/blog" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            Blog
          </Link>

          <div className="relative">
            <button
              className="text-white flex items-center hover:text-gray-600 font-bold"
              onClick={toggleCategories}
            >
              Categories
              <ChevronDownIcon className="w-5 h-5 ml-1" />
            </button>
            {isCategoriesOpen && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-200 text-black p-2 space-y-2">
                <Link to="/category1" className="block hover:bg-gray-100 px-4 py-2">
                  Web design
                </Link>
                <Link to="/category2" className="block hover:bg-gray-100 px-4 py-2">
                  App Development
                </Link>
                <Link to="/category3" className="block hover:bg-gray-100 px-4 py-2">
                  UI/UX Design
                </Link>
                <Link to="/category4" className="block hover:bg-gray-100 px-4 py-2">
                  SEO
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login">
            <button className="text-black bg-blue-50 border hover:bg-blue-700 px-4 py-2 rounded">
              Log In
            </button>
          </Link>
          <Link to="/freeTrial">
            <button className="text-black bg-blue-200 border hover:bg-blue-700 px-4 py-2 rounded">
              Free Trial
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#38323e] p-4 space-y-4 mt-4">
          <Link to="/home" className="block text-white" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/services" className="block text-white" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <Link to="/blog" className="block text-white" onClick={() => setIsMenuOpen(false)}>
            Blog
          </Link>
          {/* Mobile Categories Dropdown */}
          <button className="block text-white flex items-center" onClick={toggleCategories}>
            Categories <ChevronDownIcon className="w-5 h-5 ml-1" />
          </button>
          {isCategoriesOpen && (
            <div className="pl-4 space-y-2">
              <Link to="/category1" className="block text-white" onClick={() => setIsMenuOpen(false)}>
                Web design
              </Link>
              <Link to="/category2" className="block text-white" onClick={() => setIsMenuOpen(false)}>
                App Development
              </Link>
              <Link to="/category3" className="block text-white" onClick={() => setIsMenuOpen(false)}>
                UI/UX Design
              </Link>
              <Link to="/category4" className="block text-white" onClick={() => setIsMenuOpen(false)}>
                SEO
              </Link>
            </div>
          )}
          <Link to="/login" className="block text-white" onClick={() => setIsMenuOpen(false)}>
            Log In
          </Link>
          <Link to="/freeTrial" className="block text-white" onClick={() => setIsMenuOpen(false)}>
            Free Trial
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
