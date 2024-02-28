import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const InteractiveFeatures = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  let closeTimeout;

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
    clearTimeout(closeTimeout); // Clear any scheduled timeout to close the dropdown
  };

  const handleMouseLeave = () => {
    // Schedule a delay before closing the dropdown
    closeTimeout = setTimeout(() => {
      setIsMenuOpen(false);
    }, 100); // Adjust the delay time as needed
  };

  // Close the dropdown if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative"
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className="nav-link text-white hover:text-black transition-all duration-300 text-lg focus:outline-none"
      >
        Interactive Features
      </button>
      {isMenuOpen && (
        <div
          ref={dropdownRef}
          className="absolute mt-2 bg-blue-900 border border-white rounded-lg shadow-lg"
        >
          <ul className="py-2 px-4 space-y-2">
            {/* ... (existing content) */}
            <li>
              <Link
                to="/cbot"
                className="text-white hover:text-blue-300 transition-all duration-300 block w-48 py-2"
              >
                Chat Bot
              </Link>
            </li>
            <li>
            <Link
                to="/quizzes"
                className="text-white hover:text-blue-300 transition-all duration-300 block w-48 py-2"
              >
                Quizzes
              </Link>
              <Link
                to="/games"
                className="text-white hover:text-blue-300 transition-all duration-300 block w-48 py-2"
              >
                Games
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default InteractiveFeatures;
