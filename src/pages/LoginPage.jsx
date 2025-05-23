import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleLogin} className="bg-white p-8 shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2">Signin to your PopX account</h1>
        <p className="mb-6 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <input
          className="w-full border rounded p-2 mb-4"
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full border rounded p-2 mb-4"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-violet-600 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
