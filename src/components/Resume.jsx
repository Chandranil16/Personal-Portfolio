import React from 'react'
import { FaFileAlt, FaEye } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="flex flex-col items-center justify-center py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <h2 className="flex items-center justify-center gap-2 sm:gap-3 text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-violet-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
        <span>
          <FaFileAlt className="animate-spin-slow text-indigo-500 text-lg sm:text-2xl" />
        </span>
        My resume
      </h2>
      <a
        href="/documents/Resume - Chandranil Adhikary.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 bg-gradient-to-r from-violet-600 to-blue-500 text-white text-sm sm:text-base font-semibold rounded-xl shadow-lg hover:from-violet-700 hover:to-blue-600 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-violet-300 w-full max-w-xs sm:max-w-sm"
        aria-label="View Resume PDF"
      >
        <FaEye className="w-4 h-4 sm:w-5 sm:h-5" />
        View Resume
      </a>
      <p className="mt-4 text-gray-700 text-xs sm:text-sm text-center px-4">
        Click the button to view my latest resume.
      </p>
      <style>
        {`
          @keyframes spin-slow {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          .animate-spin-slow {
            animation: spin-slow 3s linear infinite;
          }
        `}
      </style>
    </section>
  )
}

export default Resume
