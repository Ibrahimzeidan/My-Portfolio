import { Link } from "react-router-dom";
import portfolioScreenshot from "../assets/Screenshot 2026-04-14 002131.png";
import fastApiScreenshot from "../assets/Screenshot 2026-04-14 002913.png";
import driverHubScreenshot from "../assets/Screenshot_2026-03-04_at_8.54.40_AM.png";
import blogapi from "../assets/Screenshot 2026-04-14 010217.png";
import nestjs  from "../assets/Screenshot 2026-04-14 011321.png";


const projects = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing my projects, skills, and experience as a full-stack developer. Built with a modern, responsive design to present my work in a clean and user-friendly way.",
    image: portfolioScreenshot,
    github: "https://github.com/Ibrahimzeidan/My-Portfolio",
  },
  {
    title: "Fast_api Project",
    description:
      "FastAPI-based backend application that provides RESTful APIs for handling data, authentication, and core business logic. Built with a scalable structure and optimized performance using modern Python technologies.",
    image: fastApiScreenshot,
    github: "https://github.com/Ibrahimzeidan/fast-api",
  },
  {
    title: "Blog-api Project",
    description:
      "MERN stack blog application built using MongoDB, Express.js, React, and Node.js, providing full CRUD functionality for managing blog posts and users. Designed with a responsive frontend and scalable backend architecture for efficient content management.",
    image: blogapi,
    github: "https://github.com/Zahraa-Salim/blog-api",
  },
   {
    title: "Nest-js Project",
    description:
      "NestJS project focused on understanding the framework’s architecture, including modules, controllers, and services. Built a basic CRUD application to demonstrate structured backend development and best practices in scalable API design.",
    image: nestjs,
    github: "https://github.com/Mahmood2004/nest-app-project",
  },
  {
    title: "Bus-application Project",
    description:
      "Bus management platform built with Next.js that assigns drivers to daily passengers, with subscription packages and organized passenger-driver relationships. Features real-time location tracking with map integration to monitor bus routes and driver positions.",
    image: driverHubScreenshot,
    github: "https://github.com/asmaachreih1/bus_updated",
  },
];

function Projects() {
  return (
    <div className="min-h-screen bg-[#2C3E50] text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-0 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">Projects</h1>
            <p className="mt-2 text-white/80 text-sm sm:text-base">
              A full list of my projects with screenshots and GitHub links.
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-white/60 text-white font-semibold px-5 py-2.5 rounded-md transition-colors duration-300 hover:bg-white hover:text-[#2C3E50]"
          >
            Back to Home
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#32495d] rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-white/80 text-sm leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center justify-center bg-[#00B87B] text-white font-semibold px-4 py-2 rounded-md transition-colors duration-300 hover:bg-[#00a66f]"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs sm:text-sm text-white/60">
          Replace the placeholder images and GitHub links with your real
          projects.
        </p>
      </div>
    </div>
  );
}

export default Projects;
