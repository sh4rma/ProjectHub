import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F9FF] pt-32 lg:pt-40 pb-20">

      {/* Background Glow */}

      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        top-0
        left-0
        w-72
        h-72
        bg-violet-300/40
        rounded-full
        blur-[120px]
        "
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-0
        right-0
        w-80
        h-80
        bg-fuchsia-300/40
        rounded-full
        blur-[140px]
        "
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <span
              className="
              inline-block
              px-4
              py-2
              rounded-full
              bg-violet-100
              text-violet-700
              text-sm
              font-semibold
              "
            >
               #1 Student Project Platform
            </span>

            <h1
              className="
              mt-6
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              text-gray-900
              leading-tight
              "
            >
              Get Your Dream

              <br />

              <span className="text-violet-600">
                Project Done
              </span>

              <br />

              The Smart Way
            </h1>

            <p
              className="
              mt-6
              text-gray-500
              text-base
              md:text-lg
              max-w-xl
              "
            >
              We provide custom project development,
              AI solutions, documentation, PPTs and
              complete student project support.
            </p>

            <div
              className="
              flex
              flex-col
              sm:flex-row
              gap-4
              mt-8
              "
            >
             <Link to="/request-project">
  <button
    className="
    bg-violet-600
    text-white
    px-6
    py-3
    rounded-xl
    "
  >
    Request Project
  </button>
</Link>

              <Link to="/projects">
                <button
                  className="
                  px-7 py-4
                  border-2
                  border-white
                  rounded-2xl
                  font-semibold
                  hover:bg-white
                  hover:text-violet-700
                  transition
                  "
                >
                  Browse Projects
                </button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -12, 0],
            }}
            transition={{
              duration: 0.8,
              y: {
                duration: 4,
                repeat: Infinity,
              },
            }}
            className="relative"
          >
            {/* Floating Card 1 */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
              hidden md:block
              absolute
              -top-4
              left-0
              bg-white
              shadow-xl
              rounded-2xl
              px-5
              py-4
              "
            >
               5000+ Projects
            </motion.div>

            {/* Floating Card 2 */}

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
              hidden md:block
              absolute
              top-24
              -right-4
              bg-white
              shadow-xl
              rounded-2xl
              px-5
              py-4
              "
            >
               98% Success
            </motion.div>

            {/* Main Card */}

            <motion.div
              whileHover={{
                scale: 1.02,
                y: -10,
              }}
              className="
              bg-white
              rounded-[32px]
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              p-6
              md:p-10
              "
            >
              <img
                src="https://illustrations.popsy.co/violet/web-design.svg"
                alt="Hero"
                className="
                w-full
                max-w-[550px]
                mx-auto
                "
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}