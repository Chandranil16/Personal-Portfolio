import React from "react";

function Academics() {
  const marksheets = [
    { id: 1, name: "Semester 1", file: "/marksheets/FIRST_SEMESTER_MARKSHEET.pdf" },
    { id: 2, name: "Semester 2", file: "/marksheets/SECOND_SEMESTER_MARKSHEET.pdf" },
    { id: 3, name: "Semester 3", file: "/marksheets/THIRD_SEMESTER_MARKSHEET.pdf" },
    { id: 4, name: "Semester 4", file: "/marksheets/FOURTH_SEMESTER_MARKSHEET.pdf" },
    { id: 5, name: "Semester 5", file: "/marksheets/FIFTH_SEMESTER_MARKSHEET.pdf" },
    { id: 6, name: "Semester 6", file: "/marksheets/SIXTH_SEMESTER_MARKSHEET.pdf" }
  ];

  // Open PDF in new tab
  const openMarksheet = (file) => {
    window.open(file, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="academics" className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center justify-center text-center">
        <span
          className="mr-2 animate-spin"
          role="img"
          aria-label="degree icon"
        >
          🎓
        </span>
        <span className="bg-gradient-to-r from-violet-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
          Academics
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {marksheets.map((marksheet) => (
          <div
            key={marksheet.id}
            className="border p-4 rounded-xl shadow bg-gray-300 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-2"
          >
            <h3 className="text-lg font-semibold">{marksheet.name}</h3>
            <button
              onClick={() => openMarksheet(marksheet.file)}
              className="text-blue-500 hover:underline mt-2"
            >
              View Marksheet
            </button>
            <br />
            <a
              href={marksheet.file}
              download
              className="text-green-500 hover:underline mt-2"
            >
              Download PDF
            </a>
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
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