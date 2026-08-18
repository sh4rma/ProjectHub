import projects from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
  
  <section className="bg-sky purple-50 min-h-screen py-20">
     <div className="max-w-7xl mx-auto px-5">


         
    <div className="text-center mb-20 py-5">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-4xl py-4 font-black"
          >
            Our Projects
          </motion.h1>


    <p className="text-center text-slate-600 mb-0">
      Explore some of our latest projects
    </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

      {projects.map((project) => (
        <motion.div
          key={project.id}
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          className="
          bg-white
          rounded-3xl
          overflow-hidden
          border
          border-blue-100
          shadow-lg
          hover:shadow-2xl
          transition-all
          duration-300
          "
        >
          <img
            src={project.image}
            alt={project.title}
            className="
            w-full
            h-64
            object-cover
            "
          />

          <div className="p-6">

            <h2 className="text-2xl font-bold text-light-purple-900">
              {project.title}
            </h2>

            <p className="text-slate-600 mt-2">
              {project.desc}
            </p>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="
                mt-6
                bg-purple-600
                hover:bg-purple-700
                px-6
                py-3
                rounded-xl
                text-white
                font-semibold
                transition
                "
              >
                View Project
              </button>
            </a>

          </div>
        </motion.div>
      ))}

    </div>

  </div>

</section>

  );
}