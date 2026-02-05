import { useState } from 'react'
import './App.css'

import Cv from './components/Cv';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';
import Education from './components/Education';


function App() {
  return (
    <div className="min-h-screen bg-[#2C3E50] text-white">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-col md:flex-row md:gap-6">
          
          {/* Sidebar */}
          <aside className="w-full md:w-80 md:shrink-0 md:sticky md:top-6 md:self-start">
            <Cv />
          </aside>

          {/* Right side */}
          <main className="flex-1 space-y-9 mt-8 md:mt-0">
            <About />
            <Education />
            <Experience />
            <Services />
            <Skills />
            <Footer />
          </main>

        </div>
      </div>
    </div>
  );
}

export default App;

