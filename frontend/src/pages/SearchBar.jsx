import React from 'react';

// ICONS
import { MdAirlineSeatReclineExtra, MdAirlineStops, MdGppGood, MdTravelExplore, MdSearch, MdClear } from 'react-icons/md';

// src/toasts/SearchBarToast
import { toast_info_search_b } from '../toast/Toast.js';

// useToast - Chakra UI
import { useToast } from '@chakra-ui/react';

// Custom Hooks
import { useStatesForSearchBar } from '../hooks/Hooks.jsx';

const SearchBar = ({ onSearch }) => {
  const { name, setName, city, setCity, country, setCountry, starRating, setStarRating } = useStatesForSearchBar();
  const toast = useToast();

  const handleSearch = () => {
    onSearch({ name, city, country, starRating });
    toast_info_search_b(toast);
  };

  return (
    <div className="flex justify-center items-center w-full bg-gray-100 ">
      <form className="p-6 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-xl shadow-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-6 w-full max-w-6xl">
        {/* Name Input */}
        <div className="flex items-center justify-center bg-white p-3 rounded-lg shadow-md">
          <MdTravelExplore size={25} className="mr-2 text-blue-600" />
          <input
            placeholder="Where are you going?"
            className="text-md w-full focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
  
        {/* City Input */}
        <div className="flex items-center justify-center bg-white p-3 rounded-lg shadow-md">
          <MdAirlineSeatReclineExtra size={25} className="mr-2 text-blue-600" />
          <input
            placeholder="Which City?"
            className="text-md w-full focus:outline-none"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
  
        {/* Country Input */}
        <div className="flex items-center justify-center bg-white p-3 rounded-lg shadow-md">
          <MdAirlineStops size={25} className="mr-2 text-blue-600" />
          <input
            placeholder="Which Country?"
            className="text-md w-full focus:outline-none"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
  
        {/* Star Rating Input */}
        <div className="flex items-center justify-center bg-white p-3 rounded-lg shadow-md">
          <MdGppGood size={25} className="mr-2 text-blue-600" />
          <input
            type="range"
            min={1}
            max={10}
            className="text-md w-full focus:outline-none"
            value={starRating}
            onChange={(e) => setStarRating(e.target.value)}
          />
        </div>
  
        {/* Buttons */}
        <div className="flex gap-4 justify-center col-span-full lg:col-span-1 ">
          <button
            type="button"
            onClick={handleSearch}
            className="flex items-center gap-2  bg-green-700 text-white rounded-lg px-4 py-2 font-bold text-lg shadow-md hover:from-green-500 hover:to-green-700 transform hover:scale-105 transition-transform"
          >
            <MdSearch size={20} />
            
          </button>
  
          <button
            type="reset"
            className="flex items-center gap-2 bg-red-700 text-white rounded-lg px-4 py-2 font-bold text-lg shadow-md hover:from-red-500 hover:to-red-700 transform hover:scale-105 transition-transform"
          >
            <MdClear size={20} />
         
          </button>
        </div>
      </form>
    </div>
  );
  

};

export default SearchBar;
