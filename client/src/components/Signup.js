import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import supabase from "../supabaseClient";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const { name, email, password } = formData;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      alert("🎉 Account created! Check your email to verify.");
      navigate("/");
    }
  };

  return (
    // <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-[#1a202c] dark:to-[#2d3748] flex items-center justify-center px-4">
    //   <div className="bg-white dark:bg-[#2d3748] text-black dark:text-white p-8 rounded-lg shadow-md w-full max-w-md">
    //     <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
    //<div className="min-h-screen flex items-center justify-center px-4 transition-colors duration-300 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-900 dark:to-gray-950">
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">

    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-8 rounded-lg shadow-md w-full max-w-md transition-colors duration-300">
      <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>


        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#4a5568] text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#4a5568] text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#4a5568] text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          {errorMsg && <p className="text-red-500 text-sm text-center">{errorMsg}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/Login" className="text-indigo-600 hover:underline dark:text-indigo-400 dark:hover:text-indigo-300">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
