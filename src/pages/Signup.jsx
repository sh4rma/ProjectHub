import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


export default function Signup() {
  const navigate = useNavigate();

const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

 const handleSignup = async (e) => {
  e.preventDefault();

  if (!name.trim()) {
    toast.error("Enter your name");
    return;
  }

  if (!/^[6-9]\d{9}$/.test(phone)) {
    toast.error("Enter valid phone number");
    return;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  try {
    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

    await setDoc(
      doc(db, "users", userCredential.user.uid),
      {
        name,
        phone,
        email,
        createdAt: new Date().toISOString(),
      }
    );

    toast.success("Account Created 🎉");

    navigate("/");
  } catch (error) {
    toast.error(error.message);
  }
};
//   if (!name.trim()) {
//   toast.error("Enter your name");
//   return;
// }

// if (!/^[6-9]\d{9}$/.test(phone)) {
//   toast.error("Enter valid 10 digit phone number");
//   return;
// }

// if (password !== confirmPassword) {
//   toast.error("Passwords do not match");
//   return;
// }

  return (
    <section className="min-h-screen pt-28 pb-20 bg-[#F8F9FF] flex justify-center px-6">
  <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-black text-center text-violet-600">
          Create Account
        </h1>

        <form
          onSubmit={handleSignup}
          className="mt-8 space-y-4"
        >
          <input
  type="text"
  placeholder="Full Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full border p-4 rounded-xl"
/>

<input
  type="tel"
  placeholder="Phone Number"
  maxLength={10}
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="w-full border p-4 rounded-xl"
/>

<input
  type="email"
  placeholder="Email Address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full border p-4 rounded-xl"
/>

<input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full border p-4 rounded-xl"
/>

<input
  type="password"
  placeholder="Confirm Password"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
  className="w-full border p-4 rounded-xl"
/>

          <button
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
            Sign Up
          </button>
        </form>

        <p className="text-center mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-violet-600 font-semibold"
          >
            Login
          </Link>
        </p>

      </div>
    </section>
  );
}