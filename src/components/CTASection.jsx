import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div
        className="
        max-w-7xl mx-auto
        bg-gradient-to-r
        from-violet-600
        via-purple-600
        to-indigo-600
        rounded-[40px]
        overflow-hidden
        shadow-2xl
        "
      >
        <div className="grid lg:grid-cols-2 items-center">

          {/* Left Side */}
          <div className="p-10 md:p-16 text-white">

            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Student Projects
            </span>

            <h2 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              Ready To Build
              <br />
              Your Dream Project?
            </h2>

            <p className="mt-6 text-violet-100 text-lg max-w-xl">
              Get complete support for Web Development,
              AI Projects, Mobile Apps, Research Papers,
              PPTs and Final Year Projects.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <Link to="/request-project">
                <button
                  className="
                  px-7 py-4
                  bg-white
                  text-violet-700
                  font-bold
                  rounded-2xl
                  hover:scale-105
                  transition
                  flex items-center gap-2
                  "
                >
                  Request Project
                  <ArrowRight size={18} />
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

          </div>

          {/* Right Side */}
          <div className="p-6 md:p-10">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="students"
              className="
              w-full
              h-[280px]
              md:h-[450px]
              object-cover
              rounded-[30px]
              "
            />

          </div>

        </div>
      </div>
    </section>
  );
}