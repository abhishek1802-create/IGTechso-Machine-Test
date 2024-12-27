import React, { useState } from "react";
import CourseCardDescription from "./CourseCardDescription";

const CourseCard = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!props.card) {
    return null;
  }

  const {
    starPoints,
    reviewNumber,
    numberOfStudentWatched,
    title,
    description,
    classesNo,
    hours,
  } = props.card;

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-[950px] mx-auto mb-8 cursor-pointer">
      <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
        <div className="flex-shrink-0 bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-orange-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-6.584-3.588A1 1 0 007 8.423v7.154a1 1 0 001.168.987l6.584-3.588a1 1 0 000-1.808z"
            />
          </svg>
        </div>

        <div className="flex flex-col justify-start text-start">
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <div className="flex items-center">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <span className="ml-2">
                {starPoints}.0 ({reviewNumber} reviews)
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 10.232a4 4 0 10-5.464-5.464M18.364 18.364A9 9 0 105.636 5.636a9 9 0 1012.728 12.728z"
                />
              </svg>
              <span>{numberOfStudentWatched} students watched</span>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mt-2">{title}</h3>

          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>

        <div className="flex justify-center items-center bg-green-400 rounded-md">
          <div className="text-white text-sm px-3 py-2">
            {classesNo} video classes
          </div>
          <div className="h-4 w-[2px] bg-white"></div>
          <div className="text-white text-sm px-3 py-2">{hours} hours</div>
        </div>

        <button
          onClick={toggleAccordion}
          className="p-1 hover:bg-gray-100 rounded-full transition-all duration-200"
          aria-expanded={isExpanded}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
              isExpanded ? "transform rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {isExpanded && <CourseCardDescription />}
    </div>
  );
};

export default CourseCard;
