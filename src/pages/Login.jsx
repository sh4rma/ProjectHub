import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      const adminRef = doc(
        db,
        "admins",
        userCredential.user.email
      );

      const adminSnap = await getDoc(adminRef);

      toast.success("Login Successful 🎉");

      if (adminSnap.exists()) {
        navigate("/admin");
      } else {
        navigate("/profile");
      }

    } catch (error) {
      console.log(error);
      toast.error("Invalid Email or Password");
    }
  };

  return (
    <section className="min-h-screen bg-[#F8F9FF] flex items-center justify-center px-6">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-black text-center text-violet-600">
          Welcome Back
        </h1>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-4"
        >
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full border p-4 rounded-xl"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full border p-4 rounded-xl"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            type="submit"
            className="
            w-full
            bg-violet-600
            text-white
            py-4
            rounded-xl
            font-semibold
            hover:bg-violet-700
            "
          >
            Login
          </button>
        </form>

        <p className="text-center mt-5">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-violet-600 font-semibold"
          >
            Sign Up
          </Link>
<button
  type="button"
  onClick={() => navigate("/admin-login")}
  className="
  w-full
  mt-3
  border
  border-violet-600
  text-violet-600
  py-4
  rounded-xl
  font-semibold
  hover:bg-violet-50
  "
>
  Login as Admin
</button>
        </p>

      </div>
    </section>
  );
}