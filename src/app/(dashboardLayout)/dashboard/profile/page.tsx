import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

const MyProfile = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Profile Header */}
      <div className="relative bg-gray-800 h-40">
        {/* Background cover section */}
      </div>

      {/* Profile Info Section */}
      <div className="relative flex flex-col items-center p-6">
        <Image
          className="absolute -top-16 w-32 h-32 bg-blue-500 rounded-full border-4 border-black"
          src={
            session?.user?.image ||
            "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
          }
          height={100}
          width={100}
          alt="image"
        />

        <div className="mt-20 text-center">
          <h1 className="text-2xl font-bold">{session?.user?.name}</h1>
          <p className="text-gray-400">{session?.user?.email}</p>
          <div className="mt-2 flex items-center justify-center space-x-2">
            <button className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M12 0C5.371 0 0 5.371 0 12C0 18.628 5.371 24 12 24C18.628 24 24 18.628 24 12C24 5.371 18.628 0 12 0ZM10.758 18.74L4.517 12.499C4.253 12.236 4.253 11.793 4.517 11.53L5.471 10.575C5.735 10.311 6.179 10.311 6.443 10.575L10.935 15.067L17.557 8.446C17.821 8.183 18.264 8.183 18.528 8.446L19.482 9.4C19.746 9.664 19.746 10.107 19.482 10.37L11.111 18.741C10.847 19.005 10.404 19.005 10.14 18.741L10.758 18.74Z" />
              </svg>
              <span>Get verified</span>
            </button>
            <button className="bg-gray-700 text-white py-1 px-3 rounded-full text-sm">
              Edit profile
            </button>
          </div>
          <p className="text-gray-400 mt-2">Joined January 2024</p>

          {/* Following and Followers */}
          <div className="flex justify-center space-x-4 mt-4">
            <div>
              <span className="font-bold">2</span> Following
            </div>
            <div>
              <span className="font-bold">0</span> Followers
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center space-x-6 border-b border-gray-700 mt-8">
        <button className="py-3 px-4 border-b-2 border-blue-500">Posts</button>
        <button className="py-3 px-4 text-gray-400">Replies</button>
        <button className="py-3 px-4 text-gray-400">Highlights</button>
        <button className="py-3 px-4 text-gray-400">Articles</button>
        <button className="py-3 px-4 text-gray-400">Media</button>
        <button className="py-3 px-4 text-gray-400">Likes</button>
      </div>

      {/* Content Area */}
      <div className="mt-6 text-center">
        <p className="text-gray-500">No posts yet</p>
      </div>

      {/* Who to follow section */}
      <div className="mt-8 bg-gray-800 p-6">
        <h2 className="text-lg font-bold mb-4">Who to follow</h2>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-yellow-500 rounded-full"></div>
            <div className="ml-4">
              <p className="font-bold">NBC Sports</p>
              <p className="text-gray-400 text-sm">@NBCSports</p>
            </div>
          </div>
          <button className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm">
            Follow
          </button>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-red-500 rounded-full"></div>
            <div className="ml-4">
              <p className="font-bold">SportsCenter</p>
              <p className="text-gray-400 text-sm">@SportsCenter</p>
            </div>
          </div>
          <button className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
