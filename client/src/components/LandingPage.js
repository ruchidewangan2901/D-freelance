

import React from 'react';
import { useNavigate } from 'react-router-dom';
import devImage from '../assets/hero.png';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0B1120] text-white px-6 py-10 font-sans">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            A Decentralized <br /> Freelance Marketplace
          </h1>

          <p className="text-xl text-gray-300 mb-6">
            Connecting clients with developers in a secure, decentralized environment.
          </p>
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => navigate('/post-job')}
              className="bg-blue-600 px-5 py-2 rounded hover:bg-blue-700 transition"
            >
              I’m a Client
            </button>
            <button
              onClick={() => navigate('/jobs')}
              className="bg-gray-700 px-5 py-2 rounded hover:bg-gray-800 transition"
            >
              I’m a Freelancer
            </button>
          </div>
          <p className="italic text-gray-400 mt-6">
            “empowering developers and clients alike”
          </p>
        </div>
        <img
          src={devImage}
          alt="Freelancer"
          className="w-72 md:w-[350px] mt-10 md:mt-0"
        />
      </div>
    </div>
  );
}

