import { motion } from "framer-motion";
import {
  ClipboardList,
  MessageCircle,
  Code2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Submit Requirement",
    desc: "Tell us your project idea, technology and deadline.",
    color: "bg-orange-100",
  },
  {
    icon: MessageCircle,
    number: "02",
    title: "Get Free Quote",
    desc: "We'll discuss details and send a custom quote.",
    color: "bg-blue-100",
  },
  {
    icon: Code2,
    number: "03",
    title: "Development",
    desc: "Project development starts with regular updates.",
    color: "bg-purple-100",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Delivery",
    desc: "Get source code, report and complete support.",
    color: "bg-green-100",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#F8FBFF] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold">
            Process
          </span>

         <div className="text-center mb-1 py-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-4xl font-black"
          >
            How its works
          </motion.h1>
          </div>

          <p className="mt-4 text-gray-500">
            Just 4 simple steps to get your project delivered.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div
            className="
            absolute
            left-6
            md:left-1/2
            top-0
            h-full
            w-[3px]
            bg-blue-200
            md:-translate-x-1/2
            "
          />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className={`flex mb-16 ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                } justify-start`}
              >
                <div
                  className="
                  relative
                  w-full
                  pl-16
                  md:pl-0
                  md:w-[430px]
                  "
                >

                  {/* Pin */}
                  <div
                    className="
                    absolute
                    top-8
                    left-0
                    md:left-1/2
                    w-6
                    h-6
                    rounded-full
                    bg-blue-600
                    shadow-lg
                    z-10
                    md:-translate-x-1/2
                    "
                  />

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -10,
                      rotate: 1,
                    }}
                    className="
                    bg-white
                    rounded-[30px]
                    p-6 md:p-8
                    shadow-xl
                    border
                    border-blue-100
                    transition-all
                    duration-300
                    "
                  >
                    <div
                      className={`
                      w-16
                      h-16
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      ${step.color}
                      `}
                    >
                      <Icon
                        size={30}
                        className="text-blue-600"
                      />
                    </div>

                    <p className="text-blue-500 text-xl font-bold mt-6">
                      {step.number}
                    </p>

                    <h3 className="text-2xl font-bold mt-2 text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}