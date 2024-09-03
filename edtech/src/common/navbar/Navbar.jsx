import { Avatar } from '@mui/material'
import React, { useState } from "react";
import { NavLink } from "react-router-dom"; 
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useLocation, useNavigate } from 'react-router-dom';

 export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const {username}  = location.state || { username: 'Guest' };
  
  const navigate =useNavigate();

  const gotoLogin = () => {
    navigate('/login');
  }

  //  toggle the sidebar
  const toggleSidebar = () => {
    if(username === 'Guest'){
      setIsOpen(isOpen);
    }else{
      setIsOpen(!isOpen);
    }   
  };

  return (
    <>
      <nav className="flex justify-between  mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
        <h2 className="text-black font-semibold text-2xl hover:text-rose-800">
          <NavLink to="/">Tech Academy</NavLink>
        </h2>

        {/* Search bar */}
        <form>
          <input
            type="text"
            name="search"
            placeholder="Enter course..."
            className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-gray-500 focus:shadow-black"
          />
        </form>

        {/* Navbar options */}
        <ul className="flex gap-10">
          <li>
            <NavLink to="/" className="text-black hover:text-blue-600 duration-300">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-black hover:text-blue-600 duration-300">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/course" className="text-black hover:text-blue-600 duration-300">
              Courses
            </NavLink>
          </li>

          {/* Avatar Dropdown */}
          <li>
                {username === 'Guest'? (
                  <button onClick={gotoLogin} className="bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-1 px-4 rounded">login </button> ) 
                :( <button onClick={toggleSidebar} className="rounded-full focus:outline-none"><Avatar>{username}</Avatar> </button>)}
          </li>
        </ul>
      </nav>

      {/* Sidebar */}
      {isOpen && (
        <div>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={toggleSidebar}
          />

          {/* Sidebar Menu */}
          <div className="fixed top-0 right-0 h-full w-64 bg-gray-800 text-white shadow-lg transform transition-transform duration-300 z-20">
            <button
              onClick={toggleSidebar}
              className="absolute top-4 right-4 text-white hover:text-gray-400"
            >
              &times;
            </button>

            {/* Sidebar content */}
            <div className="p-8 flex flex-col h-full space-y-4">
              <h2 className="text-2xl font-semibold"><Avatar>{username}</Avatar></h2>
              <a
                href="#profile"
                className="block text-lg font-semibold px-4 py-2 bg-blue-300 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Profile
              </a>
              <a
                href="#my-courses"
                className="block text-lg font-semibold px-4 py-2 bg-blue-300 rounded-md hover:bg-blue-700 transition duration-300"
              >
                My Courses
              </a>
              <a
                href="#certificates"
                className="block text-lg font-semibold px-4 py-2 bg-blue-300 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Certificates
              </a>

              <div className="flex space-x-4 justify-center">
            <a
              href="https://twitter.com"
              className={'text-white text-xl transform transition-transform duration-500 ease-out '}
              target="_blank"
              rel="noopener noreferrer"
            >
             <XIcon/>
            </a>
            <a
              href="https://facebook.com"
              className={'text-white text-xl transform transition-transform duration-500 ease-out '}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon/>
            </a>
            <a
              href="https://linkedin.com"
              className={'text-white text-xl transform transition-transform duration-500 ease-out '}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon/>
            </a>
          </div>

              <div className="flex-grow"></div>

              <a
                href="/login"
                className="block text-lg font-semibold px-4 py-2  bg-blue-300 rounded-md hover:bg-blue-700 transition duration-300"
                >
                LogOut
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
