import React from 'react';
import introduction from '../Images/About Us/introduction.jpg';
import second_photo from '../Images/About Us/second_photo.jpg';
import checkmark from '../Images/About Us/check.png';
import hand_shaking from '../Images/About Us/hand_shaking.jpg';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      {/* Main Title */}
      <div className="text-center text-4xl font-semibold text-gray-900 mb-12">
        We Are <a href="/" className="text-sky-500 hover:text-sky-600">LunaHotel.com</a>, But Who Are We?
      </div>

      {/* First Section: Introduction */}
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

      {/* Second Section: Why Us */}
      <div className="mt-20 text-center text-3xl font-arial font-bold mb-4">
        <span>WHY US?</span>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ul className="list-none space-y-6 text-xl text-gray-700 font-light">
          <li className="flex items-start">
            <img src={checkmark} alt="Checkmark" className="w-5 h-5 inline-block mr-2" />
            At Luna Hotel, we pride ourselves on offering an unparalleled experience of elegance and comfort. From meticulously designed rooms to luxurious amenities, every detail is crafted to ensure your stay is nothing short of extraordinary.
          </li>
          <li className="flex items-start">
            <img src={checkmark} alt="Checkmark" className="w-5 h-5 inline-block mr-2" />
            Indulge in a culinary journey like no other at Luna Hotel. Our world-class restaurants and bars offer a diverse range of flavors, from gourmet dishes to local specialties. Discover a symphony of tastes that will tantalize your senses.
          </li>
          <li className="flex items-start">
            <img src={checkmark} alt="Checkmark" className="w-5 h-5 inline-block mr-2" />
            Our dedicated team is committed to providing you with the highest level of personalized service. From the moment you arrive to the time of your departure, we are here to cater to your every need, ensuring a seamless and memorable stay.
          </li>
          <li className="flex items-start">
            <img src={checkmark} alt="Checkmark" className="w-5 h-5 inline-block mr-2" />
            Escape the hustle and bustle of everyday life at our serene spa. Immerse yourself in a world of relaxation and rejuvenation with our curated selection of treatments, designed to refresh both body and mind.
          </li>
        </ul>
        <img
          src={hand_shaking}
          alt="Hand Shaking"
          className="h-80 w-full object-cover rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105"
        />
      </div>

      {/* Third Section: Second Image */}
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

export default AboutUs;
