import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F8F9FF] px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="
        bg-white
        p-8
        md:p-12
        rounded-[30px]
        shadow-xl
        text-center
        max-w-lg
        w-full
        "
      >
        <CheckCircle
          size={80}
          className="mx-auto text-green-500"
        />

        <h1 className="mt-6 text-4xl font-black">
          Thank You 🎉
        </h1>

        <p className="mt-4 text-gray-500">
          Your project request has been submitted successfully.
          Our team will contact you shortly.
        </p>

        <Link to="/">
          <button
            className="
            mt-8
            px-8
            py-4
            bg-violet-600
            text-white
            rounded-xl
            font-semibold
            hover:bg-violet-700
            transition
            "
          >
            Back To Home
          </button>
        </Link>
      </motion.div>
    </section>
  );
}