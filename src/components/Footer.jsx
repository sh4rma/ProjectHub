export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          {/* ================= BRAND ================= */}

          <div>
            <div className="flex items-center gap-3">

              {/* ProjectHub Icon */}
              <div
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-xl bg-violet-600
                  shadow-lg shadow-violet-600/20
                "
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 3l2.4 5.1L20 10l-5.6 1.9L12 17l-2.4-5.1L4 10l5.6-1.9L12 3z" />
                  <path d="M19 16l1 2.2L22 19l-2 0.8L19 22l-1-2.2-2-.8 2-.8L19 16z" />
                </svg>
              </div>

              <h2 className="text-2xl font-black">
                Project<span className="text-violet-400">Hub</span>
              </h2>

            </div>

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
              Helping students build modern software
              projects and turn ideas into real-world
              digital experiences.
            </p>


            {/* ================= SOCIAL ICONS ================= */}

            <div className="mt-6 flex gap-3">

              {/* GitHub */}

              <a
                href="https://github.com/sh4rma"
                aria-label="GitHub"
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-xl bg-slate-800
                  text-slate-300
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-violet-600
                  hover:text-white
                "
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.68.41.35.78 1.04.78 2.1v3.11c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>


              {/* Instagram */}

              <a
                href="https://www.instagram.com/codewithhritik/"
                aria-label="Instagram"
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-xl bg-slate-800
                  text-slate-300
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-violet-600
                  hover:text-white
                "
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>


              {/* Email */}

              <a
                href="mailto:shritik406@gmail.com"
                aria-label="Email"
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-xl bg-slate-800
                  text-slate-300
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-violet-600
                  hover:text-white
                "
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />

                  <path d="M3 7l9 6 9-6" />
                </svg>
              </a>

            </div>
          </div>


          {/* ================= QUICK LINKS ================= */}

          <div>
            <h3 className="mb-5 font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a
                  href="/"
                  className="text-sm text-slate-400 transition hover:text-violet-400"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/projects"
                  className="text-sm text-slate-400 transition hover:text-violet-400"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="/history"
                  className="text-sm text-slate-400 transition hover:text-violet-400"
                >
                  History
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="text-sm text-slate-400 transition hover:text-violet-400"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>


          {/* ================= SERVICES ================= */}

          <div>
            <h3 className="mb-5 font-bold text-white">
              Services
            </h3>

            <ul className="space-y-3">

              <li className="text-sm text-slate-400">
                Web Development
              </li>

              <li className="text-sm text-slate-400">
                AI Projects
              </li>

              <li className="text-sm text-slate-400">
                Mobile Apps
              </li>

              <li className="text-sm text-slate-400">
                Documentation
              </li>

            </ul>
          </div>


          {/* ================= CONTACT ================= */}

          <div>
            <h3 className="mb-5 font-bold text-white">
              Contact
            </h3>

            <p className="mb-5 text-sm leading-6 text-slate-400">
              Have a project idea? Let's build
              something amazing together.
            </p>

            <a
                href="https://api.whatsapp.com/send/?phone=919528532241"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-violet-600
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-violet-700
                hover:shadow-lg
                hover:shadow-violet-600/20
              "
                aria-label="Whatsapp"
            >

              {/* Mail SVG */}

              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                />

                <path d="M3 7l9 6 9-6" />
              </svg>

              Contact Us

              {/* Arrow SVG */}

              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition group-hover:translate-x-1"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>

            </a>

          </div>

        </div>


        {/* ================= BOTTOM ================= */}

        <div
          className="
            mt-12
            flex
            flex-col
            gap-4
            border-t
            border-slate-800
            pt-8
            text-center
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:text-left
          "
        >

          <p className="text-sm text-slate-500">
            © 2026 ProjectHub. All Rights Reserved.
          </p>

          <p className="text-xs text-slate-600">
            Built with passion & technology.
          </p>

        </div>

      </div>

    </footer>
  );
}