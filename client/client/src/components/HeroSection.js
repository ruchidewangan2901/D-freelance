import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1500&q=80')" }}>
      <div className="bg-black bg-opacity-50 p-8 rounded shadow-lg max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Your skills are your freedom.</h1>
        <p className="text-lg md:text-xl">Work your way, from anywhere.</p>
      </div>
    </div>
  );
};

export default HeroSection;
