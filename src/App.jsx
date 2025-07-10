import React from "react";
import Navigationbar from "./components/NavigationBar";
import Home from "./components/Home";
import AboutMe from "./components/Aboutme";
import Academics from "./components/Academics";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Sociallinks from "./components/Sociallinks";
import './index.css';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-violet-500 via-blue-100 to-white bg-fixed">
      <div className="relative z-10">
        <Navigationbar />
        <main className="max-w-5xl mx-auto px-2 sm:px-4">
          <section className="mb-10 transition-all duration-500">
            <Home />
          </section>
          <SectionCard>
            <AboutMe />
          </SectionCard>
          <SectionCard>
            <Academics />
          </SectionCard>
          <SectionCard>
            <Projects />
          </SectionCard>
          <SectionCard>
            <Skills />
          </SectionCard>
          <SectionCard>
            <Sociallinks />
          </SectionCard>
          <SectionCard>
            <Resume />
          </SectionCard>
        </main>
      </div>
      {/* Parallax effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-violet-400/30 via-blue-200/20 to-white" style={{backgroundAttachment: 'fixed'}} />
      </div>
    </div>
  );
}

// SectionCard for soft shadow, rounded, and animated transitions
function SectionCard({ children }) {
  return (
    <div className=" rounded-2xl shadow-xl mb-8 p-4 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      {children}
    </div>
  );
}

export default App;