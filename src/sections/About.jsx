import RevealOnScroll from "../Ui/RevealOnScroll";

function About() {
  const skills = [
    // Languages & Foundations
    "Python",
    "SQL",
    "R",
    "Mathematics & Statistics",

    // Machine Learning & AI
    "Machine Learning",
    "Deep Learning",
    "TensorFlow / Keras",
    "PyTorch",
    "Scikit-learn",

    // Data Processing & Analytics
    "Pandas",
    "NumPy",
    "Matplotlib / Seaborn",
    "Data Preprocessing",
    "Feature Engineering",

    // Specialized Domains
    "Predictive Modeling",
    "Signal Processing (ECG)",
    "Time Series Analysis",

    // Tools & Deployment
    "Jupyter Notebooks",
    "Git & GitHub",
    "Docker (Basics)",
    "Cloud Computing Fundamentals",
  ];

  return (
    <section
      id="about"
      className="min-h-screen font-mono flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* About Description */}
          <div className="p-8 mb-8 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 text-xl leading-relaxed">
              Hello! I’m{" "}
              <span className="text-white font-semibold">
                Hemanth Kuttuboyina
              </span>
              , a passionate Computer Science student and aspiring Data Scientist dedicated to
              extracting actionable insights from complex datasets and building 
              intelligent predictive models.
              <br />
              <br />
              My analytical foundation lies in statistical analysis, predictive modeling, and developing
              end-to-end AI pipelines. I am actively applying Python, TensorFlow, and 
              advanced machine learning techniques to solve real-world challenges, such as 
              healthcare diagnostics and signal processing.
              <br />
              <br />
              I am a continuous learner who enjoys tackling complex algorithmic problems,
              optimizing data architectures, and deploying models that drive data-informed
              decisions and practical digital solutions.
            </p>
          </div>
          </div>
        <section id="skills">
          {/* Skills & Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Skills */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">
                💼 Skills
              </h3>
              <div className="flex justify-center flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">
                📚 Education
              </h3>
              <ul className="list-disc list-inside text-lg text-gray-300 space-y-4">
                <li>
                  <strong>
                    <em>B.Tech – Computer Science & Engineering</em>
                  </strong>
                  <br />
                  Andhra Loyola Institute of Engineering and Technology,
                  Vijayawada
                  <br />
                  <span className="text-gray-400">
                    2023 – 2026 | CGPA: 8.0 / 10
                  </span>
                </li>

                <li>
                  <strong>
                    <em>
                      Diploma – Electronics & Communication Engineering (ECE)
                    </em>
                  </strong>
                  <br />
                  Bapatla Engineering College, Bapatla
                  <br />
                  <span className="text-gray-400">
                    2020 – 2023 | CGPA: 7.7 / 10
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
        </section>
      </RevealOnScroll>
    </section>
  );
}

export default About;
