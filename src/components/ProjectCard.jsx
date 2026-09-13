import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div
      className="
        w-full
        max-w-full
        min-w-0
        overflow-hidden
        bg-white
        rounded-3xl
        border
        border-gray-100
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >
      {/* Image */}

      <div className="w-full max-w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            block
            w-full
            max-w-full
            h-52
            sm:h-60
            object-cover
            transition-transform
            duration-500
            hover:scale-105
          "
        />
      </div>

      {/* Content */}

      <div className="p-5 sm:p-6 min-w-0">
        <h3
          className="
            text-xl
            sm:text-2xl
            font-bold
            text-gray-900
            break-words
          "
        >
          {project.title}
        </h3>

        <p
          className="
            text-gray-500
            mt-3
            leading-relaxed
            line-clamp-3
            break-words
          "
        >
          {project.desc}
        </p>

        {/* Tech Stack */}

        {project.tech && (
          <div
            className="
              flex
              flex-wrap
              gap-2
              mt-4
              max-w-full
            "
          >
            {project.tech.map((item, index) => (
              <span
                key={index}
                className="
                  max-w-full
                  px-3
                  py-1
                  text-xs
                  sm:text-sm
                  rounded-full
                  bg-violet-100
                  text-violet-700
                  font-medium
                  break-words
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
            <span
              className="
                text-2xl
                sm:text-3xl
                font-black
                text-violet-600
              "
            >
              ₹{project.price}
            </span>
          </div>
        )}

        {/* View Project */}

        <Link
          to={`/project/${project.id}`}
          className="
            inline-flex
            items-center
            justify-center
            w-full
            mt-5
            px-5
            py-3
            rounded-xl
            bg-violet-600
            hover:bg-violet-700
            text-white
            font-semibold
            transition-colors
          "
        >
          View Project →
        </Link>
      </div>
    </div>
  );
}