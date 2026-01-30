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
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="max-h-screen bg-[#2C3E50] text-white">
      <div className="mx-auto ml-4  flex gap-6 px-4 py-6">
        
       
        <aside className="w-80 shrink-0 sticky top-6 self-start ">
          <Cv />
        </aside>

      
        <div className="flex-1 space-y-9 ml-13">
          <About />
          <Education/>
           <Experience />
          <Services />
          <Skills />
          <Footer />
        </div>

      </div>
    </div>
</>
  )
}

export default App
