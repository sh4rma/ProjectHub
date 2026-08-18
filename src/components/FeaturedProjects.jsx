import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-[#F8F9FF]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            Featured Projects
          </span>

          <h2 className="mt-4 text-4xl font-black text-gray-900">
            Popular Projects
          </h2>

          <p className="mt-3 text-gray-500">
            Industry-level Project
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}