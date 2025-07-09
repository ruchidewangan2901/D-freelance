import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="bg-indigo-600 dark:bg-gray-900 shadow-md py-4 px-6 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="text-3xl md:text-4xl font-bold text-white dark:text-indigo-300 mb-2 md:mb-0">
          <Link to="/">D-Freelancer</Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6 text-white dark:text-gray-300 text-sm font-medium">
          <Link
            to="/"
            className="hover:text-gray-100 dark:hover:text-indigo-400 transition"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="hover:text-gray-100 dark:hover:text-indigo-400 transition"
          >
            Login / Signup
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded border border-white/20 dark:border-indigo-500 text-white dark:text-gray-200 text-xs hover:bg-indigo-700 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
