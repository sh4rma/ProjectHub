import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "BCA Student",
    review:
      "Amazing service. My project was delivered before deadline with complete source code.",
  },
  {
    name: "Priya Verma",
    role: "MCA Student",
    review:
      "Very professional work and excellent UI design. Highly recommended.",
  },
  {
    name: "Aman Khan",
    role: "B.Tech Student",
    review:
      "Got my AI project completed with proper documentation and support.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-gray-900">
            What Students Say
          </h2>

          <p className="mt-4 text-gray-500">
            Trusted by hundreds of students
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
              bg-[#F8F9FF]
              rounded-3xl
              p-8
              border
              border-gray-100
              shadow-sm
              hover:shadow-xl
              transition-all
              duration-300
              "
            >
              <div className="flex gap-1 text-yellow-400">
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
              </div>

              <p className="mt-5 text-gray-600 leading-relaxed">
                "{review.review}"
              </p>

              <div className="mt-6">
                <h4 className="font-bold text-gray-900">
                  {review.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {review.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}