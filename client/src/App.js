import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";


function App() {
  const location = useLocation();

  // Hide navbar on landing page
  //const hideNavbarOn = ["/"];
  const isLanding = location.pathname === "/";

  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Sync dark mode class with document
  // useEffect(() => {
  //   const html = document.documentElement;
  //   if (darkMode && !isLanding) {
  //     html.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     html.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // }, [darkMode, isLanding]);

//   useEffect(() => {
//   const html = document.documentElement;

//   if (darkMode) {
//     html.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//   } else {
//     html.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//   }
// }, [darkMode]); // ✅ remove isLanding from dependency list

// useEffect(() => {
//   const html = document.documentElement;

//   if (location.pathname !== "/") {
//     if (darkMode) {
//       html.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       html.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   } else {
//     // Always remove dark mode on landing
//     html.classList.remove("dark");
//   }
// }, [darkMode, location.pathname]);

useEffect(() => {
  const html = document.documentElement;

  if (location.pathname !== "/") {
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  } else {
    html.classList.remove("dark");
  }
}, [darkMode, location.pathname]);


  return (
    <>
      
      {!isLanding && <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />}


      {!isLanding ? (
        <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Routes>
            <Route path="/post-job" element={<JobForm />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
