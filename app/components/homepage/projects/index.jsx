import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative z-50 my-12 lg:my-24 bg-white text-gray-900"
    >
      {/* Section Header */}
      <div className="sticky top-10">
        {/* Subtle glow accent */}
        <div className="w-[80px] h-[80px] bg-blue-100 rounded-full absolute -top-3 left-0 translate-x-1/2 blur-3xl opacity-30"></div>

        {/* Title + Divider */}
        <div className="flex items-center justify-start relative">
          <span className="bg-blue-600 absolute left-0 text-white px-5 py-3 text-xl rounded-md shadow-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-blue-600"></span>
        </div>
      </div>

      {/* Project Cards */}
      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded-lg shadow-[0_0_25px_rgba(0,0,0,0.1)] border border-gray-200 hover:border-blue-400 transition-all duration-500 bg-gray-50 hover:bg-blue-50">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
