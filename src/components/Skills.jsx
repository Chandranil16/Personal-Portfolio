import React from "react";

function Skills() {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "JavaScript", level: 80, description: "Building dynamic frontend applications." },
        { name: "Python", level: 50, description: "Building AI-driven applications." },
        { name: "Java", level: 85, description: "Expertise in Data Structure and Algorithms." }
      ],
    },
    {
      category: "Frameworks",
      items: [
        { name: "React.js", level: 70, description: "Frontend development with Tailwind CSS." },
        { name: "Node.js", level: 40, description: "Learning server integration through REST APIs." },
        { name: "Express.js", level: 40, description: "Building RESTful APIs for web applications." },
        { name: "Tailwind CSS", level: 60, description: "Creating responsive and modern UI designs." },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Github", level: 80, description: "Version control and collaboration." },
        { name: "Google Cloud Platform", level: 30, description: "Beginner in server administration." },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "Oracle", level: 20, description: "Beginner in Relational database management." },
        { name: "MongoDB", level: 60, description: "Skilled in designing NoSQL database schemas." },
      ],
    },
    {
      category: "Technology Stack",
      items:[
        { name: "MERN Stack", level: 60, description: "Built dynamic web applications using MERN Stack." },
      ]
    }
  ];

  return (
    <section id="skills" className="mb-8 bg">
      <h2 className="text-xl md:text-2xl mb-4 flex items-center justify-center text-center">
        <span
          className="mr-2 animate-pulse"
          role="img"
          aria-label="skills icon"
        >
          💡
        </span>
        <strong className="bg-gradient-to-r from-violet-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
          Skills
        </strong>
      </h2>
      <div className="space-y-6">
        {skills.map((skillCategory, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-2">
              <strong>{skillCategory.category}</strong>
            </h3>
            <div className="space-y-4">
              {skillCategory.items.map((skill, idx) => (
                <div key={idx} className="group">
                  <p className="text-sm">
                    <strong>{skill.name}</strong>
                  </p>
                  <div className="relative w-full bg-gray-300 rounded-full h-2 group-hover:shadow-2xl group-hover:shadow-black transition-all duration-500">
                    <div
                      className="bg-violet-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                    <span
                      className="absolute top-[-25px] left-[calc(100%)] text-sm font-bold text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ left: `${skill.level}%` }}
                    >
                      <strong>{skill.level}%</strong>
                    </span>
                  </div>
                  <p
                    className={`text-xs mt-1 transition-colors duration-500 ${
                      skillCategory.category === "Languages"
                        ? "text-red-500"
                        : skillCategory.category === "Frameworks"
                        ? "text-red-500"
                        : skillCategory.category === "Databases"
                        ? "text-red-500"
                        : "text-red-500"
                    } group-hover:text-purple-700`}
                  >
                    <strong>{`* ${skill.description}`}</strong>
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }
          .animate-pulse {
            display: inline-block;
            animation: pulse 1.5s infinite;
          }
        `}
      </style>
    </section>
  );
}

export default Skills;