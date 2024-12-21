import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// ICONS
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";

// useState
import { useStatesForMyHotel } from '../hooks/Hooks';

const MyHotels = () => {
  axios.defaults.withCredentials = true;

   {/* useState */}
  const { hotels, setHotels} = useStatesForMyHotel()

  useEffect(() => {
    // my-hotels/
    // Take data as JSON
    axios.get('http://localhost:7000/my-hotels')
      .then(response => { 
        setHotels(response.data);
      })
      .catch(error => {
        console.error('Error fetching hotels:', error);
      });
  }, []); 

  // Delete Func
  const deleteButton = async (hotelId) => {
    try {
      // my-hotels/delete/:id
      const response = await axios.delete(`http://localhost:7000/my-hotels/delete/${hotelId}`);
      
      if (response.data.message === "Hotel deleted successfully") {
        const updatedHotels = hotels.filter((hotel) => hotel._id !== hotelId);
        setHotels(updatedHotels);
      } else {
        console.error("Delete error -> Hotel not founds");
      }
    } catch (error) {
      console.error("Delete error ->", error);
    }
  };

  return (
    <div className="pl-10 lg:pl-20 pr-10 lg:pr-20 mt-10">
    {/* Section Header */}
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-4xl font-bold text-gray-900">Your Hotels</h1>
      {/* Add Hotel Button */}
      <Link 
        to="/add-hotel" 
        className="bg-blue-600 text-white text-xl font-semibold py-2 px-6 rounded-full hover:bg-blue-500 hover:scale-105 transition-all duration-300"
      >
        Add Hotel
      </Link>
    </div>
  
    {/* Hotels List */}
    {hotels.map((hotel) => (
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6" key={hotel._id}>
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="font-bold text-2xl text-gray-800">{hotel.name}</h3>
          <p className="text-gray-600">{hotel.description}</p>
  
          {/* Details Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
            <div className="flex items-center text-gray-700">
              <BsMap className="mr-2" />
              <span>{hotel.city}, {hotel.country}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <BsBuilding className="mr-2" />
              <span>{hotel.type}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <BiMoney className="mr-2" />
              <span>€ {hotel.pricePerNight} per night</span>
            </div>
            <div className="flex items-center text-gray-700">
              <BiHotel className="mr-2" />
              <span>{hotel.adultCount} Adults, {hotel.childCount} Children</span>
            </div>
            <div className="flex items-center text-gray-700">
              <BiStar className="mr-2" />
              <span>{hotel.starRating} star rating</span>
            </div>
          </div>
        </div>
  
        {/* Action Buttons */}
        <div className="flex justify-between mt-6">
          {/* Delete Button */}
          <button 
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
            onClick={() => deleteButton(hotel._id)}
          >
            Delete
          </button>
  
          {/* Edit Button */}
          <Link
            to={`/my-hotels/edit/${hotel._id}`}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
          >
            Edit
          </Link>
        </div>
      </div>
    ))}
  </div>
  
  );
};

export default MyHotels;
