import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CBot from './components/CBot'
import Quiz from "./components/Quiz";
import Games from "./components/Games";
import CW from './components/CW';
import PSF from './components/psf';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cbot" element={<CBot />} />
        <Route path="/quizzes" element={<Quiz />} />
        <Route path="/games" element={<Games />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cw" element={<CW />} />
        <Route path="/psf" element={<PSF />} />
        
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
