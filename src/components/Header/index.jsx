"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  // Navbar toggle for mobile view
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="bg-[#4F8359] text-white py-4 px-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <img src="/logo/logo.png" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold">أفق</span>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center w-full max-w-md bg-white rounded-md">
          <input
            type="text"
            placeholder="ابحث هنا..."
            className="w-full px-4 py-2 text-black rounded-l-md focus:outline-none"
          />
          <button className="px-4 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M5 11a7 7 0 1014 0 7 7 0 00-14 0z"
              />
            </svg>
          </button>
        </div>

        {/* Login and Avatar Section */}
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Link href="/signin" className="text-sm md:text-base hover:underline">
            تسجيل الدخول
          </Link>
          <div className="relative w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-gray-700"
            >
              <path
                d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z"
              />
            </svg>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={navbarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {navbarOpen && (
        <div className="md:hidden mt-4 bg-[#4F8359]">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full max-w-xs bg-white rounded-md flex items-center">
              <input
                type="text"
                placeholder="ابحث هنا..."
                className="w-full px-4 py-2 text-black rounded-l-md focus:outline-none"
              />
              <button className="px-4 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M5 11a7 7 0 1014 0 7 7 0 00-14 0z"
                  />
                </svg>
              </button>
            </div>
            <Link href="/signin" className="text-sm hover:underline text-white">
              تسجيل الدخول
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
