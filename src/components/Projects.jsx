import React from "react";
import { FaProjectDiagram } from "react-icons/fa";

const projects = [
  {
    title: "Mynotes_app",
    Description: [
      "Built a secure full-stack Notes App using MERN stack with user registration and login using bcrypt for password hashing and JWT for session management (Node.js, Express.js, MongoDB). Users can add, edit, and delete private notes linked to their account. UI built with React.js and Tailwind CSS for a clean, mobile-responsive design.",
    ],
    github: "https://github.com/Chandranil16/Mynotes_app",
  },
  {
    title: "Portfolio Website",
    Description: [
      "Designed and developed my personal portfolio website using ReactJS, Tailwind CSS. Showcases key sections including Home, About Me, Academics, Projects, Skills, Social Links, and a downloadable Resume link. Built with a mobile-responsive design for a clean, interactive user experience.",
    ],
    tools: ["React.js", "Tailwind CSS"],
    github: "https://github.com/Chandranil16/Personal-Portfolio",
  },
  {
    title: "Smart-ATS-Resume-Checker",
    Description: [
      "Built smart, AI-powered ATS-Resume Analyzer for employers to upload resumes and job descriptions, with ATS score calculation to measure match quality. Includes interactive Q&A to suggest resume optimizations. Developed with Python, Streamlit, pypdf, and Gemini 2.5 Flash LLM.",
    ],
    github: "https://github.com/Chandranil16/Smart-ATS-Resume-Checker",
  },
  {
    title: "Nirogya-chatbot",
    Description: [
      "Developed a full-stack AI-powered Ayurveda-based chatbot platform using React, Tailwind CSS, Node.js, Express.js, and MongoDB, with JWT for authentication and Gemini 2.5 Pro for few-shot prompting. The platform provides personalized Ayurvedic health advice through a conversational UI, featuring structured responses on causes, symptoms, treatments, remedies, diet, and lifestyle. Includes protected routes, chat history management, and a responsive, user-friendly design.",
    ],
    github: "https://github.com/Chandranil16/Nirogya-chatbot",
  },
  {
    title: "ColdMailGenerator",
    Description: [
      "Built an AI-powered cold email generator using LangChain, ChromaDB, Streamlit, and LLaMA 3.3-70B via GroqCloud API. Used LangChain for prompt templating and chaining, ChromaDB as vector database for semantic search and context storage, and Streamlit for a user-friendly interface. The system extracts key attributes, performs similarity search, and generates personalized, context-aware email content using LLaMA 3.3-70B.",
    ],
    github: "https://github.com/Chandranil16/ColdMailGenerator",
  },
  {
    title: "Innov8_ZennVita",
    Description: [
      "Developed an AI-based containerized healthcare platform for doctors and patients to ensure fast, effective services. As part of Team 'Vacant Vectors,' I contributed to building frontend components using HTML, CSS, and JavaScript, focusing on a clean, user-friendly UI.",
    ],
    github: "https://github.com/Chandranil16/Innov8_ZennVita",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-4">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2
        bg-gradient-to-r from-violet-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent"
      >
        <span className="inline-block animate-spin-slow text-blue-700">
          <FaProjectDiagram size={32} />
        </span>
        My Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-300 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col p-5 min-h-[340px] border border-black"
          >
            <div className="mb-1 flex items-center justify-between">
              <h3 className="text-lg md:text-xl font-semibold">
                {project.title}
              </h3>
              <span className="text-xs  text-blue-700 px-2 py-0.5 rounded">
                {project.duration}
              </span>
            </div>
            <p className="text-gray-900 text-sm mb-1">{project.description}</p>
            <div className="mb-1">
              <span className="font-semibold text-black text-sm">
                Description:
              </span>
              <ul className="list-disc list-inside text-gray-900 text-sm mt-0.5">
                {project.Description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block text-blue-600 hover:underline font-semibold text-sm transition-colors duration-200"
            >
              View GitHub Repo &rarr;
            </a>
          </div>
        ))}
      </div>
      <style>
        {`
          .animate-spin-slow {
            animation: spin 3s linear infinite;
            display: inline-flex;
            vertical-align: middle;
          }
          @keyframes spin {
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </section>
  );
};

export default Projects;
