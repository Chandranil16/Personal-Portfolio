import React from "react";
import profilepic from "../assets/prof.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function AboutMe() {
  return (
    <section id="about" className="mb-8 md:mb-12 px-2 sm:px-4">
      {/* Consistent Header Style */}
      <h2 className="text-xl md:text-2xl font-semibold mb-4 flex items-center justify-center text-center">
        <span className="mr-2 animate-bounce" role="img" aria-label="user icon">
          👤
        </span>
        <span className="bg-gradient-to-r from-violet-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
          About Me
        </span>
      </h2>

      {/* Matching Card Style */}
      <div className="bg-gray-300 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-2 transition-all duration-300 p-4 sm:p-6 md:p-8 border border-black max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col items-center md:items-start md:flex-row gap-4 sm:gap-6 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b-2 border-gray-400">
          <img
            src={profilepic}
            alt="Chandranil Adhikary"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg hover:scale-110 hover:border-indigo-600 transition-all duration-300 cursor-pointer flex-shrink-0"
          />

          <div className="flex-1 w-full text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
              Chandranil Adhikary
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
              Student || Full-Stack Developer
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-gray-700 mb-3 items-center md:items-start justify-center md:justify-start">
              <span className="flex items-center gap-1">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="break-words">Kolkata, India</span>
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="break-all">
                  chandranil.adhikary16@gmail.com
                </span>
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clipRule="evenodd"
                  />
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                </svg>
                <span>+91 8697174744</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/chandranil-adhikary-8b8862250/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-1.5 sm:py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-md text-xs sm:text-sm"
              >
                <FaLinkedin className="text-base sm:text-lg flex-shrink-0" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Chandranil16"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-gray-800 hover:bg-gray-900 text-white font-semibold px-3 py-1.5 sm:py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-md text-xs sm:text-sm"
              >
                <FaGithub className="text-base sm:text-lg flex-shrink-0" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="space-y-3 sm:space-y-4 text-gray-900 text-xs sm:text-sm md:text-base leading-relaxed">
          <p className="font-medium">
            Hi, I am Chandranil Adhikary a Final-year B.Tech student pursuing
            Computer Science & Engineering (Artificial Intelligence) with strong
            hands-on experience in Full-Stack Web Development and AI-driven
            application development. I am proficient in building scalable,
            production-ready applications and has knowledge in programming
            languages such as Java, JavaScript, Python, SQL, and modern
            frameworks such as React, Tailwind CSS, Node.js, Express.js, and
            MongoDB. Experienced in working with LLMs, Generative AI, and
            integrating AI capabilities into real-world platforms. I am actively
            interested in exploring Cloud Computing and DevOps, with practical
            exposure to Google Cloud Platform (GCP), and version control using
            Git & GitHub.
          </p>

          <p className="font-medium">
            I am currently seeking internships and full-time opportunities to
            apply my skills, gain industry exposure, and contribute to
            innovative software development.
          </p>

          <p className="font-medium">
            <strong className="text-indigo-700">What drives me:</strong> I'm
            passionate about coding, hackathons, exploring cutting-edge
            technologies, and building practical solutions that make a
            difference. I approach each project with enthusiasm and dedication
            to excellence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
