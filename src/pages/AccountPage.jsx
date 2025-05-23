import React from 'react';
export default function AccountPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 shadow-lg w-full max-w-md">
        <h1 className="text-xl font-bold mb-4">Account Settings</h1>
        <div className="flex items-start gap-4">
          <div className="relative">
            <img className="h-16 w-16 rounded-full" src="https://i.pravatar.cc/150?img=3" alt="avatar" />
            <span className="absolute bottom-0 right-0 bg-violet-600 text-white text-xs rounded-full p-1">📷</span>
          </div>
          <div>
            <p className="font-semibold">Mary Doe</p>
            <p className="text-sm text-gray-600">Mary@Gmail.Com</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-gray-700">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
}
