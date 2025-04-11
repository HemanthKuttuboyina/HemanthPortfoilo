import { useState } from "react";
import RevealOnScroll from "../Ui/RevealOnScroll";
import ProjectRep from "../Ui/ProjectRep";
function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center font-mono justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">
            Features Projects
          </h2>

          <ProjectRep />
          {/* <>
            <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">
              Updated soon ~~~
            </h2>
          </> */}
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
