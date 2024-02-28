import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const More = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  let closeTimeout;

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
    clearTimeout(closeTimeout); 
  };

  const handleMouseLeave = () => {
    
    closeTimeout = setTimeout(() => {
      setIsMenuOpen(false);
    }, 100); 
  };

  // Close the dropdown if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative group" ref={buttonRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        type="button"
        className="nav-link text-white hover:text-black transition-all duration-300 text-lg focus:outline-none group-hover:text-black group-hover:bg-blue-800"
      >
        More
      </button>
      {isMenuOpen && (
        <div ref={dropdownRef} className="absolute right-0 mt-2 bg-blue-900 border border-white rounded-lg shadow-lg">
          <ul className="py-2 px-4 space-y-2">
            <li>
              <Link to="/education" className="text-white hover:text-blue-300 transition-all duration-300 block w-48 py-2">
                Education Content
              </Link>
            </li>
            <li>
              <Link
                to="/peer-support-forum"
                className="text-white hover:text-blue-300 transition-all duration-300 block w-48 py-2"
              >
                Peer Support Forum
              </Link>
            </li>
            <li>
              <Link
                to="/school-partnerships"
                className="text-white hover:text-blue-300 transition-all duration-300 block w-48 py-2"
              >
                School Partnerships
              </Link>
            </li>
            <li>
              <Link
                to="/community-workshops"
                className="text-white hover:text-blue-300 transition-all duration-300 block w-48 py-2"
              >
                Community Workshops
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default More;
