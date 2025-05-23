import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2">Welcome to PopX</h1>
        <p className="mb-6 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <button className="w-full bg-violet-600 text-white py-2 rounded mb-3" onClick={() => navigate('/register')}>Create Account</button>
        <button className="w-full bg-violet-200 text-black py-2 rounded" onClick={() => navigate('/login')}>Already Registered? Login</button>
      </div>
    </div>
  );
}