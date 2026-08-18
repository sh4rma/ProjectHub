import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AdminLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogin = async (e) => {

    e.preventDefault();

    if (
      email !== "shritik406@gmail.com"
    ) {
      toast.error("Unauthorized Admin");
      return;
    }

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      toast.success("Admin Login Successful");

      navigate("/admin");

    } catch (error) {

      toast.error("Invalid Admin Credentials");

    }

  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F8F9FF]">

      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-black text-center text-violet-600">
          Admin Login
        </h1>

        <form
          onSubmit={handleAdminLogin}
          className="mt-8 space-y-4"
        >

          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border p-4 rounded-xl"
          />

          <button
            type="submit"
            className="
            w-full
            py-4
            rounded-xl
            bg-red-500
            text-white
            font-semibold
            "
          >
            Login Admin
          </button>

        </form>

      </div>

    </section>
  );
}