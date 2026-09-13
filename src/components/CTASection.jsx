import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Brain,
  Smartphone,
  Rocket,
} from "lucide-react";

import { Link } from "react-router-dom";


export default function CTASection() {

  return (

    <section
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        lg:py-32
        bg-white
      "
    >

      {/* =================================================
          BACKGROUND GLOW
         ================================================= */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-gradient-to-br
          from-violet-50
          via-white
          to-purple-50
        "
      />


      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-32
          -right-32
          w-72
          h-72
          sm:w-96
          sm:h-96
          rounded-full
          bg-violet-300/20
          blur-[100px]
          pointer-events-none
        "
      />


      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-32
          -left-32
          w-72
          h-72
          sm:w-96
          sm:h-96
          rounded-full
          bg-blue-300/15
          blur-[100px]
          pointer-events-none
        "
      />


      {/* =================================================
          CONTENT
         ================================================= */}

      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          px-5
          sm:px-6
        "
      >

        <div
          className="
            relative
            overflow-hidden
            border-y
            border-violet-100
            py-12
            sm:py-16
            lg:py-20
          "
        >

          {/* =============================================
              DECORATIVE GRID
             ============================================= */}

          <div
            className="
              absolute
              inset-0
              pointer-events-none
              opacity-60
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
              backgroundSize: "40px 40px",
            }}
          />


          {/* =============================================
              FLOATING ICONS
             ============================================= */}

          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 4, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              absolute
              hidden
              sm:flex
              top-10
              right-[18%]
              w-12
              h-12
              rounded-2xl
              bg-white
              border
              border-violet-100
              shadow-lg
              items-center
              justify-center
            "
          >
            <Code2
              size={22}
              className="text-violet-600"
            />
          </motion.div>


          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
            }}
            className="
              absolute
              hidden
              sm:flex
              bottom-10
              right-[8%]
              w-12
              h-12
              rounded-2xl
              bg-white
              border
              border-violet-100
              shadow-lg
              items-center
              justify-center
            "
          >
            <Brain
              size={22}
              className="text-purple-600"
            />
          </motion.div>


          {/* =============================================
              MAIN
             ============================================= */}

          <div
            className="
              relative
              z-10
              max-w-4xl
              mx-auto
              text-center
            "
          >

            {/* Badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-violet-50
                border
                border-violet-100
                text-violet-600
                text-xs
                sm:text-sm
                font-semibold
              "
            >

              <Sparkles size={15} />

              Build Something Amazing

            </motion.div>


            {/* Heading */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
              }}
              className="
                mt-6
                text-4xl
                sm:text-5xl
                md:text-6xl
                font-black
                tracking-tight
                leading-[1.05]
                text-gray-900
              "
            >

              Your Idea.

              <br />

              <span
                className="
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-violet-600
                  via-purple-600
                  to-indigo-600
                "
              >
                Our Technology.
              </span>

            </motion.h2>


            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
              }}
              className="
                mt-6
                text-sm
                sm:text-base
                md:text-lg
                text-gray-500
                max-w-2xl
                mx-auto
                leading-relaxed
              "
            >
              From college assignments to final year projects,
              get development, AI solutions, documentation,
              PPTs and complete project support.
            </motion.p>


            {/* =========================================
                BUTTONS
               ========================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.3,
              }}
              className="
                flex
                flex-col
                sm:flex-row
                items-center
                justify-center
                gap-3
                mt-8
              "
            >

              <Link
                to="/request-project"
                className="
                  group
                  w-full
                  sm:w-auto
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-7
                  py-3.5
                  rounded-xl
                  bg-violet-600
                  hover:bg-violet-700
                  text-white
                  font-semibold
                  text-sm
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-violet-500/20
                "
              >

                Start Your Project

                <ArrowRight
                  size={18}
                  className="
                    group-hover:translate-x-1
                    transition-transform
                  "
                />

              </Link>


              <Link
                to="/projects"
                className="
                  w-full
                  sm:w-auto
                  inline-flex
                  items-center
                  justify-center
                  px-7
                  py-3.5
                  rounded-xl
                  bg-white
                  border
                  border-gray-200
                  hover:border-violet-200
                  hover:text-violet-600
                  text-gray-700
                  font-semibold
                  text-sm
                  transition-all
                  duration-300
                "
              >
                Explore Projects
              </Link>

            </motion.div>


            {/* =========================================
                TECHNOLOGY STRIP
               ========================================= */}

            <div
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-6
                gap-y-3
                mt-10
                pt-6
                border-t
                border-gray-100
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  sm:text-sm
                  text-gray-500
                "
              >
                <Code2
                  size={16}
                  className="text-violet-500"
                />
                Web Development
              </div>


              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  sm:text-sm
                  text-gray-500
                "
              >
                <Brain
                  size={16}
                  className="text-purple-500"
                />
                AI Projects
              </div>


              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  sm:text-sm
                  text-gray-500
                "
              >
                <Smartphone
                  size={16}
                  className="text-indigo-500"
                />
                Mobile Apps
              </div>


              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  sm:text-sm
                  text-gray-500
                "
              >
                <Rocket
                  size={16}
                  className="text-violet-500"
                />
                Final Year Projects
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}