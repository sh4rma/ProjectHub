import { useState } from "react";

import {
  db,
  auth,
} from "../firebase/firebase";

import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import toast from "react-hot-toast";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });


  // =====================================================
  // HANDLE CHANGE
  // =====================================================

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  // =====================================================
  // HANDLE SUBMIT
  // =====================================================

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!auth.currentUser) {
      toast.error("Please login first!");
      return;
    }

    try {

      await addDoc(
        collection(db, "contacts"),
        {
          uid: auth.currentUser.uid,
          ...form,
          createdAt: serverTimestamp(),
        }
      );

      toast.success(
        "Message Sent Successfully!"
      );

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

    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-gradient-to-br
        from-[#F8F5FF]
        via-white
        to-[#EEF4FF]
        text-gray-900
        pt-28
        sm:pt-32
        pb-16
        sm:pb-24
      "
    >

      {/* =================================================
          TECHNOLOGY GRID
         ================================================= */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(124,58,237,0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(59,130,246,0.045) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "45px 45px",
        }}
      />


      {/* =================================================
          PURPLE GLOW
         ================================================= */}

      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-32
          -left-32
          w-80
          h-80
          rounded-full
          bg-violet-300/25
          blur-[110px]
          pointer-events-none
        "
      />


      {/* =================================================
          BLUE GLOW
         ================================================= */}

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-32
          -right-32
          w-80
          h-80
          rounded-full
          bg-blue-300/20
          blur-[110px]
          pointer-events-none
        "
      />


      {/* =================================================
          CONTENT
         ================================================= */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
        "
      >

        {/* =================================================
            HERO
           ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            text-center
            max-w-3xl
            mx-auto
            mb-12
            sm:mb-16
          "
        >

          {/* Badge */}

          <span
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-white
              border
              border-violet-100
              text-violet-600
              text-xs
              sm:text-sm
              font-semibold
              shadow-sm
            "
          >

            <Sparkles size={15} />

            Let's Work Together

          </span>


          {/* Heading */}

          <h1
            className="
              mt-5
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-black
              tracking-tight
              text-gray-900
            "
          >

            Contact
            <span className="text-violet-600">
              {" "}ProjectHub
            </span>

          </h1>


          {/* Description */}

          <p
            className="
              mt-5
              text-sm
              sm:text-base
              text-gray-500
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Have a project idea? Let's discuss and build
            something amazing together.
          </p>

        </motion.div>


        {/* =================================================
            CONTACT CARDS
           ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
            sm:gap-5
            mb-10
            sm:mb-14
          "
        >

          {/* Location */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            whileHover={{
              y: -5,
            }}
            className="
              bg-white
              rounded-2xl
              sm:rounded-3xl
              p-6
              sm:p-7
              border
              border-violet-100
              shadow-sm
              hover:shadow-lg
              transition-all
            "
          >

            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-violet-50
                flex
                items-center
                justify-center
              "
            >

              <MapPin
                className="text-violet-600"
                size={23}
              />

            </div>

            <h3
              className="
                mt-5
                text-lg
                sm:text-xl
                font-bold
              "
            >
              Location
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-gray-500
              "
            >
              India
            </p>

          </motion.div>


          {/* Email */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            whileHover={{
              y: -5,
            }}
            className="
              bg-white
              rounded-2xl
              sm:rounded-3xl
              p-6
              sm:p-7
              border
              border-violet-100
              shadow-sm
              hover:shadow-lg
              transition-all
            "
          >

            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-violet-50
                flex
                items-center
                justify-center
              "
            >

              <Mail
                className="text-violet-600"
                size={23}
              />

            </div>

            <h3
              className="
                mt-5
                text-lg
                sm:text-xl
                font-bold
              "
            >
              Email
            </h3>

            <p
              className="
                mt-2
                text-xs
                sm:text-sm
                text-gray-500
                break-all
              "
            >
              hritiksharmaquantum@gmail.com
            </p>

          </motion.div>


          {/* Phone */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            whileHover={{
              y: -5,
            }}
            className="
              bg-white
              rounded-2xl
              sm:rounded-3xl
              p-6
              sm:p-7
              border
              border-violet-100
              shadow-sm
              hover:shadow-lg
              transition-all
            "
          >

            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-violet-50
                flex
                items-center
                justify-center
              "
            >

              <Phone
                className="text-violet-600"
                size={23}
              />

            </div>

            <h3
              className="
                mt-5
                text-lg
                sm:text-xl
                font-bold
              "
            >
              Phone
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-gray-500
              "
            >
              +91 9528532241
            </p>

          </motion.div>

        </div>


        {/* =================================================
            FORM SECTION
           ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
            lg:gap-12
            bg-white
            rounded-3xl
            border
            border-violet-100
            shadow-[0_20px_60px_rgba(124,58,237,0.08)]
            p-5
            sm:p-8
            md:p-10
            lg:p-12
          "
        >

          {/* =================================================
              LEFT SIDE
             ================================================= */}

          <div
            className="
              flex
              flex-col
              justify-center
            "
          >

            <span
              className="
                text-sm
                font-semibold
                text-violet-600
              "
            >
              Start Your Project
            </span>


            <h2
              className="
                mt-3
                text-3xl
                sm:text-4xl
                font-black
                text-gray-900
              "
            >
              Send Us a Message
            </h2>


            <p
              className="
                mt-4
                text-sm
                sm:text-base
                text-gray-500
                leading-relaxed
                max-w-md
              "
            >
              Tell us about your project, requirements
              and technology. Our team will get back
              to you with the next steps.
            </p>


            {/* Small Info */}

            <div
              className="
                mt-7
                inline-flex
                items-center
                gap-3
                w-fit
                px-4
                py-3
                rounded-xl
                bg-violet-50
                border
                border-violet-100
              "
            >

              <div
                className="
                  w-8
                  h-8
                  rounded-lg
                  bg-white
                  flex
                  items-center
                  justify-center
                "
              >

                <Sparkles
                  size={16}
                  className="text-violet-600"
                />

              </div>

              <span
                className="
                  text-xs
                  sm:text-sm
                  font-medium
                  text-gray-600
                "
              >
                Let's turn your idea into reality.
              </span>

            </div>

          </div>


          {/* =================================================
              FORM
             ================================================= */}

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            {/* Name */}

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="
                w-full
                p-4
                rounded-xl
                bg-gray-50
                border
                border-gray-200
                outline-none
                text-gray-900
                placeholder:text-gray-400
                focus:border-violet-400
                focus:ring-4
                focus:ring-violet-100
                transition
              "
            />


            {/* Phone */}

            <input
              type="tel"
              name="phone"
              placeholder="Enter Mobile Number"
              value={form.phone}
              onChange={handleChange}
              maxLength={10}
              required
              className="
                w-full
                p-4
                rounded-xl
                bg-gray-50
                border
                border-gray-200
                outline-none
                text-gray-900
                placeholder:text-gray-400
                focus:border-violet-400
                focus:ring-4
                focus:ring-violet-100
                transition
              "
            />


            {/* Email */}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="
                w-full
                p-4
                rounded-xl
                bg-gray-50
                border
                border-gray-200
                outline-none
                text-gray-900
                placeholder:text-gray-400
                focus:border-violet-400
                focus:ring-4
                focus:ring-violet-100
                transition
              "
            />


            {/* Project Type */}

            <input
              type="text"
              name="projectType"
              placeholder="Project Type"
              value={form.projectType}
              onChange={handleChange}
              required
              className="
                w-full
                p-4
                rounded-xl
                bg-gray-50
                border
                border-gray-200
                outline-none
                text-gray-900
                placeholder:text-gray-400
                focus:border-violet-400
                focus:ring-4
                focus:ring-violet-100
                transition
              "
            />


            {/* Message */}

            <textarea
              rows={5}
              name="message"
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={handleChange}
              required
              className="
                w-full
                p-4
                rounded-xl
                bg-gray-50
                border
                border-gray-200
                outline-none
                resize-none
                text-gray-900
                placeholder:text-gray-400
                focus:border-violet-400
                focus:ring-4
                focus:ring-violet-100
                transition
              "
            />


            {/* Submit */}

            <button
              type="submit"
              className="
                group
                w-full
                sm:w-auto
                flex
                items-center
                justify-center
                gap-2
                px-7
                py-3.5
                rounded-xl
                bg-violet-600
                hover:bg-violet-700
                text-white
                font-bold
                shadow-lg
                shadow-violet-500/20
                transition-all
                duration-300
              "
            >

              <Send size={18} />

              Send Message

              <ArrowRight
                size={17}
                className="
                  group-hover:translate-x-1
                  transition-transform
                "
              />

            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}