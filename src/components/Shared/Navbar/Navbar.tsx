/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface ISessionProps {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
}

const Navbar = ({ session }: { session: ISessionProps | null }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");

    if (session?.user) {
      signOut();
    }

    router.push("/");
  };

  return (
    <nav className="bg-pink-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={`/`}>
              <h1 className="text-3xl text-black">TECHNO SOFT</h1>
            </Link>
          </div>
          {/* Links for larger screens */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              ABOUT US
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              SERVICES
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              STAFF AUGMENTATION
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              PORTFOLIO
            </a>
            <Link href={`/blog`} className="text-gray-700 hover:text-blue-600">
              BLOG
            </Link>
          </div>
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href={`/dashboard`}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Dashboard
            </Link>
            {typeof session?.user === "object" ? (
              <>
                <button
                  onClick={handleLogout}
                  type="button"
                  className="bg-white text-black px-4 py-2 rounded-lg hover:bg-pink-300"
                >
                  Logout
                </button>
                <span>{session?.user?.name}</span>
              </>
            ) : (
              <Link
                href="/auth/register"
                className="bg-white text-black px-4 py-2 rounded-lg hover:bg-pink-300"
              >
                Register
              </Link>
            )}
          </div>
          {/* Hamburger for mobile */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600"
          >
            ABOUT US
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600"
          >
            SERVICES
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600"
          >
            STAFF AUGMENTATION
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600"
          >
            PORTFOLIO
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600"
          >
            BLOG
          </a>
          <a
            href="#"
            className="block bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 text-center hover:bg-blue-600"
          >
            BOOK A MEETING
          </a>
          <a
            href="#"
            className="block bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 text-center hover:bg-blue-600"
          >
            CALL US
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
