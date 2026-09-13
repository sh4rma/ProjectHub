import projects from "../data/projects";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Projects() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-gradient-to-br
        from-[#F8F5FF]
        via-white
        to-[#F1EEFF]
        py-20
        sm:py-24
      "
    >

      {/* =========================================
          BACKGROUND GRID
         ========================================= */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(124,58,237,0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(124,58,237,0.04) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "45px 45px",
        }}
      />


      {/* =========================================
          PURPLE GLOW
         ========================================= */}

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-40
          -left-40
          w-80
          h-80
          sm:w-[450px]
          sm:h-[450px]
          rounded-full
          bg-violet-300/20
          blur-[110px]
          pointer-events-none
        "
      />


      {/* =========================================
          BLUE GLOW
         ========================================= */}

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-40
          -right-40
          w-80
          h-80
          sm:w-[450px]
          sm:h-[450px]
          rounded-full
          bg-blue-300/15
          blur-[110px]
          pointer-events-none
        "
      />


      {/* =========================================
          CONTENT
         ========================================= */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
        "
      >

        {/* =========================================
            HEADER
           ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            max-w-3xl
            mx-auto
            text-center
            mb-14
            sm:mb-20
          "
        >

          <span
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-white
              border
              border-violet-100
              text-violet-600
              text-xs
              sm:text-sm
              font-semibold
              shadow-sm
            "
          >
            <Sparkles size={15} />

            Our Work
          </span>


          <h1
            className="
              mt-5
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-black
              tracking-tight
              text-gray-900
            "
          >
            Our
            <span className="text-violet-600">
              {" "}Projects
            </span>
          </h1>


          <p
            className="
              mt-5
              text-sm
              sm:text-base
              text-gray-500
              leading-relaxed
              max-w-2xl
              mx-auto
            "
          >
            Explore some of our latest projects,
            creative solutions and technology-driven
            work.
          </p>

        </motion.div>


        {/* =========================================
            PROJECT LIST
           ========================================= */}

        <div
          className="
            border-y
            border-violet-100
          "
        >

          {projects.map((project, index) => (

            <motion.div
              key={project.id}

              initial={{
                opacity: 0,
                y: 35,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                amount: 0.15,
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}

              className="
                group
                grid
                grid-cols-1
                md:grid-cols-[280px_1fr]
                lg:grid-cols-[340px_1fr]
                gap-6
                lg:gap-10
                py-6
                sm:py-8
                lg:py-10
                border-b
                border-violet-100
                last:border-b-0
                hover:bg-white/60
                transition-colors
                duration-300
              "
            >

              {/* =================================
                  IMAGE
                 ================================= */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  bg-violet-50
                  h-52
                  sm:h-60
                  md:h-44
                  lg:h-52
                "
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />


                {/* Number */}

                <div
                  className="
                    absolute
                    top-3
                    left-3
                    px-3
                    py-1.5
                    rounded-lg
                    bg-white/90
                    backdrop-blur
                    text-violet-600
                    text-xs
                    font-black
                  "
                >
                  0{index + 1}
                </div>

              </div>


              {/* =================================
                  PROJECT INFO
                 ================================= */}

              <div
                className="
                  flex
                  flex-col
                  justify-center
                  min-w-0
                "
              >

                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-4
                  "
                >

                  <h2
                    className="
                      text-2xl
                      sm:text-3xl
                      font-black
                      text-gray-900
                      group-hover:text-violet-600
                      transition-colors
                      duration-300
                    "
                  >
                    {project.title}
                  </h2>


                  <ArrowUpRight
                    size={22}
                    className="
                      shrink-0
                      text-gray-300
                      group-hover:text-violet-600
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      transition-all
                    "
                  />

                </div>


                <p
                  className="
                    mt-3
                    text-sm
                    sm:text-base
                    text-gray-500
                    leading-relaxed
                    max-w-2xl
                    line-clamp-3
                  "
                >
                  {project.desc}
                </p>


                {/* Technology */}

                {project.tech && (
                  <div
                    className="
                      flex
                      flex-wrap
                      gap-2
                      mt-5
                    "
                  >

                    {project.tech.map(
                      (tech, techIndex) => (

                        <span
                          key={techIndex}
                          className="
                            px-3
                            py-1.5
                            rounded-lg
                            bg-violet-50
                            border
                            border-violet-100
                            text-violet-600
                            text-xs
                            sm:text-sm
                            font-medium
                          "
                        >
                          {tech}
                        </span>

                      )
                    )}

                  </div>
                )}


                {/* Bottom */}

                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    justify-between
                    gap-4
                    mt-6
                    pt-5
                    border-t
                    border-gray-100
                  "
                >

                  {project.price ? (

                    <div>
                      <span
                        className="
                          text-2xl
                          font-black
                          text-violet-600
                        "
                      >
                        ₹{project.price}
                      </span>

                      <span
                        className="
                          ml-2
                          text-xs
                          text-gray-400
                        "
                      >
                        Project
                      </span>
                    </div>

                  ) : (

                    <span
                      className="
                        text-sm
                        font-medium
                        text-gray-400
                      "
                    >
                      Custom Project
                    </span>

                  )}


                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      w-full
                      sm:w-auto
                      px-6
                      py-3
                      rounded-xl
                      bg-violet-600
                      hover:bg-violet-700
                      text-white
                      text-sm
                      font-semibold
                      transition-all
                      duration-300
                      hover:shadow-lg
                      hover:shadow-violet-500/20
                    "
                  >
                    View Project

                    <ArrowUpRight
                      size={17}
                    />

                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}