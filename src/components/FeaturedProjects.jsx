import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { Sparkles, Layers3 } from "lucide-react";

export default function FeaturedProjects() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#F8F9FF]
        via-white
        to-[#F3F0FF]
        py-20
        sm:py-24
        [perspective:1400px]
      "
    >

      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-70
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(99,102,241,0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(99,102,241,0.045) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "45px 45px",
        }}
      />


      {/* =====================================================
          PURPLE 3D GLOW
      ===================================================== */}

      <motion.div
        animate={{
          x: [0, 45, 0],
          y: [0, -25, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-80
          w-80
          rounded-full
          bg-violet-300/25
          blur-[110px]
        "
      />


      {/* =====================================================
          BLUE 3D GLOW
      ===================================================== */}

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-80
          w-80
          rounded-full
          bg-blue-300/20
          blur-[110px]
        "
      />


      {/* =====================================================
          FLOATING 3D CUBE
      ===================================================== */}

      <motion.div
        animate={{
          rotateX: [0, 180, 360],
          rotateY: [0, 180, 360],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          left-[5%]
          top-[30%]
          hidden
          h-14
          w-14
          rounded-xl
          border
          border-violet-300/40
          bg-violet-500/10
          shadow-[0_0_30px_rgba(124,58,237,0.12)]
          md:block
          [transform-style:preserve-3d]
        "
      />


      {/* =====================================================
          FLOATING 3D SPHERE
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, 15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[6%]
          top-[20%]
          hidden
          h-20
          w-20
          rounded-full
          border
          border-violet-200/50
          bg-gradient-to-br
          from-violet-200/30
          via-white/50
          to-indigo-300/20
          shadow-[inset_-12px_-12px_30px_rgba(124,58,237,0.12)]
          backdrop-blur-sm
          md:block
        "
      />


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
        "
      >


        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            rotateX: -10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotateX: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            relative
            mx-auto
            mb-12
            max-w-3xl
            text-center
            sm:mb-16
          "
        >

          {/* Badge */}

          <motion.span
            whileHover={{
              y: -4,
              rotateX: 8,
              rotateY: -8,
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-100
              bg-white/80
              px-4
              py-2
              text-sm
              font-semibold
              text-blue-600
              shadow-[0_10px_30px_rgba(59,130,246,0.08)]
              backdrop-blur-md
              [transform-style:preserve-3d]
            "
          >
            <Sparkles size={15} />

            Featured Projects
          </motion.span>


          {/* Heading */}

          <h2
            className="
              mt-5
              text-4xl
              font-black
              tracking-tight
              text-gray-900
              sm:text-5xl
              md:text-6xl
            "
          >
            Popular{" "}

            <span className="text-violet-600">
              Projects
            </span>
          </h2>


          {/* Description */}

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-relaxed
              text-gray-500
              sm:text-base
            "
          >
            Industry-level projects built with
            modern technologies and real-world
            solutions.
          </p>

        </motion.div>


        {/* =====================================================
            PROJECT CARDS
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-7
            md:grid-cols-3
            md:gap-6
            lg:gap-8
          "
        >

          {projects.slice(0, 3).map((project, index) => (

            <motion.div
              key={project.id}

              initial={{
                opacity: 0,
                y: 60,
                rotateX: -12,
                scale: 0.94,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
                scale: 1,
              }}

              viewport={{
                once: true,
                amount: 0.15,
              }}

              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}

              whileHover={{
                y: -12,
                rotateX: 4,
                rotateY:
                  index === 0
                    ? 5
                    : index === 1
                    ? 0
                    : -5,
                scale: 1.025,
              }}

              style={{
                transformStyle: "preserve-3d",
              }}

              className="
                group
                relative
                [transform-style:preserve-3d]
              "
            >

              {/* =================================================
                  3D SHADOW
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-5
                  left-[8%]
                  right-[8%]
                  h-10
                  rounded-full
                  bg-violet-500/10
                  blur-2xl
                  transition-all
                  duration-500
                  group-hover:-bottom-7
                  group-hover:bg-violet-500/20
                "
                style={{
                  transform: "translateZ(-30px)",
                }}
              />


              {/* =================================================
                  CARD GLOW
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-[1px]
                  rounded-[26px]
                  bg-gradient-to-br
                  from-violet-400/20
                  via-transparent
                  to-blue-400/20
                  opacity-0
                  blur-sm
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
                style={{
                  transform: "translateZ(-5px)",
                }}
              />


              {/* =================================================
                  PROJECT CARD
              ================================================= */}

              <div
                className="
                  relative
                  h-full
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/80
                  bg-white/80
                  shadow-[0_15px_45px_rgba(76,29,149,0.08)]
                  backdrop-blur-xl
                  transition-shadow
                  duration-500
                  group-hover:shadow-[0_25px_60px_rgba(76,29,149,0.16)]
                "
                style={{
                  transform: "translateZ(15px)",
                }}
              >

                {/* Top shine */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    right-0
                    top-0
                    z-20
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-violet-300/70
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />


                {/* Project Card */}

                <ProjectCard project={project} />

              </div>


              {/* =================================================
                  FLOATING NUMBER
              ================================================= */}

              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  -right-2
                  -top-3
                  z-30
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white
                  bg-violet-600
                  text-xs
                  font-black
                  text-white
                  shadow-lg
                  shadow-violet-500/25
                "
                style={{
                  transform: "translateZ(45px)",
                }}
              >
                0{index + 1}
              </motion.div>

            </motion.div>

          ))}

        </div>


        {/* =====================================================
            BOTTOM 3D INDICATOR
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mx-auto
            mt-14
            flex
            w-fit
            items-center
            gap-3
            rounded-2xl
            border
            border-violet-100
            bg-white/70
            px-5
            py-3
            text-xs
            font-medium
            text-gray-500
            shadow-[0_12px_35px_rgba(124,58,237,0.08)]
            backdrop-blur-md
            sm:text-sm
          "
        >

          <motion.div
            animate={{
              rotateY: [0, 180, 360],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Layers3
              size={18}
              className="text-violet-600"
            />
          </motion.div>

          <span>
            Explore our featured work
          </span>

        </motion.div>

      </div>

    </section>
  );
}