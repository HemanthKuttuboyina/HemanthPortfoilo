import RevealOnScroll from "../Ui/RevealOnScroll";
import ProjectRep from "../Ui/ProjectRep";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 monochrome-text">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of my recent work showcasing clean design patterns, 
              scalable architecture, and innovative solutions to real-world problems.
            </p>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll delay={200}>
          <ProjectRep />
        </RevealOnScroll>

        <RevealOnScroll delay={400}>
          <div className="text-center mt-16">
            <p className="text-gray-500 italic">
              More projects coming soon...
            </p>
            <div className="flex justify-center mt-6 gap-2">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="w-2 h-2 rounded-full bg-white/20 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default Projects;