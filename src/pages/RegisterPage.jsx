import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function RegisterPage() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Simulate registration
    navigate('/account');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Create your PopX account</h1>
        <input
          className="w-full border rounded p-2 mb-3"
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Full Name*"
        />
        <input
          className="w-full border rounded p-2 mb-3"
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone number*"
        />
        <input
          className="w-full border rounded p-2 mb-3"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email address*"
        />
        <input
          className="w-full border rounded p-2 mb-3"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password*"
        />
        <input
          className="w-full border rounded p-2 mb-3"
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Company name"
        />
        <p className="mb-2 text-sm font-medium">Are you an Agency?*</p>
        <div className="flex gap-4 mb-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="isAgency"
              value="yes"
              checked={form.isAgency === 'yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="isAgency"
              value="no"
              checked={form.isAgency === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
        <button className="w-full bg-violet-600 text-white py-2 rounded" onClick={handleSubmit}>
          Create Account
        </button>
      </div>
    </div>
  );
}
