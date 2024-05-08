import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import More from "./More";
import InteractiveFeatures from "./InteractiveFeatures";
import "./css/navbar.css";

const NavBar = () => {
  const [curUser, setCurUser] = useState(null)

  const user = JSON.parse(localStorage.getItem("cur_user"));
  if (user) {
    setCurUser(user)
  }

  const handleSignout = async () => {
    await fetch('https://epics-8d25.onrender.com/logout');
    setCurUser(null);
    localStorage.removeItem("cur_user")
  }

  return (
    <header className="shadow z-60 top-0">
      <nav className="bg-gradient-to-r from-blue-700 to-blue-800 border-b-2 border-blue-800 px-4 lg:px-6 py-2.5">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl relative">
          <NavLink to="/" className="flex items-center">
            <img src="/Images/ll1.png" className="mr-3 h-16" alt="Logo" />
          </NavLink>

          <div className="hidden lg:flex space-x-4 items-center">
            <NavLink
              to="/"
              exact
              className="nav-link text-white hover:text-black transition-all duration-300 text-lg "
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="nav-link text-white hover:text-black transition-all duration-300 text-lg"
            >
              About Us
            </NavLink>
            <InteractiveFeatures />
            <More />
          </div>

          <div className="flex items-center lg:order-2">
            {curUser ? (
              <>
                <button
                  to="/login"
                  type="button"
                  onClick={handleSignout}
                  className="text-blue-900 bg-white hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-all duration-300"
                >
                  Signout
                </button>
                <NavLink
                  to="/profile"
                  className="text-white hover:bg-gray-500 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-lg px-5 py-2 lg:py-2.5 focus:outline-none transition-all duration-300"
                >
                  {curUser.username}
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="text-blue-900 bg-white hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-all duration-300"
                >
                  Log in
                </NavLink>
                <NavLink
                  to="/signup"
                  className="text-cyan-900 bg-white hover:bg-gray-200 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-lg px-5 py-2 lg:py-2.5 focus:outline-none transition-all duration-300"
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
