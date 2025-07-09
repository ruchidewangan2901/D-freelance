import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { postJob } from "../api"; // ✅ Clean and reusable

const JobForm = ({ onJobPosted }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    budget: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const job = await postJob(formData); // ✅ Use helper function
      if (onJobPosted) onJobPosted(job);

      setFormData({ title: "", description: "", budget: "" });
      alert("✅ Job posted successfully!");
      navigate("/jobs");
    } catch (error) {
      console.error("❌ Error posting job:", error.message);
      alert("❌ Failed to post job: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center px-4 py-12">
      <div className="bg-white dark:bg-gray-800 py-16 px-10 rounded-lg shadow-md w-full max-w-xl mx-auto min-h-[600px] flex flex-col justify-between">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
          Post a Job
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <textarea
            name="description"
            placeholder="Job Description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="number"
            name="budget"
            placeholder="Budget (USD)"
            value={formData.budget}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <div className="h-6"></div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
