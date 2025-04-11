import RevealOnScroll from "../Ui/RevealOnScroll";
function About() {
  const skills = [
    "Html",
    "Css",
    "Javascript",
    "TypeScript ",
    "React",
    "TailwindCSS",
    "Node Js",,
    "MongoDB",
    "GraphQL",
    "Express",
    "Next.js",
    "Python",
    "Machine Learning",
  ];
  return (
    <section
      id="about"
      className="min-h-screen font-mono flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">
            About Me
          </h2>
          <div className="p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all ">
            <p className="text-gray-300 mb-5 text-xl">
              Hello! I'm Hemanth Kuttuboyina, a passionate Full Stack Developer
              with a knack for creating dynamic and responsive web applications.
              I am always eager to learn new technologies and improve my skills.
              I enjoy solving complex problems and turning ideas into reality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">💼 Skills</h3>
              <div className="flex justify-center flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                    key={index}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">
                📚 Education
              </h3>
              <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
                <li>
                  <strong>
                    {" "}
                    <em>B-tech Computer Science & Engineering</em>{" "}
                  </strong>
                  Andhra Loyola Institute of Engineering and Technology,
                  Vijayawada
                  <br /> 2023 - 2026 | CGPA: 8.0/10
                </li>
                <li>
                  <strong>
                    {" "}
                    <em>
                      Diploma Electronics and Communication Engineering (ECE)
                    </em>{" "}
                    Bapatla Engineering College, Bapatla
                    <br /> 2020 - 2023 | CGPA: 7.7/10
                  </strong>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-2xl text-center font-bold mb-8">
              💻 Work Experience
            </h3>
            <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
              <li>
                <strong className="text-blue-400">
                  <em>Frontend Developer (Freelance / Contract)</em>
                </strong>
                📍
                <br />* Remote | Jan 2024 - Present <br />
                - Built responsive and accessible websites using React.js,
                Next.js, and Tailwind CSS <br />- Developed dynamic user
                interfaces with JavaScript (ES6+), HTML, and CSS. <br />-
                Integrated RESTful APIs and optimized performance for faster
                load times.
              </li>
              <li>
                CS50 , Data Structures, Web Development, Cloud Computing...
              </li>
            </ul>
          </div> */}
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
