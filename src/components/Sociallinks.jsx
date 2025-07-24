import React from 'react'
import { FaShareAlt } from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/Chandranil16",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    desc: "Explore my projects and code on GitHub."
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/chandranil-adhikary-8b8862250/",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    desc: "Connect with me professionally on LinkedIn."
  },
  
];

const Sociallinks = () => {
return (
    <section id="sociallinks" className="py-8">
        <h2 className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-violet-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            <FaShareAlt className="animate-spin-slow text-indigo-600" />
            Connect with me
        </h2>
        <div className="flex flex-wrap gap-8 justify-center items-stretch">
            {socials.map((social, idx) => (
                <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center bg-gray-300 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 px-6 py-4 w-64 group border border-gray-300
      hover:border-blue-600  hover:scale-105 hover:ring-2 hover:ring-blue-400/40"
                >
                    <img
                        src={social.img}
                        alt={social.name}
                        className="w-14 h-14 rounded-full shadow group-hover:scale-110 transition-transform duration-200 bg-white object-contain p-1"
                    />
                    <span className="mt-3 text-base font-semibold text-gray-800 group-hover:text-blue-600">{social.name}</span>
                    <span className="mt-1 text-xs text-gray-800 text-center">{social.desc}</span>
                </a>
            ))}
        </div>
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

export default Sociallinks
