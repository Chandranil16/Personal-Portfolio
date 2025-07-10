import React from 'react'
import { FaProjectDiagram } from "react-icons/fa";

const projects = [
  {
    title: "Mynotes_app",
    description: "A full-stack Notes-taking application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js)",
    contributions: [
      "I have built the entire application from scratch, including both frontend and backend.",
      "Register and Login with secure password hashing using bcrypt and JWT-based session management",
      "Add, Edit, and Delete  notes Notes are private and linked to authenticated users",
      "Built with React.js and Tailwind CSS & Mobile-responsive and clean interface"
    ],
    tools: ["React.js", "Node.js", "Express.js", "MongoDB"],
    outcome: "Learned full-stack development and improved productivity.",
    github: "https://github.com/Chandranil16/Mynotes_app"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my skills, projects, and academics performance.",
    contributions: [
      "Designed and developed responsive UI using React.js and Tailwind CSS.",
      "Implemented smooth navigation and interactive sections.",
      "Showcased projects, skills, and academic achievements."
    ],
    tools: ["React.js", "Tailwind CSS"],
    outcome: "Enhanced my web development skills and created a professional online presence.",
    github: "https://github.com/yourusername/portfolio-website"
  },
  {
    title: "Smart-ATS-Resume-Checker",
    description: "A smart, AI-powered ATS (Applicant Tracking System) Resume Analyzer built using Python, gemini-2.5-flash LLM, and Streamlit.",
    contributions: [
      "I have built the entire application from scratch",
      "Resume Upload & paste Job Description for their target role",
      "ATS Score Calculation between the resume and job description.",
      "Interactive Q&A to ask follow-up questions on how to further optimize or tailor their resume for a specific job."
    ],
    tools: ["Python", "gemini-2.5-flash LLM", "Streamlit","pypdf"],
    outcome: "Learned how to integrate AI models with web applications and gained experience in working of gemini models.",
    github: "https://github.com/Chandranil16/Smart-ATS-Resume-Checker"
  },
  {
    title: "ColdMailGenerator",
    description: "Developed a Cold Email Generator application using Langchain, Chromadb, Streamlit, and LLM model 'llama 3.3-70b'",
    contributions: [
      "I have built the entire application from scratch",
      "Context-aware cold email generation",
      "Extraction of specific attributes and storing it in database using ChromaDB",
      "Streamlit interface for quick input and generation",
    ],
    tools: ["Python", "Langchain", "Chromadb", "Streamlit", "llama 3.3-70b"],
    outcome: "Gained experience in building AI-driven applications and working with LLMs. Introduced to frameworks like Langchain and Chromadb, RAG, etc",
    github: "https://github.com/Chandranil16/ColdMailGenerator"
  },
  {
    title: "Vacant-Vectors-payment-gateway",
    description: "A payment gateway platform to be built for our hackathon team, so that users can make secure online payments.",
    contributions: [
      "I contributed mainly in building various frontend components using React.js and tailwind css",
      "Designed clean and user-friendly UI.",    
    ],
    tools: ["React.js", "Tailwind CSS"],
    outcome: "Learnt frontend development,building components, responsive UI by hands-on coding",
    github: "https://github.com/Chandranil16/VACANT-VECTORS-PAYMENT-GATEWAY"
  },
  {
    title: "Innov8_ZennVita",
    description: "An AI-based all-in-one containerized platform designed both for doctors and patients to provide seamless healthcare services fast and effectively. It is a college hackathon project built by our team Vacant Vectors.",
    contributions: [
      "I contributed mainly in building various frontend components using HTML,CSS, and JS",
      "Designed clean and user-friendly UI.",
    ],
    tools: ["HTML", "CSS", "JS"],
    outcome: "Learnt frontend development,building components, responsive UI by hands-on coding",
    github: "https://github.com/Chandranil16/Innov8_ZennVita"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2
        bg-gradient-to-r from-violet-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
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
              <h3 className="text-lg md:text-xl font-semibold">{project.title}</h3>
              <span className="text-xs  text-blue-700 px-2 py-0.5 rounded">{project.duration}</span>
            </div>
            <p className="text-gray-900 text-sm mb-1">{project.description}</p>
            <div className="mb-1">
              <span className="font-semibold text-black text-sm">My Contributions:</span>
              <ul className="list-disc list-inside text-gray-900 text-sm mt-0.5">
                {project.contributions.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mb-1">
              <span className="font-semibold text-black text-sm">Tools Used:</span>
              <div className="flex flex-wrap gap-2 mt-0.5">
                {project.tools.map((tool, i) => (
                  <span key={i} className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded text-xs">{tool}</span>
                ))}
              </div>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-black text-sm">Outcome:</span>
              <p className="text-gray-900 text-sm">{project.outcome}</p>
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
