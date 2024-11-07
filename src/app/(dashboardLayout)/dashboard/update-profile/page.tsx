/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const UpdateProfile = () => {
  // For simplicity, manage form state locally (you can integrate with APIs)

  return (
    <div className="bg-black min-h-screen text-white flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Update Profile</h1>

        <form>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-400 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600"
            />
          </div>

          {/* Username */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-400 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600"
            />
          </div>

          {/* Bio */}
          <div className="mb-4">
            <label htmlFor="bio" className="block text-gray-400 mb-2">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600"
            />
          </div>

          {/* Profile Picture */}
          <div className="mb-4">
            <label
              htmlFor="profilePicture"
              className="block text-gray-400 mb-2"
            >
              Profile Picture
            </label>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-400 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
