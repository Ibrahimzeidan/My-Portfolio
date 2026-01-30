import html from "../assets/html-icon.png";
import css from "../assets/css-icon.png";
import js from "../assets/js-icon.png";
import react from "../assets/react-logo.png";
import flutter from "../assets/flutter-icon.png";
import dart from "../assets/dart-icon.png";
import Cpp from "../assets/cpp-icon.png";
import c from "../assets/c-icon.png";

const skills = [
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "JavaScript", img: js },
  { name: "React", img: react },
  { name: "Flutter", img: flutter },
  { name: "Dart", img: dart },
  { name: "Cpp", img: Cpp },
  { name: "c", img: c },


];
function Skills(){
  return(
    <div>
        <div><h2 className="text-white font-bold text-4xl">Skills </h2></div>
        <div className="mt-5 flex items-center gap-4 mb-2">
          <span className="w-3 h-3 border-2 border-white rounded-full" />
          <span className="w-12 h-[2px] bg-white" /></div>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
          {skills.map((s) => (
            <div
              key={s.name}
              className="bg-white/5 p-8 rounded-xl flex flex-col items-center hover:bg-[#00B87B] transition-all duration-200 ease-out
             hover:-translate-y-2 hover:scale-105
             active:-translate-y-1 active:scale-95 cursor-pointer"
            >
              <img src={s.img} alt={s.name} className="w-16 h-16 mb-4  " />
              <p className="text-white font-bold">{s.name}</p>
            </div>
          ))}
        </div>
         
        
        <div className="mt-12 text-white mb-12"><hr></hr></div>

</div>

       

  )
}
export default Skills