import { Link, NavLink } from "react-router-dom";

import { motion } from "framer-motion";

import { Menu, X } from "lucide-react";

import { useNavigate } from "react-router-dom";

import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase/firebase";

import { useEffect, useState } from "react";

import toast from "react-hot-toast";


export default function Navbar() {

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [user, setUser] = useState(null);


  // =====================================================
  // AUTH STATE
  // =====================================================

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
      }
    );

    return unsubscribe;

  }, []);


  // =====================================================
  // NAVIGATION + SCROLL TOP
  // =====================================================

  const handleNavigation = (path) => {

    setOpen(false);

    // Immediately go to top
    window.scrollTo(0, 0);

    // Navigate to page
    navigate(path);

  };


  // =====================================================
  // NAV LINKS
  // =====================================================

  const links = [

    {
      name: "Home",
      path: "/",
    },

    {
      name: "Projects",
      path: "/projects",
    },

    {
      name: "How It Works",
      path: "/how-it-works",
    },

    {
      name: "Contact",
      path: "/contact",
    },

    {
      name: "Pricing",
      path: "/pricing",
    },

    {
      name: "Resources",
      path: "/res",
    },

  ];


  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = async () => {

    try {

      await signOut(auth);

      toast.success(
        "Logged Out Successfully"
      );

      navigate("/", {
        replace: true,
      });

      window.scrollTo(0, 0);

    } catch (error) {

      console.log(error);

      toast.error(
        "Logout Failed"
      );

    }

  };


  return (

    <header
      className="
        fixed
        top-0
        left-0
        z-50
        w-full
        border-b
        border-gray-200
        bg-white/90
        backdrop-blur-xl
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
          px-6
        "
      >

        <div
          className="
            flex
            h-20
            items-center
            justify-between
          "
        >


          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            onClick={() =>
              handleNavigation("/")
            }
          >

            <motion.h1
              whileHover={{
                scale: 1.05,
              }}
              className="
                text-3xl
                font-black
                text-violet-600
              "
            >
              ProjectHub
            </motion.h1>

          </Link>


          {/* =================================================
              DESKTOP MENU
          ================================================= */}

          <nav
            className="
              hidden
              items-center
              gap-8
              lg:flex
            "
          >

            {links.map((item) => (

              <NavLink
                key={item.name}
                to={item.path}
                onClick={() =>
                  handleNavigation(
                    item.path
                  )
                }
                className={({ isActive }) =>
                  `relative font-medium transition-all duration-300 ${
                    isActive
                      ? "text-violet-600"
                      : "text-gray-700 hover:text-violet-600"
                  }`
                }
              >

                {({ isActive }) => (

                  <>

                    {item.name}

                    {isActive && (

                      <motion.div
                        layoutId="activeNav"
                        className="
                          absolute
                          -bottom-2
                          left-0
                          h-[3px]
                          w-full
                          rounded-full
                          bg-violet-600
                        "
                      />

                    )}

                  </>

                )}

              </NavLink>

            ))}

          </nav>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div
            className="
              hidden
              items-center
              gap-3
              lg:flex
            "
          >

            {user ? (

              <>

                {/* Profile */}

                <Link
                  to="/profile"
                  onClick={() =>
                    handleNavigation(
                      "/profile"
                    )
                  }
                >

                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                      user.email || "User"
                    )}`}
                    alt="Profile"
                    className="
                      h-10
                      w-10
                      rounded-full
                    "
                  />

                </Link>


                {/* Logout */}

                <button
                  onClick={handleLogout}
                  className="
                    rounded-xl
                    bg-red-500
                    px-5
                    py-2
                    text-white
                    transition
                    hover:bg-red-600
                  "
                >
                  Logout
                </button>

              </>

            ) : (

              <>

                {/* Login */}

                <Link
                  to="/login"
                  onClick={() =>
                    handleNavigation(
                      "/login"
                    )
                  }
                >

                  <button
                    className="
                      rounded-xl
                      px-5
                      py-2.5
                      text-gray-700
                      transition
                      hover:bg-gray-100
                    "
                  >
                    Login
                  </button>

                </Link>


                {/* Signup */}

                <Link
                  to="/signup"
                  onClick={() =>
                    handleNavigation(
                      "/signup"
                    )
                  }
                >

                  <button
                    className="
                      rounded-xl
                      bg-violet-600
                      px-6
                      py-3
                      text-white
                      transition
                      hover:bg-violet-700
                    "
                  >
                    Sign Up
                  </button>

                </Link>

              </>

            )}

          </div>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            onClick={() =>
              setOpen(!open)
            }
            className="
              text-gray-800
              lg:hidden
            "
            aria-label="Toggle menu"
          >

            {open ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}

          </button>

        </div>


        {/* =================================================
            MOBILE MENU
        ================================================= */}

        {open && (

          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              pb-6
              lg:hidden
            "
          >

            <div
              className="
                flex
                flex-col
                gap-4
              "
            >

              {/* Navigation Links */}

              {links.map((item) => (

                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() =>
                    handleNavigation(
                      item.path
                    )
                  }
                  className={({ isActive }) =>
                    `font-medium transition ${
                      isActive
                        ? "text-violet-600"
                        : "text-gray-700 hover:text-violet-600"
                    }`
                  }
                >
                  {item.name}
                </NavLink>

              ))}


              {/* =================================================
                  LOGGED IN MOBILE
              ================================================= */}

              {user ? (

                <>

                  <Link
                    to="/profile"
                    onClick={() =>
                      handleNavigation(
                        "/profile"
                      )
                    }
                    className="
                      font-medium
                      text-gray-700
                    "
                  >
                    Profile
                  </Link>


                  <button
                    onClick={handleLogout}
                    className="
                      w-full
                      rounded-xl
                      bg-red-500
                      py-3
                      text-white
                      transition
                      hover:bg-red-600
                    "
                  >
                    Logout
                  </button>

                </>

              ) : (

                /* =================================================
                    LOGGED OUT MOBILE
                ================================================= */

                <>

                  <Link
                    to="/login"
                    onClick={() =>
                      handleNavigation(
                        "/login"
                      )
                    }
                  >

                    <button
                      className="
                        w-full
                        rounded-xl
                        border
                        border-gray-200
                        py-3
                        text-gray-700
                        transition
                        hover:bg-gray-50
                      "
                    >
                      Login
                    </button>

                  </Link>


                  <Link
                    to="/signup"
                    onClick={() =>
                      handleNavigation(
                        "/signup"
                      )
                    }
                  >

                    <button
                      className="
                        w-full
                        rounded-xl
                        bg-violet-600
                        py-3
                        text-white
                        transition
                        hover:bg-violet-700
                      "
                    >
                      Sign Up
                    </button>

                  </Link>

                </>

              )}

            </div>

          </motion.div>

        )}

      </div>

    </header>

  );
}