import { Link } from "react-router-dom";
import { FaCode, FaAndroid } from "react-icons/fa";
import realstate  from "../assets/realstate.png";
import task  from "../assets/task.png";
const featuredProjects = [
  {
    title: "Real state ",
    description:
      "A dynamic real estate website built with Next.js featuring property listings, blogs, and services, along with an admin dashboard for managing content and user inquiries.",
    image: realstate,
    github: "https://github.com/Ibrahimzeidan/real-state",
    live: "https://real-state-624s.onrender.com",
  },
  {
    title: "Task Manager",
    description:
      "A simple Task Manager built with Vue.js and Fastify to learn how frontend and backend work together using REST APIs for creating and managing tasks.",
    image: task,  
    github: "https://github.com/Ibrahimzeidan/vue-fastify",
    live: "https://vue-fastify-exle-hlop2dfaf-ibrahimzeidans-projects.vercel.app/tasks",
  },
];

function Services() {
  return (
    <section id="services" className="w-full px-4 sm:px-6 md:px-0">
      <h2 className="text-white font-bold text-3xl sm:text-4xl mt-2">Services</h2>

      <div className="mt-4 sm:mt-5 flex items-center gap-3 sm:gap-4 mb-6">
        <span className="w-3 h-3 border-2 border-white rounded-full" />
        <span className="w-12 h-[2px] bg-white" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mt-8 sm:mt-10">
        {/* Card 1 */}
        <div className="group bg-[#32495d] p-6 sm:p-8 lg:p-10 text-center text-white rounded-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="bg-white w-14 h-14 sm:w-16 sm:h-16 mx-auto flex items-center justify-center mb-5 sm:mb-6 transition-colors duration-300 group-hover:bg-[#00B87B] cursor-pointer rounded">
            <FaCode className="text-[#00B87B] text-2xl sm:text-3xl transition-colors duration-300 group-hover:text-white" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Web Design
          </h3>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            I design modern, responsive websites with clean layouts and strong
            focus on usability and performance.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group bg-[#32495d] p-6 sm:p-8 lg:p-10 text-center text-white rounded-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="bg-white w-14 h-14 sm:w-16 sm:h-16 mx-auto flex items-center justify-center mb-5 sm:mb-6 transition-colors duration-300 group-hover:bg-[#00B87B] cursor-pointer rounded">
            <FaAndroid className="text-[#00B87B] text-2xl sm:text-3xl transition-colors duration-300 group-hover:text-white" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Apps Development
          </h3>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            I build mobile applications with smooth performance, intuitive
            interfaces, and scalable architecture.
          </p>
        </div>
      </div>

      <div className="mt-10 sm:mt-12">
        <div className="mb-6">
          <h3 className="text-white font-bold text-2xl sm:text-3xl">Projects</h3>
          <div className="mt-3 flex items-center gap-3">
            <span className="w-3 h-3 border-2 border-white rounded-full" />
            <span className="w-10 h-[2px] bg-white" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-[#32495d] p-6 sm:p-8 lg:p-10 text-center text-white rounded-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="bg-white w-full h-40 sm:h-48 md:h-52 mx-auto flex items-center justify-center mb-5 sm:mb-6 transition-colors duration-300 group-hover:bg-[#00B87B] rounded overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                {project.title}
              </h3>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center border border-white/60 text-white font-semibold px-5 py-2.5 rounded-md transition-colors duration-300 hover:bg-white hover:text-[#2C3E50]"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center border border-[#00B87B] text-[#00B87B] font-semibold px-5 py-2.5 rounded-md transition-colors duration-300 hover:bg-[#00B87B] hover:text-white"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center bg-[#00B87B] text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300 hover:bg-[#00a66f]"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
