import { useState } from "react";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import { db } from "../firebase/firebase";

import PaymentCard from "../components/PaymentCard";
import QRPayment from "../components/QRPayment";
import StudentDiscount from "../components/StudentDiscount";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

export default function Payment() {
  const location = useLocation();

  const plan = location.state?.plan || "Standard";
  const initialPrice = location.state?.price || 999;

  const [price, setPrice] = useState(initialPrice);
  const [coupon, setCoupon] = useState("");

  const applyCoupon = async () => {
    try {
      // Starter plan par coupon nahi chalega
      if (plan === "Starter") {
        toast.error(
          "Discount not available on Starter Plan"
        );
        return;
      }

      const couponRef = doc(
        db,
        "coupons",
        coupon.toUpperCase()
      );

      const couponSnap = await getDoc(couponRef);

      if (!couponSnap.exists()) {
        toast.error("Invalid Coupon");
        return;
      }

      const data = couponSnap.data();

      if (data.used) {
        toast.error("Coupon Already Used");
        return;
      }

      setPrice((prev) => prev - data.discount);

      await updateDoc(couponRef, {
        used: true,
      });

      toast.success(
        `₹${data.discount} Discount Applied 🎉`
      );
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
if (!auth.currentUser) {
  return <Navigate to="/login" />;
}
  return (
    <section className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-black">
            Complete Your Payment
          </h1>

          <p className="text-gray-500 mt-4">
            Secure payment via UPI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <PaymentCard
            amount={price}
            plan={plan}
          />

          <QRPayment
            amount={price}
          />
        </div>

        {/* Coupon Box sirf Standard/Premium me */}
        {plan !== "Starter" && (
          <div className="bg-white rounded-3xl shadow-lg p-8 mt-10 max-w-2xl mx-auto">

            <h3 className="text-2xl font-bold">
              Student Discount 🎓
            </h3>

            <p className="text-gray-500 mt-2">
              Got a discount code from WhatsApp?
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-5">

              <input
                type="text"
                placeholder="Enter Coupon Code"
                value={coupon}
                onChange={(e) =>
                  setCoupon(
                    e.target.value.toUpperCase()
                  )
                }
                className="
                  flex-1
                  border
                  p-4
                  rounded-xl
                  outline-none
                  focus:border-violet-500
                "
              />

              <button
                onClick={applyCoupon}
                className="
                  px-8
                  py-4
                  bg-green-500
                  text-white
                  rounded-xl
                  font-semibold
                  hover:bg-green-600
                  transition
                "
              >
                Apply
              </button>

            </div>

          </div>
        )}

        {plan === "Starter" && (
          <div className="bg-white rounded-3xl shadow-lg p-8 mt-10 max-w-2xl mx-auto text-center">

            <h3 className="text-xl font-bold text-red-500">
              Starter Plan
            </h3>

            <p className="text-gray-500 mt-2">
              Student discount is not available
              on this plan.
            </p>

          </div>
        )}

        <div className="mt-16">
          <StudentDiscount />
        </div>

      </div>
    </section>
  );
}