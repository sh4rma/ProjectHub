import { useState } from "react";

import {
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  doc,
  getDoc,
} from "firebase/firestore";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  ArrowRight,
  Lock,
  Mail,
  ShieldCheck,
} from "lucide-react";

import toast from "react-hot-toast";

import {
  auth,
  db,
} from "../firebase/firebase.js";


export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  // =====================================================
  // LOGIN FUNCTION
  // =====================================================

  const handleLogin = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const result = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      // =================================================
      // CHECK ADMIN
      // =================================================

      const adminRef = doc(
        db,
        "admins",
        result.user.email
      );

      const adminSnap = await getDoc(adminRef);

      toast.success("Login Successful 🎉");

      if (adminSnap.exists()) {
        navigate("/admin", {
          replace: true,
        });
      } else {
        navigate("/profile", {
          replace: true,
        });
      }

    } catch (error) {
      console.error(error);

      if (error.code === "auth/invalid-credential") {
        toast.error("Invalid Email or Password");
      } else if (error.code === "auth/user-not-found") {
        toast.error("Account not found");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email address");
      } else if (error.code === "auth/too-many-requests") {
        toast.error("Too many attempts. Try again later.");
      } else {
        toast.error("Unable to login. Please try again.");
      }

    } finally {
      setLoading(false);
    }
  };


  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">

      {/* =================================================
          TOP BAR
      ================================================= */}

      <div className="absolute top-0 left-0 right-0 z-50 px-5 py-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">

          {/* 
            Logo intentionally removed.
            No mobile logo.
            No desktop logo.
          */}

        </div>
      </div>


      {/* =================================================
          MAIN
      ================================================= */}

      <div className="flex min-h-screen">


        {/* =================================================
            LEFT SIDE - DESKTOP ONLY
        ================================================= */}

        <div
          className="
            relative
            hidden
            min-h-screen
            overflow-hidden
            bg-gradient-to-br
            from-violet-600
            via-purple-600
            to-indigo-700
            px-12
            text-white
            lg:flex
            lg:w-1/2
            lg:flex-col
            lg:justify-center
            xl:px-20
          "
        >

          {/* =================================================
              BACKGROUND GLOW
          ================================================= */}

          <div
            className="
              absolute
              -right-40
              -top-40
              h-[500px]
              w-[500px]
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-40
              -left-40
              h-[500px]
              w-[500px]
              rounded-full
              bg-indigo-300/20
              blur-3xl
            "
          />

          {/* Decorative Circle */}

          <div
            className="
              absolute
              right-[18%]
              top-[18%]
              h-24
              w-24
              rounded-full
              border
              border-white/10
            "
          />

          <div
            className="
              absolute
              bottom-[20%]
              left-[15%]
              h-12
              w-12
              rounded-full
              bg-white/10
              backdrop-blur-xl
            "
          />


          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-10 max-w-xl">

            {/* Small Heading */}

            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.2em]
                text-violet-200
              "
            >
              Student Project Platform
            </p>


            {/* Main Heading */}

            <h1
              className="
                mt-6
                text-5xl
                font-black
                leading-[0.95]
                xl:text-7xl
              "
            >
              Build.
              <br />

              Learn.
              <br />

              <span className="text-violet-200">
                Grow.
              </span>
            </h1>


            {/* Description */}

            <p
              className="
                mt-7
                max-w-lg
                text-lg
                leading-relaxed
                text-violet-100
              "
            >
              Your complete platform for student
              projects, resources, source code and
              modern technology.
            </p>


            {/* =================================================
                FEATURES
            ================================================= */}

            <div className="mt-10 space-y-5">

              {/* Feature 1 */}

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-white/10
                    backdrop-blur-md
                  "
                >
                  <ShieldCheck size={19} />
                </div>

                <span className="text-sm font-medium">
                  Secure student account
                </span>

              </div>


              {/* Feature 2 */}

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-white/10
                    backdrop-blur-md
                  "
                >
                  <Lock size={19} />
                </div>

                <span className="text-sm font-medium">
                  Protected project access
                </span>

              </div>


              {/* Feature 3 */}

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-white/10
                    backdrop-blur-md
                  "
                >
                  <ArrowRight size={19} />
                </div>

                <span className="text-sm font-medium">
                  Complete project support
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <div
          className="
            relative
            flex
            min-h-screen
            w-full
            items-center
            justify-center
            overflow-hidden
            bg-gradient-to-br
            from-[#F8F5FF]
            via-white
            to-[#F3EEFF]
            px-5
            py-16
            sm:px-8
            lg:w-1/2
            lg:py-24
          "
        >

          {/* =================================================
              BACKGROUND GLOW
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-72
              w-72
              rounded-full
              bg-violet-300/20
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              -left-32
              h-72
              w-72
              rounded-full
              bg-purple-300/15
              blur-3xl
            "
          />


          {/* =================================================
              FORM AREA
          ================================================= */}

          <div
            className="
              relative
              z-10
              w-full
              max-w-md
            "
          >

            {/* =================================================
                HEADING
            ================================================= */}

            <div className="mb-9">

              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-wider
                  text-violet-600
                "
              >
                Welcome Back
              </p>


              <h2
                className="
                  mt-3
                  text-4xl
                  font-black
                  leading-tight
                  text-gray-900
                  sm:text-5xl
                "
              >
                Login to
                <br />
                your account.
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-6
                  text-gray-500
                  sm:text-base
                "
              >
                Continue your project journey
                with ProjectHub.
              </p>

            </div>


            {/* =================================================
                LOGIN FORM
            ================================================= */}

            <form
              onSubmit={handleLogin}
              className="space-y-6"
            >


              {/* =================================================
                  EMAIL
              ================================================= */}

              <div>

                <label
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-gray-700
                  "
                >
                  Email Address
                </label>


                <div className="relative">

                  <Mail
                    size={18}
                    className="
                      absolute
                      left-0
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />


                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    required
                    autoComplete="email"
                    className="
                      h-14
                      w-full
                      border-0
                      border-b-2
                      border-gray-200
                      bg-transparent
                      pl-8
                      pr-2
                      text-gray-900
                      outline-none
                      transition
                      placeholder:text-gray-400
                      focus:border-violet-600
                    "
                  />

                </div>

              </div>


              {/* =================================================
                  PASSWORD
              ================================================= */}

              <div>

                <label
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-gray-700
                  "
                >
                  Password
                </label>


                <div className="relative">

                  <Lock
                    size={18}
                    className="
                      absolute
                      left-0
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />


                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    required
                    autoComplete="current-password"
                    className="
                      h-14
                      w-full
                      border-0
                      border-b-2
                      border-gray-200
                      bg-transparent
                      pl-8
                      pr-2
                      text-gray-900
                      outline-none
                      transition
                      placeholder:text-gray-400
                      focus:border-violet-600
                    "
                  />

                </div>

              </div>


              {/* =================================================
                  LOGIN BUTTON
              ================================================= */}

              <button
                type="submit"
                disabled={loading}
                className="
                  group
                  mt-3
                  flex
                  h-14
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-violet-600
                  font-bold
                  text-white
                  shadow-lg
                  shadow-violet-600/20
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-violet-700
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >

                {loading ? (
                  <>
                    <span
                      className="
                        h-5
                        w-5
                        animate-spin
                        rounded-full
                        border-2
                        border-white/30
                        border-t-white
                      "
                    />

                    Signing in...
                  </>
                ) : (
                  <>
                    Login

                    <ArrowRight
                      size={18}
                      className="
                        transition
                        group-hover:translate-x-1
                      "
                    />
                  </>
                )}

              </button>

            </form>


            {/* =================================================
                SIGNUP
            ================================================= */}

            <p
              className="
                mt-7
                text-center
                text-sm
                text-gray-500
              "
            >
              Don't have an account?{" "}

              <Link
                to="/signup"
                className="
                  font-bold
                  text-violet-600
                  transition
                  hover:text-violet-700
                "
              >
                Sign Up
              </Link>

            </p>


            {/* =================================================
                ADMIN LOGIN
            ================================================= */}

            <div
              className="
                mt-8
                border-t
                border-gray-200
                pt-6
              "
            >

              <button
                type="button"
                onClick={() =>
                  navigate("/admin-login")
                }
                className="
                  h-12
                  w-full
                  rounded-xl
                  border
                  border-violet-200
                  bg-white
                  font-semibold
                  text-violet-600
                  transition
                  hover:bg-violet-50
                "
              >
                Login as Admin
              </button>

            </div>


            {/* =================================================
                SECURITY TEXT
            ================================================= */}

            <div
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-2
              "
            >

              <ShieldCheck
                size={15}
                className="text-violet-500"
              />

              <span
                className="
                  text-[11px]
                  font-medium
                  text-gray-400
                "
              >
                Secure account access
              </span>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}