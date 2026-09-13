import {
  BookOpen,
  FileText,
  Code2,
  FolderGit2,
  GraduationCap,
  Brain,
  Download,
  Search,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";


const resources = [
  {
    icon: BookOpen,
    title: "Notes",
    desc: "Semester-wise BCA & MCA Notes",
    category: "Study",
    type: "PDF",
  },
  {
    icon: FileText,
    title: "Previous Papers",
    desc: "University Question Papers",
    category: "Study",
    type: "PDF",
  },
  {
    icon: Code2,
    title: "Source Code",
    desc: "React, MERN, Java & Python Projects",
    category: "Development",
    type: "Code",
  },
  {
    icon: FolderGit2,
    title: "Mini Projects",
    desc: "Ready-to-use College Projects",
    category: "Projects",
    type: "Project",
  },
  {
    icon: GraduationCap,
    title: "Interview Prep",
    desc: "HR + Technical Interview Questions",
    category: "Career",
    type: "Guide",
  },
  {
    icon: Brain,
    title: "Roadmaps",
    desc: "Frontend, Backend & Full Stack",
    category: "Career",
    type: "Guide",
  },
];


export default function Resources() {

  const [search, setSearch] = useState("");

  const [activeCategory, setActiveCategory] =
    useState("All");


  const categories = [
    "All",
    "Study",
    "Development",
    "Projects",
    "Career",
  ];


  const filteredResources = useMemo(() => {

    return resources.filter((item) => {

      const matchesSearch =
        item.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.desc
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" ||
        item.category === activeCategory;

      return matchesSearch && matchesCategory;

    });

  }, [search, activeCategory]);


  return (

    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-gradient-to-br
        from-[#F8F5FF]
        via-white
        to-[#F1EEFF]
        py-20
        sm:py-24
      "
    >

      {/* =========================================
          BACKGROUND
         ========================================= */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-70
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
          backgroundSize: "42px 42px",
        }}
      />


      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-40
          -right-40
          w-80
          h-80
          sm:w-[450px]
          sm:h-[450px]
          rounded-full
          bg-violet-300/20
          blur-[110px]
          pointer-events-none
        "
      />


      {/* =========================================
          CONTENT
         ========================================= */}

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

        {/* =========================================
            HEADER
           ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center"
        >

          <span
            className="
              inline-flex
              items-center
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
            Student Library
          </span>


          <h1
            className="
              mt-5
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-black
              tracking-tight
              text-gray-900
            "
          >
            Student
            <span className="text-violet-600">
              {" "}Resources
            </span>
          </h1>


          <p
            className="
              mt-4
              text-sm
              sm:text-base
              text-gray-500
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Notes, previous papers, source code,
            projects and interview preparation —
            everything students need in one place.
          </p>


          {/* =====================================
              SEARCH
             ===================================== */}

          <div
            className="
              mt-8
              max-w-2xl
              mx-auto
              relative
            "
          >

            <Search
              size={20}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
            />


            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search notes, projects, interview prep..."
              className="
                w-full
                h-14
                bg-white
                border
                border-gray-200
                rounded-2xl
                pl-12
                pr-5
                text-sm
                text-gray-800
                outline-none
                focus:border-violet-400
                focus:ring-4
                focus:ring-violet-100
                transition
              "
            />

          </div>

        </motion.div>


        {/* =========================================
            FILTERS
           ========================================= */}

        <div
          className="
            flex
            gap-2
            overflow-x-auto
            pb-2
            mt-8
            justify-start
            sm:justify-center
            scrollbar-hide
          "
        >

          {categories.map((category) => (

            <button
              key={category}
              onClick={() =>
                setActiveCategory(category)
              }
              className={`
                shrink-0
                px-4
                py-2
                rounded-xl
                text-sm
                font-semibold
                transition
                ${
                  activeCategory === category
                    ? "bg-violet-600 text-white"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-violet-200 hover:text-violet-600"
                }
              `}
            >
              {category}
            </button>

          ))}

        </div>


        {/* =========================================
            RESOURCE COUNT
           ========================================= */}

        <div
          className="
            flex
            items-center
            justify-between
            mt-10
            mb-3
            px-1
          "
        >

          <p
            className="
              text-sm
              text-gray-500
            "
          >
            <span className="font-bold text-gray-900">
              {filteredResources.length}
            </span>{" "}
            resources available
          </p>

        </div>


        {/* =========================================
            RESOURCE LIST
           ========================================= */}

        <div
          className="
            border-y
            border-violet-100
          "
        >

          {filteredResources.length === 0 ? (

            <div
              className="
                py-16
                text-center
              "
            >

              <Search
                size={35}
                className="
                  mx-auto
                  text-violet-300
                "
              />

              <h3
                className="
                  mt-4
                  font-bold
                  text-gray-900
                "
              >
                No resources found
              </h3>

              <p
                className="
                  mt-1
                  text-sm
                  text-gray-500
                "
              >
                Try another search term.
              </p>

            </div>

          ) : (

            filteredResources.map(
              (item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={item.title}
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
                      delay: index * 0.06,
                    }}
                    className="
                      group
                      flex
                      flex-col
                      sm:flex-row
                      sm:items-center
                      gap-4
                      py-6
                      border-b
                      border-violet-100
                      last:border-b-0
                      hover:bg-white/70
                      transition
                    "
                  >

                    {/* Icon */}

                    <div
                      className="
                        w-12
                        h-12
                        shrink-0
                        rounded-xl
                        bg-violet-50
                        flex
                        items-center
                        justify-center
                        group-hover:bg-violet-100
                        transition
                      "
                    >

                      <Icon
                        size={23}
                        className="text-violet-600"
                      />

                    </div>


                    {/* Info */}

                    <div className="flex-1 min-w-0">

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          flex-wrap
                        "
                      >

                        <h2
                          className="
                            text-lg
                            sm:text-xl
                            font-bold
                            text-gray-900
                            group-hover:text-violet-600
                            transition
                          "
                        >
                          {item.title}
                        </h2>


                        <span
                          className="
                            px-2
                            py-0.5
                            rounded-md
                            bg-gray-100
                            text-[10px]
                            font-bold
                            text-gray-500
                          "
                        >
                          {item.type}
                        </span>

                      </div>


                      <p
                        className="
                          mt-1
                          text-sm
                          text-gray-500
                        "
                      >
                        {item.desc}
                      </p>

                    </div>


                    {/* Category */}

                    <span
                      className="
                        hidden
                        md:block
                        text-xs
                        font-semibold
                        text-violet-500
                      "
                    >
                      {item.category}
                    </span>


                    {/* Explore */}

                    <button
                      onClick={() =>
                        alert(
                          `${item.title} resource will be available soon.`
                        )
                      }
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        w-full
                        sm:w-auto
                        px-5
                        py-2.5
                        rounded-xl
                        bg-violet-600
                        hover:bg-violet-700
                        text-white
                        text-sm
                        font-semibold
                        transition
                      "
                    >

                      <Download size={16} />

                      Explore

                    </button>

                  </motion.div>

                );

              }
            )

          )}

        </div>


        {/* =========================================
            COMING SOON
           ========================================= */}

        <div
          className="
            mt-12
            py-8
            border-t
            border-violet-100
            text-center
          "
        >

          <p
            className="
              text-sm
              text-gray-500
            "
          >
            More study materials and project resources
            are being added regularly.
          </p>

        </div>

      </div>

    </section>
  );
}