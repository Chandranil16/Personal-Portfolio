import React from "react";

function Skills() {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "JavaScript", description: "Intermediate", level: 60 },
        { name: "Python", description: "Intermediate", level: 60 },
        { name: "Java", description: "Intermediate", level: 60 }
      ],
    },
    {
      category: "Web Technologies",
      items: [
        { name: "HTML", description: "Advanced", level: 80 },
        { name: "CSS", description: "Advanced", level: 80 },
        { name: "React.js", description: "Intermediate", level: 60 },
        { name: "Node.js", description: "Intermediate", level: 60 },
        { name: "Express.js", description: "Intermediate", level: 60 },
        { name: "Tailwind CSS", description: "Advanced", level: 80 },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Github", description: "Intermediate", level: 60 },
        { name: "Postman", description: "Intermediate", level: 60 },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "Oracle", description: "Beginner", level: 30 },
        { name: "MongoDB", description: "Intermediate", level: 60 },
      ],
    },
    {
      category: "Cloud Technologies",
      items: [
        { name: "Google Cloud Platform", description: "Beginner", level: 30 },
      ],
    },
    {
      category: "AI/ML Technologies",
      items: [
        { name: "Machine Learning", description: "Beginner", level: 30 },
        { name: "Deep Learning", description: "Beginner", level: 30 },
        { name: "LLM", description: "Beginner", level: 30 },
      ],
    },
    {
      category: "Technology Stack",
      items:[
        { name: "MERN Stack", description: "Intermediate", level: 60 },
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
                    {/* Show Beginner/Intermediate/Advanced on hover at the end of the bar */}
                    <span
                      className="absolute top-[-25px] left-[calc(100%)] text-sm font-bold text-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ left: `${skill.level}%` }}
                    >
                      <strong>
                        {skill.level >= 80
                          ? "Advanced"
                          : skill.level >= 60
                          ? "Intermediate"
                          : "Beginner"}
                      </strong>
                    </span>
                  </div>
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