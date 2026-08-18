import { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import { auth } from "../firebase/firebase";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
 
  const [form, setForm] = useState({
  name: "",
  phone: "",
  email: "",
  projectType: "",
  message: "",
});
const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!auth.currentUser) {
    toast.error("Please login first!");
    return;
  }

  try {
    await addDoc(collection(db, "contacts"), {
      uid: auth.currentUser.uid,
      ...form,
      createdAt: serverTimestamp(),
    });

    toast.success("Message Sent Successfully!");

    setForm({
      name: "",
      phone: "",
      email: "",
      projectType: "",
      message: "",
    });

  } catch (err) {
    console.error(err);
    toast.error(err.message);
  }
};

  return (
    <section className="min-h-screen bg-[#0B1020] text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-4xl font-black"
          >
            Contact Us
          </motion.h1>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Have a project idea? Let's discuss and build something amazing
            together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <MapPin className="text-purple-400 mb-4" size={32} />
            <h3 className="text-xl font-bold">Location</h3>
            <p className="text-slate-400 mt-2">
              India
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <Mail className="text-purple-400 mb-4" size={32} />
            <h3 className="text-xl font-bold">Email</h3>
            <p className="text-slate-400 mt-2">
              hritiksharmaquantum@gmail.com
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <Phone className="text-purple-400 mb-4" size={32} />
            <h3 className="text-xl font-bold">Phone</h3>
            <p className="text-slate-400 mt-2">
              +91 9528532241
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="grid lg:grid-cols-2 gap-10 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">

          <div>
            <h2 className="text-4xl font-bold mb-4">
              Send Message
            </h2>

            <p className="text-slate-400">
              Tell us about your project and we'll get back to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
<input
  type="text"
  name="name"
  placeholder="Your Name"
  value={form.name}
  onChange={handleChange}
  className="w-full p-4 rounded-xl bg-[#111827] border border-slate-700 outline-none text-white placeholder:text-slate-400"
/>
<input
  type="tel"
  name="phone"
  placeholder="Enter Mobile Number"
  value={form.phone}
  onChange={handleChange}
  maxLength={10}
  className="w-full p-4 rounded-xl bg-[#111827] border border-slate-700 outline-none text-white placeholder:text-slate-400"
/>
<input
  type="email"
  name="email"
  placeholder="Your Email"
  value={form.email}
  onChange={handleChange}
  className="w-full p-4 rounded-xl bg-[#111827] border border-slate-700 outline-none text-white placeholder:text-slate-400"
/>

<input
  type="text"
  name="projectType"
  placeholder="Project Type"
  value={form.projectType}
  onChange={handleChange}
  className="w-full p-4 rounded-xl bg-[#111827] border border-slate-700 outline-none text-white placeholder:text-slate-400"
/>


<textarea
  rows={5}
  name="message"
  placeholder="Message"
  value={form.message}
  onChange={handleChange}
  className="w-full p-4 rounded-xl bg-[#111827] border border-slate-700 outline-none text-white placeholder:text-slate-400"
/>

            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-4 rounded-xl bg-purple-500 text-black font-bold hover:scale-105 transition"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}