import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import { addHotel } from '../redux/features/counter/viewData';

// useState
import { useStatesForMainPage } from '../hooks/Hooks';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';


const MainPage = () => {
  
  // Redux
  const dispatch = useDispatch();
  const { errorLogs } = useSelector(state => state.hotel);
  
  // useState
  const { posts, setPosts, loading, setLoading, filters, setFilters, isOpen, setIsOpen, hotel, setHotel} = useStatesForMainPage()
  
  // Navigation
  const navigation = useNavigate()
     
 

  // Search Form
  const handleSearch = (searchFilters) => {
    setFilters(searchFilters);
  };
  
    // Close Up POPUP
  const handleClosePopup = () => {
    setIsOpen(false);
  };

    // Fetching Data Using Axios
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:7000/hotels/search', { params: filters });
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };


  useEffect(() => { 
    fetchData();
  }, [filters]); 

  axios.defaults.withCredentials = true;

  // id
  const { id } = useParams();

  // View Hotel and Redux app
  const viewHotelDetails = async (hotelId) => {
    try {
        const response = await axios.get(`http://localhost:7000/views/${hotelId}`);
        const hotel = response.data;
        dispatch(addHotel(hotel)); 
       
        navigation("/view/")
    } catch (error) {
        console.error("Hotel Error", error);
    }
};

      // Loading
  if (loading) return <div>Loading...</div>;

  return (
    <div>
    {isOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center  z-50">
        <div className="bg-gray-300  border border-gray-400 p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Welcome to Lunahotel.com</h2>
          <p className="text-lg mb-4">Don't forget to visit <a href = "https://github.com/doguhannilt"><span className='text-blue-400 hover:text-blue-600'>github.com/Doguhannilt</span></a></p>
          <button onClick={handleClosePopup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Close
          </button>
        </div>
      </div>
    )}
    <div>
      <SearchBar onSearch={handleSearch} />
      {posts
        // Filter && Search 
        .filter(post => {
          if (!Object.keys(filters).length) {
            return true;
          }
          return post.name === filters.name ||
                  post.city === filters.city ||
                  post.country === filters.country ||
                  post.starRating == filters.starRating;
        })
        .map(post => (
          // Post
          <div key={post.id} className="px-20 mt-20 grid grid-cols-1 xl:grid-cols-[1fr_3fr] border border-gray-300 rounded-lg p-8 gap-8 hover:shadow-lg transition-all duration-300">
          {/* Image Section */}
          <div className="w-full h-[300px] md:h-[240px] mt-4 overflow-hidden rounded-lg shadow-md">
            <img 
              src={post.imageUrls} 
              alt={post.name} 
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 hover:translate-x-2 hover:translate-y-2" 
            />
          </div>
        
          {/* Content Section */}
          <div className="flex flex-col justify-start mt-4 md:mt-0">
            {/* Title and Button */}
            <div className="flex justify-between items-center text-2xl font-bold text-gray-900">
              <h1>{post.name}</h1>
              <button 
                onClick={() => viewHotelDetails(post._id)} 
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 font-medium"
              >
                View Details
              </button>
            </div>
        
            {/* Additional Info */}
            <div className="flex gap-6 mt-4 text-gray-600 text-sm font-medium">
              <span><b>Adult Count:</b> {post.adultCount} - <b>Child Count:</b> {post.childCount}</span>
              <span><i>{post.city}</i>, {post.country}</span>
              <span><b>Price Per Night:</b> {post.pricePerNight}</span>
            </div>
        
            {/* Description */}
            <p className="mt-4 text-gray-700 text-base font-light line-clamp-3">
              {post.description}
            </p>
          </div>
        </div>
        
        ))}
    </div>
    </div>
  );
};

export default MainPage;
