import { Link } from 'react-router-dom';
import Axios from 'axios';
import React, { useEffect } from 'react';
import { useStatesHeader } from '../hooks/Hooks';

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useStatesHeader();

  useEffect(() => {
    const checkTokenValidity = async () => {
      try {
        const response = await Axios.post(
          'http://localhost:7000/check',
          {},
          {
            withCredentials: true,
          }
        );
        if (response.data.valid) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Token validity check failed:', error);
      }
    };

    checkTokenValidity();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await Axios.post(
        'http://localhost:7000/logout',
        {},
        {
          withCredentials: true,
        }
      );
      console.log(response.data.message);
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-white text-2xl font-semibold">
          <Link to="/">Hotel Book</Link>
        </div>
        <div className="flex space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                to="/info"
                className="bg-white text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-md font-medium transition duration-300"
              >
                About Us
              </Link>
              <Link
                to="/my-hotels"
                className="bg-white text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-md font-medium transition duration-300"
              >
                My Hotels
              </Link>
              <Link
                to="/"
                className="bg-white text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-md font-medium transition duration-300"
              >
                Home
              </Link>
              <button
                onClick={handleLogout}
                className="bg-white text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-md font-medium transition duration-300"
              >
                Log Out
              </button>
            </>
          ) : (
            <Link
              to="/users/register"
              className="bg-white text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-md font-medium transition duration-300"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;