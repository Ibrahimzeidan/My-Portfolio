
import './App.css'

import Cv from "./components/Cv";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Education from "./components/Education";

function App() {
  return (
    <div className="min-h-screen bg-[#2C3E50] text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-0 py-6">
        {/* Layout: stack on mobile, sidebar + content on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-10 items-start">
          
          {/* LEFT SIDEBAR */}
          <aside className="md:sticky md:top-6">
            <Cv />
          </aside>

          {/* RIGHT CONTENT */}
          <main className="min-w-0 space-y-10">
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

