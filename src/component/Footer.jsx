import React from "react";
import { Link } from "react-router-dom"; // Link কম্পোনেন্ট ইম্পোর্ট করুন

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-5 pt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Services Section */}
        <nav>
          <h6 className="text-lg font-semibold mb-3 text-white">Services</h6>
          <ul className="space-y-2">
            <li><Link to="/branding" className="hover:text-gray-400">Branding</Link></li>
            <li><Link to="/design" className="hover:text-gray-400">Design</Link></li>
            <li><Link to="/marketing" className="hover:text-gray-400">Marketing</Link></li>
            <li><Link to="/advertisement" className="hover:text-gray-400">Advertisement</Link></li>
          </ul>
        </nav>

        {/* Company Section */}
        <nav>
          <h6 className="text-lg font-semibold mb-3 text-white">Company</h6>
          <ul className="space-y-2">
            <li><Link to="/about-us" className="hover:text-gray-400">About us</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
            <li><Link to="/jobs" className="hover:text-gray-400">Jobs</Link></li>
            <li><Link to="/press-kit" className="hover:text-gray-400">Press Kit</Link></li>
          </ul>
        </nav>

        {/* Legal Section */}
        <nav>
          <h6 className="text-lg font-semibold mb-3 text-white">Legal</h6>
          <ul className="space-y-2">
            <li><Link to="/terms-of-use" className="hover:text-gray-400">Terms of use</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-gray-400">Privacy policy</Link></li>
            <li><Link to="/cookie-policy" className="hover:text-gray-400">Cookie policy</Link></li>
          </ul>
        </nav>

        {/* Newsletter Section */}
        <div>
          <h6 className="text-lg font-semibold mb-3 text-white">Newsletter</h6>
          <p className="text-sm mb-4">Stay updated with our latest news</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring focus:border-gray-500 w-full"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
