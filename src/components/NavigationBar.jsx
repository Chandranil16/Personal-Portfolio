import React from "react";

function NavigationBar() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-transparent border-gray-700 text-black font-bold p-4 sticky top-0 z-50 mb-4 backdrop-blur-md">
      <ul className="flex flex-wrap justify-center space-x-4">
        <li>
          <a
            href="#home"
            onClick={(e) => handleScroll(e, "#home")}
            className="hover:text-white hover:bg-blue-500/80 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 px-2 py-1 rounded"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "#about")}
            className="hover:text-white hover:bg-blue-500/80 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 px-2 py-1 rounded"
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#academics"
            onClick={(e) => handleScroll(e, "#academics")}
            className="hover:text-white hover:bg-blue-500/80 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 px-2 py-1 rounded"
          >
            Academics
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "#projects")}
            className="hover:text-white hover:bg-blue-500/80 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 px-2 py-1 rounded"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={(e) => handleScroll(e, "#skills")}
            className="hover:text-white hover:bg-blue-500/80 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 px-2 py-1 rounded"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#sociallinks"
            onClick={(e) => handleScroll(e, "#sociallinks")}
            className="hover:text-white hover:bg-blue-500/80 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 px-2 py-1 rounded"
          >
            Social Links
          </a>
        </li>
        <li>
          <a
            href="#resume"
            onClick={(e) => handleScroll(e, "#resume")}
            className="hover:text-white hover:bg-blue-500/80 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 px-2 py-1 rounded"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
