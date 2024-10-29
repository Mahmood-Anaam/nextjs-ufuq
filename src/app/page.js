"use client";
import React from "react";
import { toast } from "react-toastify";

const LevelsGrid = () => {
  const levels = [
    { id: 1, title: "المستوى الأول", unlocked: true },
    { id: 2, title: "المستوى الثاني", unlocked: false },
    { id: 3, title: "المستوى الثالث", unlocked: false },
    { id: 4, title: "المستوى الرابع", unlocked: false },
    { id: 5, title: "المستوى الخامس", unlocked: false },
    { id: 6, title: "المستوى السادس", unlocked: false },
    { id: 7, title: "المستوى السابع", unlocked: false },
    { id: 8, title: "المستوى الثامن", unlocked: false },
    { id: 9, title: "المستوى التاسع", unlocked: false },
    { id: 10, title: "المستوى العاشر", unlocked: false },
  ];

  // Function to show toast notification
  const handleLockedLevel = () => {
    toast.info("هذا المستوى غير مفتوح بعد");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-[#F2F7F2]">
      {/* Title and description */}
      <h1 className="text-4xl font-extrabold text-[#4F8359] mb-4 animate-fade-in">
        اكتشف المستويات التعليمية
      </h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-xl animate-fade-in">
        استمتع بتجربة تعليمية مميزة! افتح المستويات واستكشف الشخصيات التاريخية
        العربية وأثرها على لغتنا الجميلة.
      </p>

      {/* Levels Grid */}
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 place-items-center animate-fade-in">
        {levels.map((level) => (
          <div
            key={level.id}
            onClick={() => {
              if (!level.unlocked) handleLockedLevel();
            }}
            className={`relative w-32 h-32 md:w-40 md:h-40 bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${
              level.unlocked
                ? "cursor-pointer"
                : "cursor-not-allowed opacity-70"
            }`}
          >
            {/* Level Image */}
            <img
              src="/images/Arab-00.png"
              alt={level.title}
              className={`object-cover transition-opacity duration-300 ${
                level.unlocked ? "opacity-100" : "opacity-40"
              }`}
            />

            {/* Lock Icon */}
            {!level.unlocked && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-12 h-12 text-white"
                >
                  <path d="M12 2C8.691 2 6 4.691 6 8v4h-1v10h14V12h-1V8c0-3.309-2.691-6-6-6zm0 2c2.206 0 4 1.794 4 4v4H8V8c0-2.206 1.794-4 4-4zm-1 10h2v6h-2z" />
                </svg>
              </div>
            )}

            {/* Level Title */}
            <p className="absolute bottom-0 w-full text-center text-sm md:text-base font-semibold text-gray-700 bg-white bg-opacity-80 p-1 rounded-md">
              {level.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelsGrid;
