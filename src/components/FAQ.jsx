import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: "How long does project delivery take?",
      answer:
        "Most projects are delivered within 3-10 days depending on complexity.",
    },
    {
      question: "Will I get source code?",
      answer:
        "Yes, complete source code and documentation will be provided.",
    },
    {
      question: "Do you provide project reports?",
      answer:
        "Yes, project reports, PPTs and documentation are available.",
    },
    {
      question: "Can I request custom features?",
      answer:
        "Absolutely. We can build custom features based on your requirements.",
    },
    {
      question: "Do you provide support after delivery?",
      answer:
        "Yes, post-delivery support is available for project-related issues.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8F9FF]">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center">
          <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
            FAQ
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-500">
            Everything you need to know
          </p>
        </div>

        <div className="mt-16 space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
              bg-white
              rounded-2xl
              border
              border-gray-100
              overflow-hidden
              "
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="
                w-full
                p-6
                flex
                items-center
                justify-between
                text-left
                "
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>

                {active === index ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                  >
                    <p className="px-6 pb-6 text-gray-500">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}