import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[70vh] flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1906406/pexels-photo-1906406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Navigation Arrows */}
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-400 transition-colors duration-200 z-10">
        <ChevronLeft className="h-12 w-12" />
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-400 transition-colors duration-200 z-10">
        <ChevronRight className="h-12 w-12" />
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
            Engineering Excellence
            <br />
            <span className="text-red-400">and Innovation</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Delivering sustainable, high-quality infrastructure solutions that exceed client expectations through professional expertise and innovative engineering.
          </p>
          <button className="bg-red-700 hover:bg-red-800 text-white font-semibold py-4 px-8 rounded transition-colors duration-200 transform hover:scale-105">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
        <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;