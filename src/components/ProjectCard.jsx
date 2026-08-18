import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      overflow-hidden
      shadow-lg
      hover:shadow-2xl
      hover:-translate-y-2
      transition-all
      duration-300
      "
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
          w-full
          h-60
          object-cover
          transition-transform
          duration-500
          hover:scale-105
          "
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900">
          {project.title}
        </h3>

        <p className="text-gray-500 mt-3 line-clamp-3">
          {project.desc}
        </p>

        {/* Tech Stack */}
        {project.tech && (
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((item, index) => (
              <span
                key={index}
                className="
                px-3
                py-1
                text-sm
                rounded-full
                bg-violet-100
                text-violet-700
                font-medium
                "
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* Price */}
        {project.price && (
          <div className="mt-5">
            <span className="text-3xl font-black text-violet-600">
              ₹{project.price}
            </span>
          </div>
        )}

        <Link to={`/project/${project.id}`}>
          
        </Link>
      </div>
    </div>
  );
}