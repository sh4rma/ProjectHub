import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function ProjectRequest() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    project: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsapp = () => {
  if (form.phone.length !== 10) {
    alert("Please enter valid 10 digit number");
    return;
  }

  const message = `
New Project Request

Name: ${form.name}

Phone: ${form.phone}

Project: ${form.project}


Budget: ${form.budget}

Description:
${form.description}
`;

  window.open(
    `https://wa.me/919528532241?text=${encodeURIComponent(message)}`,
    "_blank"
  );

  navigate("/thank-you");
};

  return (
    <section className="min-h-screen bg-[#F8F9FF] px-4 py-10">

      <div className="max-w-2xl mx-auto">

        {/* Back Button */}

        <button
          onClick={() => navigate(-1)}
          className="
          flex
          items-center
          gap-2
          mb-6
          text-gray-600
          hover:text-violet-600
          transition
          "
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
          bg-white
          rounded-[30px]
          p-6
          md:p-10
          shadow-xl
          "
        >

         

        

          <h1
            className="
            text-center
            text-3xl
            md:text-4xl
            font-black
            mt-5
            "
          >
            Request Your Project
          </h1>

          <p
            className="
            text-center
            text-gray-500
            mt-2
            "
          >
            Fill the form and get a quote on WhatsApp
          </p>

          {/* Form */}

          <div className="mt-8 space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              className="
              w-full
              border
              rounded-xl
              p-4
              outline-none
              focus:border-violet-500
              "
            />

            <input
  type="tel"
  name="phone"
  placeholder="WhatsApp Number"
  value={form.phone}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "");

    if (value.length <= 10) {
      setForm({
        ...form,
        phone: value,
      });
    }
  }}
  className="
  w-full
  border
  rounded-xl
  p-4
  outline-none
  focus:border-violet-500
  "
/>

            <select
  name="project"
  value={form.project}
  onChange={handleChange}
  className="
  w-full
  border
  rounded-xl
  p-4
  outline-none
  focus:border-violet-500
  "
>
  <option value="">
    Select Project Type
  </option>

  <option value="Web Development">
    Web Development
  </option>

  <option value="Mobile App">
    Mobile App
  </option>

  <option value="AI / ML Project">
    AI / ML Project
  </option>

  <option value="College Project">
    College Project
  </option>

  <option value="Python Project">
    Python Project
  </option>

  <option value="Java Project">
    Java Project
  </option>

  <option value="MERN Stack Project">
    MERN Stack Project
  </option>

  <option value="E-Commerce Website">
    E-Commerce Website
  </option>

  <option value="Restaurant QR System">
    Restaurant QR System
  </option>

  <option value="Portfolio Website">
    Portfolio Website
  </option>

  <option value="Custom Project">
    Custom Project
  </option>
</select>

<select
  name="budget"
  value={form.budget}
  onChange={handleChange}
  className="
  w-full
  border
  rounded-xl
  p-4
  outline-none
  focus:border-violet-500
  "
>
  <option value="">
    Select Budget
  </option>

  <option value="Below ₹1000">
    Below ₹1000
  </option>

  <option value="₹1000 - ₹3000">
    ₹1000 - ₹3000
  </option>

  <option value="₹3000 - ₹5000">
    ₹3000 - ₹5000
  </option>

  <option value="₹5000 - ₹10000">
    ₹5000 - ₹10000
  </option>

  <option value="Above ₹10000">
    Above ₹10000
  </option>
</select>

            <textarea
              rows="5"
              name="description"
              placeholder="Describe your project..."
              onChange={handleChange}
              className="
              w-full
              border
              rounded-xl
              p-4
              outline-none
              resize-none
              focus:border-violet-500
              "
            />

            <button
              onClick={sendWhatsapp}
              className="
              w-full
              py-4
              rounded-xl
              bg-violet-600
              text-white
              font-bold
              hover:bg-violet-700
              transition
              "
            >
              Send on 
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}