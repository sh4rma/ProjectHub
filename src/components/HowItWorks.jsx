import { motion } from "framer-motion";

import {
  ClipboardList,
  MessageCircle,
  Code2,
  Rocket,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Submit Requirement",
    desc: "Tell us your project idea, technology and deadline.",
    color: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    icon: MessageCircle,
    number: "02",
    title: "Get Free Quote",
    desc: "We'll discuss details and send a custom quote.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Code2,
    number: "03",
    title: "Development",
    desc: "Project development starts with regular updates.",
    color: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Delivery",
    desc: "Get source code, report and complete support.",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-16
        sm:py-20
        lg:py-24
        bg-gradient-to-br
        from-purple-100
        via-white
        to-violet-50
      "
    >

      {/* =================================================
          SUBTLE GRID
         ================================================= */}

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
              rgba(99,102,241,0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(59,130,246,0.045) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* =================================================
          BACKGROUND GLOW
         ================================================= */}

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
          -top-32
          -left-32
          w-72
          h-72
          sm:w-96
          sm:h-96
          rounded-full
          bg-blue-300/20
          blur-[100px]
          pointer-events-none
        "
      />

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
          -bottom-32
          -right-32
          w-80
          h-80
          sm:w-96
          sm:h-96
          rounded-full
          bg-violet-300/20
          blur-[110px]
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

        {/* =================================================
            HEADING
           ================================================= */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            text-center
            mb-12
            sm:mb-16
            lg:mb-20
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
              border-blue-100
              text-blue-600
              text-xs
              sm:text-sm
              font-semibold
              shadow-sm
            "
          >
            <span
              className="
                w-2
                h-2
                rounded-full
                bg-blue-500
                animate-pulse
              "
            />

            Simple Process
          </span>

          <h2
            className="
              mt-5
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-black
              tracking-tight
              text-gray-900
            "
          >
            How It Works
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              mx-auto
              text-sm
              sm:text-base
              text-gray-500
              leading-relaxed
            "
          >
            Just 4 simple steps to get your project
            delivered professionally.
          </p>

        </motion.div>


        {/* =================================================
            TIMELINE
           ================================================= */}

        <div className="relative">

          {/* =================================================
              TIMELINE LINE
             ================================================= */}

          <div
            className="
              absolute
              left-[15px]
              sm:left-[20px]
              md:left-1/2
              top-0
              bottom-0
              w-[2px]
              md:-translate-x-1/2
              bg-gradient-to-b
              from-blue-300
              via-violet-300
              to-blue-300
            "
          />

          {/* =================================================
              STEPS
             ================================================= */}

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className={`
                  relative
                  flex
                  mb-8
                  sm:mb-12
                  lg:mb-16
                  justify-start
                  ${
                    index % 2 === 0
                      ? "md:justify-start"
                      : "md:justify-end"
                  }
                `}
              >

                <div
                  className="
                    relative
                    w-full
                    pl-10
                    sm:pl-14
                    md:pl-0
                    md:w-[430px]
                  "
                >

                  {/* =================================================
                      TIMELINE PIN
                     ================================================= */}

                  <div
                    className="
                      absolute
                      left-[5px]
                      sm:left-[10px]
                      md:left-1/2
                      top-7
                      md:-translate-x-1/2
                      z-20
                    "
                  >

                    <motion.div
                      animate={{
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        relative
                        w-5
                        h-5
                        sm:w-6
                        sm:h-6
                        rounded-full
                        bg-white
                        border-[4px]
                        border-blue-500
                        shadow-[0_0_0_5px_rgba(59,130,246,0.10)]
                      "
                    />

                  </div>


                  {/* =================================================
                      CARD
                     ================================================= */}

                  <motion.div
                    whileHover={{
                      y: -7,
                    }}
                    className="
                      group
                      relative
                      bg-white
                      rounded-2xl
                      sm:rounded-3xl
                      p-5
                      sm:p-7
                      border
                      border-gray-100
                      shadow-[0_10px_35px_rgba(59,130,246,0.07)]
                      hover:shadow-[0_20px_45px_rgba(59,130,246,0.12)]
                      transition-all
                      duration-300
                    "
                  >

                    {/* Top Accent */}

                    <div
                      className="
                        absolute
                        top-0
                        left-6
                        right-6
                        h-[2px]
                        rounded-full
                        bg-gradient-to-r
                        from-blue-400
                        via-violet-400
                        to-blue-400
                        opacity-50
                      "
                    />


                    {/* Icon + Number */}

                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-4
                      "
                    >

                      <div
                        className={`
                          w-14
                          h-14
                          sm:w-16
                          sm:h-16
                          rounded-2xl
                          ${step.color}
                          flex
                          items-center
                          justify-center
                          group-hover:scale-105
                          transition-transform
                          duration-300
                        `}
                      >

                        <Icon
                          size={27}
                          className={step.iconColor}
                        />

                      </div>


                      <span
                        className="
                          text-3xl
                          sm:text-4xl
                          font-black
                          text-gray-100
                          group-hover:text-blue-100
                          transition-colors
                        "
                      >
                        {step.number}
                      </span>

                    </div>


                    {/* Title */}

                    <h3
                      className="
                        mt-5
                        text-xl
                        sm:text-2xl
                        font-bold
                        text-gray-900
                      "
                    >
                      {step.title}
                    </h3>


                    {/* Description */}

                    <p
                      className="
                        mt-2
                        text-sm
                        sm:text-base
                        text-gray-500
                        leading-relaxed
                      "
                    >
                      {step.desc}
                    </p>


                    {/* Bottom Indicator */}

                    <div className="mt-5 flex items-center gap-2">

                      <div
                        className="
                          h-1
                          w-8
                          rounded-full
                          bg-gradient-to-r
                          from-blue-500
                          to-violet-500
                          group-hover:w-12
                          transition-all
                          duration-300
                        "
                      />

                      <span
                        className="
                          text-[10px]
                          sm:text-xs
                          font-semibold
                          text-gray-400
                        "
                      >
                        STEP {step.number}
                      </span>

                    </div>

                  </motion.div>

                </div>

              </motion.div>
            );
          })}


          {/* =================================================
              MOBILE END INDICATOR
             ================================================= */}

          <div
            className="
              md:hidden
              flex
              justify-start
              pl-[3px]
              pt-1
            "
          >

            <div
              className="
                w-7
                h-7
                rounded-full
                bg-white
                border
                border-blue-200
                shadow-sm
                flex
                items-center
                justify-center
              "
            >

              <ArrowDown
                size={14}
                className="text-blue-500"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}