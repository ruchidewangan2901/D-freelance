import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  // const toggleDarkMode = () => {
  //   const newMode = !darkMode;
  //   setDarkMode(newMode);

  //   // Toggle the `dark` class on the root html element
  //   if (newMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // };
  return (
    <nav className="bg-indigo-500 dark:bg-gray-900 shadow-md py-4 px-6 sticky top-0 z-50 transition">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-4xl font-extrabold text-white dark:text-indigo-300">
          D-Freelancer
        </div>
        <div className="flex space-x-4 items-center text-gray-800 dark:text-gray-200">
          <Link to="/" className="hover:text-white text-small font-semibold dark:hover:text-indigo-300">
            Home
          </Link>
          <Link to="/login" className="hover:text-white text-small font-semibold dark:hover:text-indigo-300">
            Login /
            Signup
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-2 py-1 border rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
