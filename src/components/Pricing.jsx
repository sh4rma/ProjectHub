import { motion } from "framer-motion";
import { CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
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
    <section className="min-h-screen bg-[#F8F9FF] pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-4xl font-black"
          >
            Adorable Pricing For Student
          </motion.h1>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Student-friendly plans with source code,
            PPT, report and complete support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className={`rounded-3xl p-8 bg-white shadow-xl border relative ${
                plan.popular
                  ? "border-violet-500 scale-105"
                  : "border-gray-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-5 right-5 bg-violet-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <Star size={14} />
                  Popular
                </div>
              )}

              <h2 className="text-3xl font-black text-slate-900">
                {plan.title}
              </h2>

              <p className="text-5xl font-black text-violet-600 mt-5">
  ₹{plan.price}
</p>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle
                      size={18}
                      className="text-green-500"
                    />

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

 <button
  onClick={() =>
    handleBuy(
      plan.title,
      plan.price
    )
  }
  className="w-full py-4 rounded-xl bg-violet-600 text-white font-semibold"
>
  Buy Now
</button>

            </motion.div>
          ))}
        </div>

        <div className="mt-24 bg-white rounded-3xl shadow-xl p-10 text-center">

          <h2 className="text-4xl font-black text-slate-900">
            Discount For Students?
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">.
            Discuss your first project before ordering and get up to ₹200 OFF on selected plans.
          </p>

          <a
  href={`https://wa.me/919528532241?text=${encodeURIComponent(
    "Hello! Main student hoon. Mujhe ₹200 OFF discount aur project ke baare mein baat karni hai."
  )}`}
  target="_blank"
  rel="noreferrer"
>
            <button
              className="
              mt-8
              px-10
              py-4
              rounded-2xl
              bg-green-500
              text-white
              font-semibold
              "
            >
              Click Here and discuss ₹200 OFF
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}