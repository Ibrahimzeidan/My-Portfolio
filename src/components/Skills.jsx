import html from "../assets/html-icon.png";
import css from "../assets/css-icon.png";
import js from "../assets/js-icon.png";
import react from "../assets/react-logo.png";
import flutter from "../assets/flutter-icon.png";
import dart from "../assets/dart-icon.png";
import vue from "../assets/vue.png";
import c from "../assets/c-icon.png";
import express from "../assets/express-js.png";
import nodejs from "../assets/node-js.png";
import mongodb from "../assets/mongo.png";
import fastapi from "../assets/api-fast.png";
import fastify from "../assets/fastify.png";
import nest from "../assets/nest.jpg";
import next from "../assets/next-js.png";
import python from "../assets/python.png";
//import c from "../assets/c-icon.png";
const skills = [
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "JavaScript", img: js },
  { name: "React", img: react },
  { name: "Flutter", img: flutter },
  { name: "Dart", img: dart },
  { name: "vue", img: vue },
  { name: "C", img: c },
  { name: "express", img: express },
  { name: "Node.js", img: nodejs },
  { name: "mongodb", img: mongodb },
  { name: "fastapi", img: fastapi },
  { name: "fastify", img: fastify },
  { name: "nest", img: nest },
  { name: "next", img: next },
  { name: "python", img: python },
    
];
function Skills() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-0">
      <h2 className="text-white font-bold text-3xl sm:text-4xl">
        Skills
      </h2>

      <div className="mt-4 sm:mt-5 flex items-center gap-3 sm:gap-4 mb-6">
        <span className="w-3 h-3 border-2 border-white rounded-full" />
        <span className="w-12 h-[2px] bg-white" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {skills.map((s) => (
          <div
            key={s.name}
            className="bg-white/5 p-4 sm:p-6 md:p-8 rounded-xl flex flex-col items-center
              hover:bg-[#00B87B] transition-all duration-200 ease-out
              hover:-translate-y-2 hover:scale-105
              active:-translate-y-1 active:scale-95 cursor-pointer"
          >
            <img
              src={s.img}
              alt={s.name}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4"
            />
            <p className="text-white font-bold text-sm sm:text-base">
              {s.name}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 sm:mt-12 text-white mb-12">
        <hr className="border-white/20" />
      </div>
    </section>
  );
}

export default Skills;
