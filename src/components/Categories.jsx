import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Brain,
  Database,
  ShoppingBag,
  LayoutDashboard,
} from "lucide-react";

export default function Categories() {
  const categories = [
    {
      icon: Globe,
      title: "Web Development",
      desc: "Modern React & Full Stack Projects",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      desc: "Android & Cross Platform Apps",
    },
    {
      icon: Brain,
      title: "AI Projects",
      desc: "Machine Learning & AI Solutions",
    },
    {
      icon: Database,
      title: "Database Systems",
      desc: "SQL, Firebase & MongoDB",
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce",
      desc: "Online Store & Marketplace Apps",
    },
    {
      icon: LayoutDashboard,
      title: "Admin Panels",
      desc: "Analytics & Dashboard Systems",
    },
  ];

  return (
    <section className="py-24 bg-[#F8F9FF]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold">
            Categories
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-black text-gray-900">
            Explore Project Categories
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Choose from multiple project domains and get
            your custom project developed professionally.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                group
                relative
                bg-white
                rounded-[28px]
                p-8
                border
                border-gray-100
                shadow-sm
                hover:shadow-2xl
                transition-all
                duration-300
                overflow-hidden
                "
              >
                {/* Hover Gradient */}

                <div
                  className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-br
                  from-violet-50
                  to-purple-50
                  "
                />

                <div className="relative z-10">

                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-violet-100
                    flex
                    items-center
                    justify-center
                    group-hover:scale-110
                    transition
                    duration-300
                    "
                  >
                    <Icon
                      size={30}
                      className="text-violet-600"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-500">
                    {item.desc}
                  </p>

                  <button
                    className="
                    mt-6
                    text-violet-600
                    font-semibold
                    group-hover:translate-x-2
                    transition
                    duration-300
                    "
                  >
                    Explore →
                  </button>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}