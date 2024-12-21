import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// ICONS
import { BiArrowFromRight } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

// useState
import { useStateForViews } from '../hooks/Hooks';
import { useToast } from '@chakra-ui/react';

// Toast
import { toast_info_saved } from '../toast/Toast';

// Redux
import { useSelector } from 'react-redux';
import Loading from './Loading';

const Details = () => {

  // useState
  const { showTooltip, setShowTooltip, showTooltip_2, setShowTooltip_2,showTooltip_3, setShowTooltip_3 ,loading, setLoading, openedDetail, isOpenedDetails } = useStateForViews();

  // Pop up

  const handleClosePopup = () => {
    isOpenedDetails(false);
  };

  // Redux
  const hotel = useSelector(state => state.hotel.hotels[0]);

  
  // Toast
  const toast = useToast()
  const Save = () => {
    toast_info_saved(toast)
  }
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);

    {/* Loading */}
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
    {openedDetail && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center  z-50 shadow ">
        <div className="bg-gray-300  border border-gray-400 p-8 rounded-lg shadow font-arial">
          <h2 className="text-2xl font-bold mb-4 text-center">Hey!</h2>
          <p className="text-lg mb-4 font-arial">You can access the details by hovering the mouse cursor over the texts.</p>
          <button onClick={handleClosePopup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Close
          </button>
        </div>
      </div>
    )}
<div className='pl-10 lg:pl-20 pr-10 lg:pr-20 mt-10'>
  {/* Header Section */}
  <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
    {/* Hotel Name */}
    <h1 className='text-4xl font-bold font-serif text-gray-900 pt-12'>
      HOTEL - {hotel.name}
    </h1>

    {/* Home Button */}
    <div className='flex justify-end mt-8'>
      <Link to={"/"}>
        <button className='bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-green-700 transition-transform duration-300'>
          <BiArrowFromRight className='w-6 h-6' />
        </button>
      </Link>
    </div>
  </div>

  {/* Description Section */}
  <div className='border-b-2 border-gray-200 py-6 mt-8'>
    <p className='text-lg text-gray-800 font-medium'>
      {hotel.description}
    </p>
  </div>

  {/* Additional Info Section */}
  <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12'>
    {/* Adult and Child Count */}
    <div className='relative' onMouseEnter={() => setShowTooltip_2(true)} onMouseLeave={() => setShowTooltip_2(false)}>
      <span className='text-lg font-semibold text-gray-700'>
        A - {hotel.adultCount} | C - {hotel.childCount}
      </span>
      {showTooltip_2 && (
        <div className='absolute left-0 mt-2 p-2 bg-gray-800 text-white rounded-md shadow-lg opacity-90'>
          Adult: {hotel.adultCount} | Child: {hotel.childCount}
        </div>
      )}
    </div>

    {/* Phone Number */}
    <div className='flex items-center text-lg text-gray-700'>
      <FaPhoneAlt className='mr-3 text-xl text-blue-500' />
      <a href="tel:+1234567890" className='underline hover:text-blue-600'>123-456-7890</a>
    </div>

    {/* Location Section */}
    <div className='flex items-center text-lg text-gray-700'>
      <FaLocationArrow className='mr-3 text-xl text-blue-500' />
      <span>
        {hotel.country}, 
        <a href={`https://www.google.com/maps?q=${hotel.city}`} target="_blank" rel="noopener noreferrer" className='underline hover:text-blue-600'>{hotel.city}</a>
      </span>
    </div>

    {/* Price Per Night */}
    <div className='relative' onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
      <span className='text-lg font-semibold text-gray-700'>
        PPR: {hotel.pricePerNight} €
      </span>
      {showTooltip && (
        <div className='absolute left-0 mt-2 p-2 bg-gray-800 text-white rounded-md shadow-lg opacity-90'>
          Currency: Euro<br />
          Price Per Night: {hotel.pricePerNight} €
        </div>
      )}
    </div>

    {/* Facilities Section */}
    <div className='relative' onMouseEnter={() => setShowTooltip_3(true)} onMouseLeave={() => setShowTooltip_3(false)}>
      <span className='text-lg font-semibold text-gray-700'>
        Facilities
      </span>
      {showTooltip_3 && (
        <div className='absolute left-0 mt-2 p-2 bg-gray-800 text-white rounded-md shadow-lg opacity-90'>
          <ul className='space-y-2'>
            {hotel.facilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>
        </div>
      )}
    </div>

    {/* Additional Info */}
    <div className='text-lg font-semibold text-gray-700'>
      <span>Star Rating: {hotel.starRating}</span>
    </div>
    <div className='text-lg font-semibold text-gray-700'>
      <span>Type: {hotel.type}</span>
    </div>
  </div>
</div>

    
      </div>
 

  );
};

export default Details;
