import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
const [user, setUser] = useState(null);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return unsubscribe;
}, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Contact", path: "/contact" },
    { name: "Pricing", path: "/pricing" },
    { name: "Resources", path: "/res" },

  ];

const handleLogout = async () => {

  try {

    await signOut(auth);

    toast.success("Logged Out Successfully");

    navigate("/", {
      replace: true,
    });

  } catch (error) {

    console.log(error);

    toast.error("Logout Failed");

  }

};
  return (
    
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          
          <Link to="/">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-black text-violet-600"
            >
              ProjectHub
            </motion.h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
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
                        className="absolute -bottom-2 left-0 w-full h-[3px] bg-violet-600 rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
  {user ? (
    <>
      <Link to="/profile">
        <img
          src={`https://ui-avatars.com/api/?name=${user.email}`}
          alt=""
          className="w-10 h-10 rounded-full"
        />
      </Link>

      <button
        onClick={() => signOut(auth)}
        className="px-5 py-2 rounded-xl bg-red-500 text-white"
      >
        Logout
      </button>
    </>
  ) : (
    <>
      <Link to="/login">
        <button className="px-5 py-2.5 rounded-xl">
          Login
        </button>
      </Link>

      <Link to="/signup">
        <button className="px-6 py-3 rounded-xl bg-violet-600 text-white">
          Sign Up
        </button>
      </Link>
    </>
  )}
</div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
  <motion.div
    initial={{ opacity: 0, y: -15 }}
    animate={{ opacity: 1, y: 0 }}
    className="lg:hidden pb-6"
  >
            <div className="flex flex-col gap-4">

              {links.map((item) => (
  <NavLink
    key={item.name}
    to={item.path}
    onClick={() => setOpen(false)}
    className="text-gray-700 hover:text-violet-600"
  >
    {item.name}
  </NavLink>
))}

             {user ? (
  <>
    <Link
      to="/profile"
      onClick={() => setOpen(false)}
      className="font-medium"
    >
      Profile
    </Link>

    <button
      onClick={() => {
        signOut(auth);
        setOpen(false);
      }}
      className="w-full py-3 rounded-xl bg-red-500 text-white"
    >
      Logout
    </button>
  </>
) : (
  <>
    <Link to="/login" onClick={() => setOpen(false)}>
      <button className="w-full py-3 rounded-xl border">
        Login
      </button>
    </Link>

    <Link to="/signup" onClick={() => setOpen(false)}>
      <button className="w-full py-3 rounded-xl bg-violet-600 text-white">
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