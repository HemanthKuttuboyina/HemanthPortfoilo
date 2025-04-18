import React from 'react'
import { ecommerce, Login, UrlShortener } from "../assets/Assets";

const ProjectRep = () => {

    const [projects] = React.useState([
        {
          image: Login,
          name: "Login Page",
          brief:
            "Basic Login Page with authentication and authorization using Nodejs and Express.",
          tech: ["Nodejs", "Express", "MongoDB"],
          link: "https://github.com/HemanthKuttuboyina/real_Login",
        },
        {
          image: ecommerce,
          name: "E-Commerce App",
          brief:
            "Check the Amazon product price history and get notified when the price drops.",
          tech: ["React", "Nodejs", "MongoDB", "Nextjs"],
          link: "https://github.com/HemanthKuttuboyina/Next.js-E-Commerce-Aggregator",
        },
        {
          image: UrlShortener,
          name: "URL Shortener",
          brief:
            "A URL shortener is a web application that converts long URLs into shorter, more manageable links.",
          tech: ["Nodejs", "Express", "MongoDB"],
          link: "https://github.com/HemanthKuttuboyina/Node.js-URL-Shortener",
        },
      ]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900 "
          >
            <h3 className="font-semibold text-xl mb-4">{project.name}</h3>
            <p className="text-gray-300 mb-4">{project.brief} </p>
            <div className="flex flex-wrap sm:items-center gap-2 mb-4">
              {project.tech.map((tech, index) => (
                <>
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                  >
                    {tech}
                  </span>
                </>
              ))}
              <div className="flex flex-col text-center my-5 py-3 justify-center gap-3 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)]  cursor-pointer rounded-xl ">
                <p className="text-gray-200">View Project</p>
                <a
                  href={project.link}
                  className="flex justify-between items-center font-bold text-blue-400 transition-colors hover:text-white"
                >
                  {" "}
                  <img src={project.image} alt={`${project.name}Image `} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectRep