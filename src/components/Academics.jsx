import React from "react";
import { FaSchool, FaUniversity, FaGraduationCap } from "react-icons/fa";

const academicsData = [
  {
    id: 1,
    title: "Class X",
    institution: "ST. Stephen’s School, Budge Budge, Kolkata",
    year: "2007-2020",
    percentage: "87.4%",
    icon: <FaSchool className="text-blue-600 text-2xl" />,
  },
  {
    id: 2,
    title: "Class XII",
    institution: "ST. Stephen’s School, Budge Budge, Kolkata",
    year: "2020-2022",
    percentage: "89%",
    icon: <FaUniversity className="text-violet-600 text-2xl" />,
  },
  {
    id: 3,
    title: "B.Tech in CSE(Artificial Intelligence)",
    institution: "Budge Budge Institute of Technology, Kolkata",
    year: "2022-2026",
    cgpa: "8.08",
    icon: <FaGraduationCap className="text-indigo-600 text-2xl" />,
  },
];

function Academics() {
  return (
    <section id="academics" className="mb-8 px-2">
      <h2 className="text-xl md:text-2xl font-bold mb-8 flex items-center justify-center text-center">
        <span className="mr-2 animate-spin" role="img" aria-label="degree icon">
          🎓
        </span>
        <span className="bg-gradient-to-r from-violet-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
          Academics
        </span>
      </h2>
      <div className="relative max-w-2xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-blue-400 via-violet-400 to-indigo-400 opacity-40 rounded-full z-0"></div>
        <div className="flex flex-col gap-10">
          {academicsData.map((item, idx) => (
            <div
              key={item.id}
              className="relative flex items-start group"
              style={{ animation: `fadeInUp 0.6s ${idx * 0.2 + 0.2}s both` }}
            >
              {/* Timeline icon */}
              <div className="z-10">
                <div className="flex items-center justify-center w-12 h-12 bg-white border-4 border-blue-200 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>
              {/* Card */}
              <div className="ml-8 flex-1 bg-gray-300 rounded-xl shadow-lg border border-blue-100 p-5 transition-transform duration-300 hover:shadow-xl hover:shadow-blue-500/50 hover:-translate-y-2">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  {item.title}
                  <span className="text-xs text-gray-900 font-bold">
                    ({item.year})
                  </span>
                </h3>
                <p className="text-sm text-gray-700 font-bold mb-1">{item.institution}</p>
                {item.percentage && (
                  <p className="text-indigo-700 font-bold">
                    Percentage:{" "}
                    <span className="font-mono">{item.percentage}</span>
                  </p>
                )}

                {item.cgpa && (
                  <p className="text-indigo-700 font-bold">
                    CGPA:{" "}
                    <span className="font-mono">{item.cgpa}</span>
                  </p>
                )}
                
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          .animate-spin {
            display: inline-block;
            animation: spin 2s linear infinite;
          }
        `}
      </style>
    </section>
  );
}

export default Academics;