import profileHemanth from "../assets/profileHemanth.jpg";
import { FiDownload } from "react-icons/fi";
import HEMANTHCV from "../assets/HEMANTHCV.pdf";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-12 lg:gap-20 px-4"
    >
      {/* Profile Image */}
      <div className="text-center z-10 relative">
        <div className="relative">
          <img
            className="w-[220px] h-[220px] md:w-[280px] md:h-[280px] border-4 border-white/10 rounded-full shadow-2xl shadow-black/50 object-cover object-center hover:scale-105 transition-transform duration-500"
            src={profileHemanth}
            alt="Profile Image"
          />
          <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-pulse"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="text-center font-mono z-10 max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 monochrome-text">
          Hemanth Kuttuboyina
        </h1>
        
        <div className="mb-8">
          <div className="inline-block px-4 py-2 rounded-full bg-glass text-white text-lg font-medium mb-6">
            Full Stack Developer
          </div>
          
          <p className="text-gray-300 text-lg leading-relaxed">
            I specialize in creating dynamic, responsive web applications with 
            clean architecture and intuitive user experiences. Passionate about 
            solving complex problems and turning innovative ideas into reality 
            through elegant code and modern technologies.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            className="btn-primary flex items-center justify-center gap-2 font-semibold hover:scale-105 transition-all duration-300"
            href="#contact"
          >
            Get In Touch
          </a>
          <a
            className="btn-secondary flex items-center justify-center gap-2 font-semibold hover:scale-105 transition-all duration-300"
            href={HEMANTHCV}
            download
          >
            <FiDownload className="text-lg" />
            Download Resume
          </a>
        </div>

        {/* Tech Stack Preview */}
        <div className="mt-12">
          <p className="text-gray-400 text-sm mb-4">Currently working with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'TypeScript'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 rounded-lg bg-glass text-white/90 text-sm font-medium border border-white/5 hover:border-white/10 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;