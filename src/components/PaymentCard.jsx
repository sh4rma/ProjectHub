import { useState } from "react";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/firebase";

export default function PaymentCard({ amount, plan }) {
  const [file, setFile] = useState(null);

  const handleSubmit = async () => {
    if (!auth.currentUser) {
      toast.error("Please Login First");
      return;
    }

    if (!file) {
      toast.error("Upload Payment Screenshot");
      return;
    }

    try {
      await addDoc(collection(db, "orders"), {
        uid: auth.currentUser.uid,
        email: auth.currentUser.email,
        plan: plan,
        amount: amount,
        status: "Pending",
        createdAt: new Date().toISOString(),
      });

      toast.success("Payment Submitted Successfully 🎉");

      setTimeout(() => {
        window.location.href = "/payment-success";
      }, 1000);
    } catch (error) {
  console.error(error);
  toast.error(error.message);
}
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-2xl font-black mb-6">
        Order Summary
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-500">
            Plan
          </span>

          <span className="font-semibold">
            {plan} Plan
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Delivery
          </span>

          <span>3 Days</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Support
          </span>

          <span>WhatsApp</span>
        </div>

        <hr />

        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">
            Total Amount
          </span>

          <span className="text-4xl font-black text-violet-600">
            ₹{amount}
          </span>
        </div>
      </div>

      <div className="mt-6">
        <label className="font-semibold">
          Upload Screenshot
        </label>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="
          w-full
          mt-2
          border
          p-4
          rounded-2xl
          "
        />
      </div>

      <button
        onClick={handleSubmit}
        className="
        w-full
        mt-8
        py-4
        rounded-2xl
        bg-gradient-to-r
        from-violet-600
        to-purple-600
        text-white
        font-bold
        hover:scale-[1.02]
        transition
        "
      >
        Confirm Payment
      </button>
    </div>
  );
}