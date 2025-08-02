import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center min-h-[50vh] w-full"
    >
      <div className="w-full max-w-xl mt-4 animate-fade-in">
        <div className="flex justify-center items-center text-center gap-4">
          <span
            className="animate-wave-parallax text-3xl sm:text-4xl md:text-5xl"
            role="img"
            aria-label="waving hand"
          >
            👋
          </span>
          {/* Added extra bottom padding to prevent clipping */}
          <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight bg-gradient-to-r from-violet-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent whitespace-nowrap" style={{ paddingBottom: "0.25em" }}>
            Welcome to My Portfolio
          </h2>
        </div>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium text-center mt-2 animate-slide-up">
          Explore the sections below to learn more about me, my education, projects, skills, and connections
        </p>
      </div>
      <style>
        {`
          @keyframes wave-parallax {
            0%,100% { transform: rotate(0deg) translateY(0); }
            10% { transform: rotate(14deg) translateY(-2px);}
            20% { transform: rotate(-8deg) translateY(2px);}
            30% { transform: rotate(14deg) translateY(-2px);}
            40% { transform: rotate(-4deg) translateY(2px);}
            50% { transform: rotate(10deg) translateY(-1px);}
          }
          .animate-wave-parallax {
            display: inline-block;
            animation: wave-parallax 2s infinite;
            transform-origin: 70% 70%;
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in { animation: fade-in 1.2s cubic-bezier(.4,0,.2,1) both; }
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-slide-up { animation: slide-up 2.5s 0.5s cubic-bezier(.4,0,.2,1) both; }
        `}
      </style>
    </section>
  );
}

export default Home;
