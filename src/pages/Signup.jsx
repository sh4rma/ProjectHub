import { useState } from "react";

import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  doc,
  setDoc,
} from "firebase/firestore";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  User,
  Phone,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import toast from "react-hot-toast";

import {
  auth,
  db,
} from "../firebase/firebase.js";


export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);


  // =====================================================
  // SIGNUP FUNCTION
  // =====================================================

  const handleSignup = async (e) => {
    e.preventDefault();

    if (loading) return;


    // =================================================
    // VALIDATION
    // =================================================

    if (!name.trim()) {
      toast.error("Enter your name");
      return;
    }


    if (!/^[6-9]\d{9}$/.test(phone)) {
      toast.error("Enter valid 10 digit phone number");
      return;
    }


    if (!email.trim()) {
      toast.error("Enter your email");
      return;
    }


    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }


    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }


    setLoading(true);


    try {

      // =================================================
      // CREATE FIREBASE USER
      // =================================================

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email.trim(),
          password
        );


      // =================================================
      // SAVE USER DATA
      // =================================================

      await setDoc(
        doc(
          db,
          "users",
          userCredential.user.uid
        ),
        {
          name: name.trim(),
          phone: phone,
          email: email.trim().toLowerCase(),
          createdAt: new Date().toISOString(),
        }
      );


      toast.success("Account Created 🎉");


      navigate("/", {
        replace: true,
      });


    } catch (error) {

      console.error(error);


      if (
        error.code ===
        "auth/email-already-in-use"
      ) {
        toast.error(
          "Email is already registered"
        );

      } else if (
        error.code ===
        "auth/invalid-email"
      ) {
        toast.error(
          "Invalid email address"
        );

      } else if (
        error.code ===
        "auth/weak-password"
      ) {
        toast.error(
          "Password is too weak"
        );

      } else {

        toast.error(
          "Unable to create account"
        );
      }


    } finally {

      setLoading(false);

    }
  };


  return (

    <main
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-white
      "
    >

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

          {/* Glow */}

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
              top-[20%]
              h-20
              w-20
              rounded-full
              border
              border-white/20
            "
          />


          <div
            className="
              absolute
              bottom-[22%]
              left-[15%]
              h-10
              w-10
              rounded-full
              bg-white/10
              backdrop-blur-xl
            "
          />


          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-10 max-w-xl">


            {/* ProjectHub */}

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-white/15
                  backdrop-blur-xl
                "
              >
                <Sparkles size={20} />
              </div>

              <span
                className="
                  text-lg
                  font-black
                  tracking-tight
                "
              >
                ProjectHub
              </span>

            </div>


            {/* Small Heading */}

            <p
              className="
                mt-10
                text-sm
                font-bold
                uppercase
                tracking-[0.25em]
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
                leading-[0.92]
                xl:text-7xl
              "
            >
              Create.
              <br />

              Build.
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
              Join ProjectHub and discover
              projects, resources, source code
              and modern technology built for
              students.
            </p>


            {/* =================================================
                FEATURES
            ================================================= */}

            <div className="mt-10 space-y-5">


              {/* Feature 1 */}

              <div className="flex items-center gap-3">

                <CheckCircle2 size={20} />

                <span className="text-sm font-medium">
                  Build and share your projects
                </span>

              </div>


              {/* Feature 2 */}

              <div className="flex items-center gap-3">

                <ShieldCheck size={20} />

                <span className="text-sm font-medium">
                  Secure student account
                </span>

              </div>


              {/* Feature 3 */}

              <div className="flex items-center gap-3">

                <Sparkles size={20} />

                <span className="text-sm font-medium">
                  Learn with modern technology
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
            py-12
            sm:px-8
            lg:w-1/2
            lg:py-16
          "
        >

          {/* Background Glow */}

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
                Mobile Logo Removed
            ================================================= */}

            <div className="mb-8">

              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-wider
                  text-violet-600
                "
              >
                Get Started
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
                Create your
                <br />
                account.
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
                Start your project journey
                with ProjectHub.
              </p>

            </div>


            {/* =================================================
                SIGNUP FORM
            ================================================= */}

            <form
              onSubmit={handleSignup}
              className="space-y-5"
            >


              {/* =================================================
                  NAME
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
                  Full Name
                </label>


                <div className="relative">

                  <User
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
                    type="text"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    autoComplete="name"
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
                  PHONE
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
                  Phone Number
                </label>


                <div className="relative">

                  <Phone
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
                    type="tel"
                    inputMode="numeric"
                    placeholder="10 digit phone number"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => {

                      const value =
                        e.target.value.replace(
                          /\D/g,
                          ""
                        );

                      setPhone(value);

                    }}
                    autoComplete="tel"
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
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    autoComplete="new-password"
                    className="
                      h-14
                      w-full
                      border-0
                      border-b-2
                      border-gray-200
                      bg-transparent
                      pl-8
                      pr-10
                      text-gray-900
                      outline-none
                      transition
                      placeholder:text-gray-400
                      focus:border-violet-600
                    "
                  />


                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="
                      absolute
                      right-0
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                      transition
                      hover:text-violet-600
                    "
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >

                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}

                  </button>

                </div>

              </div>


              {/* =================================================
                  CONFIRM PASSWORD
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
                  Confirm Password
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
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(
                        e.target.value
                      )
                    }
                    autoComplete="new-password"
                    className="
                      h-14
                      w-full
                      border-0
                      border-b-2
                      border-gray-200
                      bg-transparent
                      pl-8
                      pr-10
                      text-gray-900
                      outline-none
                      transition
                      placeholder:text-gray-400
                      focus:border-violet-600
                    "
                  />


                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    className="
                      absolute
                      right-0
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                      transition
                      hover:text-violet-600
                    "
                    aria-label={
                      showConfirmPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >

                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}

                  </button>

                </div>

              </div>


              {/* =================================================
                  SECURITY INFO
              ================================================= */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-[11px]
                  text-gray-400
                "
              >

                <ShieldCheck
                  size={14}
                  className="text-violet-500"
                />

                <span>
                  Your account information is
                  securely stored.
                </span>

              </div>


              {/* =================================================
                  CREATE ACCOUNT BUTTON
              ================================================= */}

              <button
                type="submit"
                disabled={loading}
                className="
                  group
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

                    Creating Account...
                  </>

                ) : (

                  <>
                    Create Account

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
                LOGIN LINK
            ================================================= */}

            <p
              className="
                mt-7
                text-center
                text-sm
                text-gray-500
              "
            >
              Already have an account?{" "}

              <Link
                to="/login"
                className="
                  font-bold
                  text-violet-600
                  transition
                  hover:text-violet-700
                "
              >
                Login
              </Link>

            </p>


            {/* =================================================
                BOTTOM SECURITY
            ================================================= */}

            <div
              className="
                mt-8
                flex
                items-center
                justify-center
                gap-2
                border-t
                border-gray-200
                pt-6
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
                Secure account creation
              </span>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}