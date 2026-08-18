import {
  BookOpen,
  FileText,
  Code2,
  FolderGit2,
  GraduationCap,
  Brain,
  Download,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";

const resources = [
  {
    icon: <BookOpen size={35} />,
    title: "Notes",
    desc: "Semester-wise BCA & MCA Notes",
  },
  {
    icon: <FileText size={35} />,
    title: "Previous Papers",
    desc: "University Question Papers",
  },
  {
    icon: <Code2 size={35} />,
    title: "Source Code",
    desc: "React, MERN, Java, Python Projects",
  },
  {
    icon: <FolderGit2 size={35} />,
    title: "Mini Projects",
    desc: "Ready-to-use College Projects",
  },
  {
    icon: <GraduationCap size={35} />,
    title: "Interview Prep",
    desc: "HR + Technical Questions",
  },
  {
    icon: <Brain size={35} />,
    title: "Roadmaps",
    desc: "Frontend, Backend & Full Stack",
  },
];

function Resources() {
  return (
    <section className="bg-slate-50 min-h-screen py-24 px-6">

      {/* Heading */}
      <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-4xl font-black"
          >
            Student Resources
          </motion.h1>

        <p className="mt-4 text-gray-600 text-lg">
          Notes • PDFs • Projects • Source Code • Interview Preparation
        </p>

        {/* Search */}
        <div className="mt-10 max-w-xl mx-auto relative">
          <Search className="absolute left-4 top-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search Resources..."
            className="w-full rounded-xl border pl-12 pr-4 py-4 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">

        {resources.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl duration-300 p-8"
          >
            <div className="text-blue-600 mb-5">{item.icon}</div>

            <h2 className="text-2xl font-bold">{item.title}</h2>

            <p className="text-gray-500 mt-3">
              {item.desc}
            </p>

            <button className="mt-6 bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-700">
              <Download size={18} />
              Explore
            </button>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Resources;