import React, { useState } from "react";

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false); // Close menu on link click (mobile)
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = (
    <>
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
      <li>
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "#contact")}
          className="hover:text-white hover:bg-blue-500/80 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 px-2 py-1 rounded"
        >
          Contact
        </a>
      </li>
    </>
  );

  return (
    <nav className="bg-transparent border-gray-700 text-black font-bold p-4 sticky top-0 z-50 mb-4 backdrop-blur-md">
      {/* Desktop Nav */}
      <ul className="hidden sm:flex flex-wrap justify-center space-x-4">
        {navLinks}
      </ul>
      {/* Mobile Hamburger */}
      <div className="sm:hidden flex justify-between items-center">
        <button
          className="p-2 rounded focus:outline-none"
          aria-label="Open navigation menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-8 h-8 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Dropdown Menu */}
        {menuOpen && (
          <ul
            className="absolute left-0 right-0 top-16 mx-4 bg-gray-300/95 backdrop-blur-md rounded shadow-lg flex flex-col items-center space-y-2 py-4 z-50 animate-dropdown"
            style={{
              transition:
                "opacity 0.4s ease, transform 0.4s cubic-bezier(0.4,0,0.2,1)",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "scaleY(1)" : "scaleY(0.95)",
              transformOrigin: "top",
            }}
          >
            {navLinks}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default NavigationBar;
