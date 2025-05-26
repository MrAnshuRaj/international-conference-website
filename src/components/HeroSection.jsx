import React, { useState } from 'react';
import bgImg from '../assets/nitbg.jpeg';
import droneVid from '../assets/hero-video.mp4'

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative h-[100vh] flex items-center justify-center overflow-hidden">

      {/* Background Image (visible until video loads) */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
          videoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      
      <video
        className="absolute inset-0 w-full h-full object-cover mt-19"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src={droneVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground content */}
    <div className="relative z-10 max-w-7xl w-full px-6 md:px-12">
    <div className="flex justify-center items-center">
      <div className="bg-black/60 p-6 md:p-15 rounded-lg text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">ICIRME 2025</h1>
        <p className="text-lg md:text-xl mb-4 text-blue-100">
          International Conference on Innovations & Research in Mechanical Engineering
        </p>
        <p className="text-md md:text-lg mb-6">
          December 15-17, 2025 • Hybrid Mode • NIT Jamshedpur
        </p>
      </div>
  </div>
</div>

    </div>
  );
};

export default HeroSection;
