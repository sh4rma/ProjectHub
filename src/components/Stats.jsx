import { motion } from "framer-motion";
import statsData from "../data/stats";
import useFakeStats from "../hooks/useFakeStats";
import { Users, Trophy } from "lucide-react";

function StatNumber({ value, suffix }) {
  const count = useFakeStats(value);

  return (
    <h3 className="mt-5 text-4xl font-black text-gray-900">
      {count}
      {suffix}
    </h3>
  );
}

export default function Stats() {
  const icons = [Users, Trophy];

  return (
    <section className="py-20 bg-[#F8F9FF]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900">
            Trusted By Students
          </h2>

          <p className="mt-4 text-gray-500">
            Helping students build amazing projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {statsData.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={item.id}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="
                bg-white
                rounded-3xl
                p-7
                border
                border-gray-100
                shadow-sm
                hover:shadow-2xl
                transition-all
                duration-300
                "
              >
                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-violet-100
                  flex
                  items-center
                  justify-center
                  "
                >
                  <Icon
                    size={26}
                    className="text-violet-600"
                  />
                </div>

                <StatNumber
                  value={item.value}
                  suffix={item.suffix}
                />

                <h4 className="mt-2 text-lg font-semibold text-gray-800">
                  {item.title}
                </h4>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}