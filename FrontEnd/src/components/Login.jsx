import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login', {
        username,
        password,
      });

      if (response.data.success) {
        // Successful login logic (redirect, set user in state, etc.)
        console.log('Login successful!');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Internal server error');
    }
  };

  return (
    <div className="container mx-auto mt-24">
      <h1 className="text-4xl font-bold mb-4 text-cyan-600 text-center">Log In</h1>
      <div className="bg-cyan-100 rounded-md p-8 mb-8">
        <h2 className="text-4xl font-bold mb-4 text-cyan-600 text-center">Unlock a World of Mental Wellness</h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Log in to gain access to a supportive community and interactive content designed to empower you with knowledge about mental health.
        </p>
        <form onSubmit={handleLogin} className="max-w-md mx-auto">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label htmlFor="username" className="block text-cyan-700 font-semibold mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-cyan-300 rounded-md px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-cyan-700 font-semibold mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-cyan-300 rounded-md px-3 py-2"
              required
            />
          </div>
          <NavLink to="/login" className="w-full">
            <button
              type="submit"
              className="bg-cyan-500 text-white rounded-md px-4 py-2 hover:bg-cyan-600 focus:outline-none focus:ring focus:border-cyan-300 w-full"
            >
              Log in
            </button>
          </NavLink>
        </form>
        <p className="text-cyan-600 mt-4 text-center">
          Don't have an account?{' '}
          <NavLink to="/signup" className="text-cyan-500 hover:underline">
            Sign up here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
