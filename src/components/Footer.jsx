
export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-3xl font-black text-violet-400">
              ProjectHub
            </h2>

            <p className="mt-4 text-slate-400">
              Helping students build modern
              software projects.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Home</li>
              <li>Projects</li>
              <li>History</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Services
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Web Development</li>
              <li>AI Projects</li>
              <li>Mobile Apps</li>
              <li>Documentation</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Contact
            </h3>

            <div className="flex gap-4">

              <button className="p-3 rounded-xl bg-slate-800 hover:bg-violet-600 transition">
                {/* <Github size={18} /> */}
              </button>

              <button className="p-3 rounded-xl bg-slate-800 hover:bg-violet-600 transition">
                {/* <Instagram size={18} /> */}
              </button>

              <button className="p-3 rounded-xl bg-slate-800 hover:bg-violet-600 transition">
                {/* <Mail size={18} /> */}
              </button>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
          © 2026 ProjectHub. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}
