import React from 'react';
import introduction from '../Images/About Us/introduction.jpg';
import second_photo from '../Images/About Us/second_photo.jpg';

const MainInfo = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      {/* Main Title */}
      <div className="text-center text-4xl font-semibold text-gray-900 mb-12">
        We Are <a href="/" className="text-sky-500 hover:text-sky-600">LunaHotel.com</a>, But Who Are We?
      </div>

      {/* First Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src={introduction}
          alt="Introduction"
          className="h-80 w-full object-cover rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105"
        />
        <div className="flex flex-col space-y-6 mt-6 md:mt-0">
          <p className="text-xl text-gray-700 font-light">
            Escape to a world of tranquility and luxury at <a href="/" className="underline text-sky-500">Luna Hotel</a>, where every moment is designed to enchant and delight. Nestled in the heart of breathtaking landscapes, Luna offers a sanctuary of comfort and sophistication.
          </p>
          <p className="text-xl text-gray-700 font-light">
            Step into a realm of timeless elegance where modern design meets classic charm. Our meticulously <a href="/" className="underline text-pink-500">designed rooms and suites offer unparalleled comfort</a>, each thoughtfully crafted to create a serene retreat.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
        <div className="flex flex-col space-y-6 mt-6 md:mt-0 md:order-2">
          <p className="text-xl text-gray-700 font-light">
            Escape to a world of tranquility and luxury at <a href="/" className="underline text-sky-500">Luna Hotel</a>, where every moment is designed to enchant and delight. Nestled in the heart of breathtaking landscapes, Luna offers a sanctuary of comfort and sophistication.
          </p>
          <p className="text-xl text-gray-700 font-light">
            Step into a realm of timeless elegance where modern design meets classic charm. Our meticulously <a href="/" className="underline text-pink-500">designed rooms and suites offer unparalleled comfort</a>, each thoughtfully crafted to create a serene retreat.
          </p>
        </div>
        <img
          src={second_photo}
          alt="Second Photo"
          className="h-80 w-full object-cover rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default MainInfo;
