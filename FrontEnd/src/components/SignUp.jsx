import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://epics-8d25.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      if (data) {
        localStorage.setItem("cur_user", JSON.stringify(data));
        navigate("/")
      } else {
        // Signup failed, display error message
        setError(data.error || 'Sign up failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred, please try again later.');
    }
  };

  return (
    <div className="container mx-auto mt-24">
      <h1 className="text-4xl font-bold mb-4 text-cyan-600 text-center">Sign Up</h1>
      <div className="bg-cyan-100 rounded-md p-8 mb-8">
        <h2 className="text-4xl font-bold mb-4 text-cyan-600 text-center">Join Our Mental Wellness Community</h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Sign up to access a supportive community and interactive content designed to empower you with knowledge about mental health.
        </p>
        <form onSubmit={handleSignUp} className="max-w-md mx-auto">
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
            <label htmlFor="email" className="block text-cyan-700 font-semibold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <button
            type="submit"
            className="bg-cyan-500 text-white rounded-md px-4 py-2 hover:bg-cyan-600 focus:outline-none focus:ring focus:border-cyan-300 w-full"
          >
            Sign Up
          </button>
        </form>
        <p className="text-cyan-600 mt-4 text-center">
          Already have an account?{' '}
          <NavLink to="/login" className="text-cyan-500 hover:underline">
            Log in here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
