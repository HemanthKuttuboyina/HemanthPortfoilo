import React from 'react'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import arrhythmiaImg from "../assets/arrhythmia_img.png";
import { UrlShortener } from "../assets/Assets";

const ProjectRep = () => {
  const [projects] = React.useState([
    {
      image: arrhythmiaImg,
      name: "Arrhythmia Detection System",
      brief: "An advanced machine learning system designed to analyze ECG (Electrocardiogram) signals and accurately classify cardiac arrhythmias. Built using powerful predictive modeling and algorithms to assist in cardiovascular diagnostics.",
      tech: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Matplotlib"],
      link: "https://github.com/HemanthKuttuboyina/Arrhythmia-Detection-System",
      liveLink: "https://github.com/HemanthKuttuboyina/Arrhythmia-Detection-System",
      github: "https://github.com/HemanthKuttuboyina/Arrhythmia-Detection-System"
    },
    {
      image: UrlShortener,
      name: "Dynamic URL Shortener Service",
      brief: "High-performance dynamic URL shortening service demonstrating robust backend engineering. Features analytics tracking, custom aliases, and automated QR code generation, proving capability far beyond typical data science modeling.",
      tech: ["Node.js", "Express", "MongoDB", "Redis", "QR Code"],
      link: "https://github.com/HemanthKuttuboyina/Node.js-URL-Shortener.git",
      liveLink: "https://github.com/HemanthKuttuboyina/Node.js-URL-Shortener.git",
      github: "https://github.com/HemanthKuttuboyina/Node.js-URL-Shortener.git"
    }
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="card hover-lift group relative overflow-hidden"
        >
          {/* Project Image */}
          <div className="mb-6 rounded-xl overflow-hidden border border-white/10 bg-black/50">
            <img 
              src={project.image} 
              alt={`${project.name} Screenshot`}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          {/* Project Info */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-3">
              {project.name}
            </h3>
            
            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
              {project.brief}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t border-white/10">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-4 rounded-lg bg-glass hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium"
              >
                <FaGithub className="text-lg" />
                View Code
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-4 rounded-lg btn-primary text-black text-sm font-medium flex items-center justify-center gap-2"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
}

export default ProjectRep;