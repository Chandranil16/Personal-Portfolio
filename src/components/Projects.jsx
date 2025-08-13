import React from "react";
import { FaProjectDiagram } from "react-icons/fa";

const projects = [
  {
    title: "Mynotes_app",
    description: [
      "Built a secure full-stack Notes App using MERN stack.",
    ],
    tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "bcrypt"],
    features: [
      "User authentication & registration",
      "CRUD operations on Private notes",
      "Clean, Mobile-responsive UI design",
      "Bcrypt for password hashing & JWT for session management"
    ],
    github: "https://github.com/Chandranil16/Mynotes_app",
  },
  {
    title: "Portfolio Website",
    description: [
      "Designed and developed my personal portfolio website.",
    ],
    tools: ["React.js", "Tailwind CSS"],
    features: [
      "Responsive UI design",
      "Downloadable resume",
      "Interactive navigation",
      "Showcases personal details"
    ],
    github: "https://github.com/Chandranil16/Personal-Portfolio",
  },
  {
    title: "Smart-ATS-Resume-Checker",
    description: [
      "Built smart, AI-powered ATS-Resume Analyzer for employers.",
    ],
    tools: ["Python", "Streamlit", "pypdf", "Gemini 2.5 Flash LLM"],
    features: [
      "Resume & Job-description upload",
      "ATS score calculation",
      "AI-powered Q&A",
      "Resume optimization suggestions"
    ],
    github: "https://github.com/Chandranil16/Smart-ATS-Resume-Checker",
  },
  {
    title: "Nirogya-chatbot",
    description: [
      "Developed a full-stack AI-powered Ayurveda-based chatbot platform.",
    ],
    tools: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Gemini 2.5 Pro", "few-shot prompting"],
    features: [
      "Conversational chatbot",
      "Personalized ayurvedic health advice such as causes, symptoms, treatments, remedies, diet, and lifestyle",
      "Protected routes & chat history",
      "Responsive UI design",
      "Bcrypt for password hashing & JWT for session management"
    ],
    github: "https://github.com/Chandranil16/Nirogya-chatbot",
  },
  {
    title: "ColdMailGenerator",
    description: [
      "Built an AI-powered cold email generator.",
    ],
    tools: ["LangChain", "ChromaDB", "Streamlit", "LLaMA 3.3-70B", "GroqCloud API"],
    features: [
      "AI-powered email generation",
      "Semantic search and context storage using vector database",
      "User-friendly interface",
      "Personalized content"
    ],
    github: "https://github.com/Chandranil16/ColdMailGenerator",
  },
  {
    title: "Innov8_ZennVita",
    description: [
      "Developed an AI-based containerized healthcare platform for doctors and patients to ensure fast, effective services. As part of Team 'Vacant Vectors,' I contributed to building frontend components.",
    ],
    tools: ["HTML", "CSS", "JavaScript"],
    features: [
      "User-friendly design",
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
            className="bg-gray-300 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col p-5 min-h-[340px] border border-black
              hover:border-blue-600 hover:scale-105 hover:ring-2 hover:ring-blue-400/40"
          >
            <div className="mb-1 flex items-center justify-between">
              <h3 className="text-lg md:text-xl font-semibold">
                {project.title}
              </h3>
            </div>
            <div className="mb-1">
              <span className="font-semibold text-black text-sm">
                Description:
              </span>
              <ul className="list-disc list-inside text-gray-900 text-sm mt-0.5">
                {project.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mb-1">
              <span className="font-semibold text-black text-sm">
                Tools:
              </span>
              <ul className="list-disc list-inside text-gray-900 text-sm mt-0.5">
                {project.tools.map((tool, i) => (
                  <li key={i}>{tool}</li>
                ))}
              </ul>
            </div>
            <div className="mb-1">
              <span className="font-semibold text-black text-sm">
                Features:
              </span>
              <ul className="list-disc list-inside text-gray-900 text-sm mt-0.5">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
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
