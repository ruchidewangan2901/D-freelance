import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-800 dark:to-gray-900 px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Available Jobs
          </h2>
          {jobs.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-300">
              No jobs posted yet.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                    {job.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 mb-4">
                    {job.description}
                  </p>
                  <div className="text-sm font-medium text-indigo-500 dark:text-indigo-300">
                    💰 Budget: Rs{job.budget}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default JobList;
