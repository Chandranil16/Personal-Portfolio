import React from 'react'
import { FaFileAlt } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="flex flex-col items-center justify-center py-12">
      <h2 className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-violet-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
        <span>
          <FaFileAlt className="animate-spin-slow text-indigo-500" />
        </span>
        My resume
      </h2>
      <a
        href="/marksheets/Chandranil_Adhikary_resume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-violet-600 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:from-violet-700 hover:to-blue-600 hover:scale-105 transition-all duration-200"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-6-6m6 6l6-6" />
        </svg>
        Download Resume (PDF)
      </a>
      <p className="mt-4 text-gray-800 text-sm text-center">
        Click the button to download my latest resume as a PDF.
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
