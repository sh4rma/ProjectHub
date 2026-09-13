import { motion } from "framer-motion";

import {
  CheckCircle,
  Star,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import { auth } from "../firebase/firebase";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    title: "Starter",
    price: 150,
    popular: false,
    features: [
      "PPT Project",
      "Documentation",
      "1 Revision",
      "2 Days Delivery",
    ],
  },

  {
    title: "Standard",
    price: 599,
    popular: true,
    features: [
      "Mini Project",
      "Source Code",
      "Project Report",
      "WhatsApp Support",
      "2 Revisions",
    ],
  },

  {
    title: "Premium",
    price: 999,
    popular: false,
    features: [
      "Final Year Project",
      "Documentation",
      "PPT Included",
      "Priority Support",
      "Deployment Help",
    ],
  },
];

export default function Pricing() {
  const navigate = useNavigate();

  // =====================================================
  // BUY PLAN
  // =====================================================

  const handleBuy = (plan, price) => {
    if (!auth.currentUser) {
      toast.error("Please Login First");
      navigate("/login");
      return;
    }

    navigate("/payment", {
      state: {
        plan,
        price,
      },
    });
  };

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#F8F5FF]
        pt-28
        sm:pt-32
        pb-16
        sm:pb-24
        px-4
      "
    >

      {/* =================================================
          GRID BACKGROUND
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
          x: [0, 30, 0],
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
          w-72
          h-72
          sm:w-96
          sm:h-96
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
          sm:w-96
          sm:h-96
          rounded-full
          bg-blue-300/20
          blur-[120px]
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
        "
      >

        {/* =================================================
            HEADER
           ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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

            Student Friendly Pricing

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
            Choose Your
            <span className="text-violet-600">
              {" "}Project Plan
            </span>
          </h1>


          {/* Description */}

          <p
            className="
              mt-4
              text-sm
              sm:text-base
              text-gray-500
              leading-relaxed
              max-w-2xl
              mx-auto
            "
          >
            Student-friendly plans with source code,
            PPT, report and complete project support.
          </p>

        </motion.div>


        {/* =================================================
            PRICING CARDS
           ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-5
            lg:gap-6
            mt-12
            sm:mt-16
            items-stretch
          "
        >

          {plans.map((plan, index) => (

            <motion.div
              key={plan.title}

              initial={{
                opacity: 0,
                y: 40,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}

              whileHover={{
                y: -8,
              }}

              className={`
                relative
                flex
                flex-col
                bg-white
                rounded-3xl
                p-6
                sm:p-7
                lg:p-8
                border
                ${
                  plan.popular
                    ? "border-violet-400 shadow-[0_20px_60px_rgba(124,58,237,0.16)]"
                    : "border-gray-100 shadow-sm"
                }
                transition-all
                duration-300
              `}
            >

              {/* =================================================
                  POPULAR BADGE
                 ================================================= */}

              {plan.popular && (

                <div
                  className="
                    absolute
                    top-4
                    right-4
                    sm:top-5
                    sm:right-5
                    inline-flex
                    items-center
                    gap-1.5
                    px-3
                    py-1.5
                    rounded-full
                    bg-violet-600
                    text-white
                    text-[11px]
                    sm:text-xs
                    font-semibold
                    shadow-md
                  "
                >

                  <Star size={13} fill="currentColor" />

                  Most Popular

                </div>

              )}


              {/* =================================================
                  PLAN ICON
                 ================================================= */}

              <div
                className={`
                  w-12
                  h-12
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  ${
                    plan.popular
                      ? "bg-violet-100"
                      : "bg-blue-50"
                  }
                `}
              >

                <Sparkles
                  size={22}
                  className={
                    plan.popular
                      ? "text-violet-600"
                      : "text-blue-600"
                  }
                />

              </div>


              {/* Plan Name */}

              <h2
                className="
                  mt-5
                  text-2xl
                  sm:text-3xl
                  font-black
                  text-slate-900
                "
              >
                {plan.title}
              </h2>


              {/* Price */}

              <div className="mt-4">

                <span
                  className="
                    text-4xl
                    sm:text-5xl
                    font-black
                    text-violet-600
                  "
                >
                  ₹{plan.price}
                </span>

                <span
                  className="
                    ml-2
                    text-sm
                    text-gray-400
                  "
                >
                  / project
                </span>

              </div>


              {/* Divider */}

              <div
                className="
                  h-px
                  bg-gray-100
                  my-6
                "
              />


              {/* Features */}

              <div className="space-y-4 flex-1">

                {plan.features.map((feature, i) => (

                  <div
                    key={i}
                    className="
                      flex
                      items-center
                      gap-3
                      text-sm
                      text-gray-600
                    "
                  >

                    <CheckCircle
                      size={18}
                      className="text-emerald-500 shrink-0"
                    />

                    <span>
                      {feature}
                    </span>

                  </div>

                ))}

              </div>


              {/* Buy Button */}

              <button
                onClick={() =>
                  handleBuy(
                    plan.title,
                    plan.price
                  )
                }
                className={`
                  group
                  w-full
                  mt-8
                  py-3.5
                  rounded-xl
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  transition-all
                  duration-300
                  ${
                    plan.popular
                      ? "bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-500/20"
                      : "bg-violet-50 hover:bg-violet-600 text-violet-700 hover:text-white"
                  }
                `}
              >

                Buy Now

                <ArrowRight
                  size={17}
                  className="
                    group-hover:translate-x-1
                    transition-transform
                  "
                />

              </button>

            </motion.div>

          ))}

        </div>


        {/* =================================================
            TRUST STRIP
           ================================================= */}

        <div
          className="
            mt-8
            flex
            flex-wrap
            justify-center
            gap-x-6
            gap-y-2
            text-xs
            sm:text-sm
            text-gray-500
          "
        >

          <span className="flex items-center gap-1.5">
            <ShieldCheck
              size={15}
              className="text-emerald-500"
            />
            Student Friendly
          </span>

          <span className="flex items-center gap-1.5">
            <CheckCircle
              size={15}
              className="text-blue-500"
            />
            Project Support
          </span>

          <span className="flex items-center gap-1.5">
            <CheckCircle
              size={15}
              className="text-violet-500"
            />
            Multiple Revisions
          </span>

        </div>


        {/* =================================================
            DISCOUNT SECTION
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
            relative
            mt-16
            sm:mt-20
            bg-white
            rounded-3xl
            border
            border-violet-100
            shadow-[0_15px_50px_rgba(124,58,237,0.08)]
            p-7
            sm:p-10
            text-center
            overflow-hidden
          "
        >

          {/* Discount glow */}

          <div
            className="
              absolute
              -top-20
              left-1/2
              -translate-x-1/2
              w-64
              h-32
              rounded-full
              bg-violet-200/40
              blur-3xl
            "
          />


          <div className="relative z-10">

            <span
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-full
                bg-green-50
                text-green-600
                text-xs
                font-semibold
              "
            >

              🎓 Student Offer

            </span>


            <h2
              className="
                mt-4
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-black
                text-slate-900
              "
            >
              Need a Student Discount?
            </h2>


            <p
              className="
                mt-3
                text-sm
                sm:text-base
                text-gray-500
                max-w-2xl
                mx-auto
                leading-relaxed
              "
            >
              Discuss your project before ordering and
              get up to ₹200 OFF on selected plans.
            </p>


            <a
              href={`https://wa.me/919528532241?text=${encodeURIComponent(
                "Hello! Main student hoon. Mujhe ₹200 OFF discount aur project ke baare mein baat karni hai."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                mt-7
                px-7
                sm:px-10
                py-3.5
                rounded-xl
                bg-green-500
                hover:bg-green-600
                text-white
                font-semibold
                text-sm
                sm:text-base
                shadow-lg
                shadow-green-500/20
                transition-all
              "
            >
              Discuss ₹200 OFF

              <ArrowRight size={17} />

            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}