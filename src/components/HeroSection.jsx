import React from 'react';
import brochureImg from '../assets/brochure.png';
import bgImg from '../assets/institute.jpg';

const HeroSection = () => {
  return (
    <div
      className="relative h-[100vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* Left: Brochure */}
          <div className="flex justify-center">
            <img
              src={brochureImg}
              alt="Conference Brochure"
              className="w-80 md:w-[400px] rounded-xl shadow-2xl"
            />
          </div>

          {/* Right: Conference Info with overlay */}
          <div className="bg-black/60 p-6 md:p-10 rounded-lg text-white text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ICIRME 2025
            </h1>
            <p className="text-lg md:text-xl mb-4 text-blue-100">
              International Conference on Innovations & Research in Mechanical Engineering
            </p>
            <p className="text-md md:text-lg mb-6">
              December 15-17, 2025 • Hybrid Mode • NIT Jamshedpur
            </p>
            <a
              href="https://easychair.org/conferences?conf=icirme2025"
              className="inline-block !no-underline mt-4 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-semibold shadow-md transition"
            >
              Register Now
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
