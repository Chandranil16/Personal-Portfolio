import React from "react";
import profilepic from '../assets/cropped_circle_image.png'
function AboutMe() {
  return (
    <section id="about" className="mb-8">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 flex items-center justify-center text-center">
        <span
          className="mr-2 animate-bounce"
          role="img"
          aria-label="user icon"
        >
          👤
        </span>
        <span className="bg-gradient-to-r from-violet-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
          About Me
        </span>
      </h2>
      <div className="flex flex-col md:flex-row items-center rounded-xl bg-gray-300 p-8 shadow-lg w-full min-h-[400px] transition-transform duration-300 hover:shadow-xl hover:shadow-blue-500/50 hover:-translate-y-2">
        {/* Professional Photo */}
        <img
          src={profilepic}
          alt="My Profile"
          className="w-48 h-48 md:w-60 md:h-60 rounded-full mb-4 md:mb-0 md:mr-8 flex-shrink-0 transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
        />

        {/* Biodata and Details */}
        <div className="flex-grow text-center md:text-left font-ui">
          <p className="text-lg md:text-xl mb-2">
            <span className="font-semibold text-indigo-700">Name:</span>{" "}
            <span className="font-semibold text-black">Chandranil Adhikary</span>
          </p>
          
          <p className="text-lg md:text-xl mb-2">
            <span className="font-semibold text-indigo-700">Status:</span>{" "}
            <span className="font-semibold text-black">4th Year Student at BBIT</span>
          </p>
          <p className="text-lg md:text-xl mb-2">
            <span className="font-semibold text-indigo-700">CGPA:</span>{" "}
            <span className="font-semibold text-black">8.08</span>
          </p>
          <p className="text-lg md:text-xl mb-2">
            <span className="font-semibold text-indigo-700">Stream:</span>{" "}
            <span className="font-semibold text-black">B.Tech in CSE(Artificial Intelligence)</span>
          </p>
          <p className="text-lg md:text-xl mb-2">
            <span className="font-semibold text-indigo-700">Contact:</span>{" "}
            <span className="font-semibold text-black">+91 8697174744</span>
          </p>
          <p className="text-lg md:text-xl mb-2">
            <span className="font-semibold text-indigo-700">Email:</span>{" "}
            <span className="font-semibold text-black">chandranil.adhikary16@gmail.com</span>
          </p>
          <p className="text-lg md:text-xl mb-2">
            <span className="font-semibold text-indigo-700">Location:</span>{" "}
            <span className="font-semibold text-black">Kolkata, India</span>
          </p>
          <p className="text-lg md:text-xl mt-4">
            <span className="font-semibold text-indigo-700">Objectives:</span>{" "}
            <span className="font-semibold text-black">
              My goal is to acquire the necessary skills and gain experience as a fresher, to prepare myself for a successful career.
            </span>
          </p>
          <p className="text-lg md:text-xl mt-4">
            <span className="font-semibold text-indigo-700">Passion & Interests:</span>{" "}
            <span className="font-semibold text-black">
              I am passionate about coding, and solving real-world problems. I enjoy
              exploring new technologies and working on real world projects
            </span>
          </p>
        </div>
      </div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
          .font-ui {
            font-family: 'Montserrat', 'Segoe UI', 'Roboto', 'Arial', sans-serif;
            letter-spacing: 0.01em;
          }
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }
          .animate-bounce {
            display: inline-block;
            animation: bounce 1.5s infinite;
          }
        `}
      </style>
    </section>
  );
}

export default AboutMe;
