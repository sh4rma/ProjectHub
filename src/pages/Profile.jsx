import { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export default function Profile() {
  const navigate = useNavigate();

useEffect(() => {

  const unsubscribe = auth.onAuthStateChanged((user) => {

    if (!user) {
      navigate("/");
    }

  });

  return unsubscribe;

}, []);
  const user = auth.currentUser;

  const [orders, setOrders] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      if (!user) return;

      const q = query(
        collection(db, "orders"),
        where("uid", "==", user.uid)
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setOrders(data);

      const total = data.reduce(
        (sum, item) => sum + Number(item.amount || 0),
        0
      );

      setTotalPayment(total);
    } catch (error) {
      console.log(error);
    }
  };

 const handleLogout = async () => {
  try {

    await signOut(auth);

    toast.success("Logged Out Successfully 👋");

    navigate("/", {
      replace: true,
    });

  } catch (error) {

    console.log(error);

    toast.error("Logout Failed ❌");

  }
};

  return (
    <section className="min-h-screen bg-gray-50 pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Profile */}
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
          <img
            src={`https://ui-avatars.com/api/?name=${
              user?.email || "User"
            }`}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto"
          />

          <h1 className="text-3xl font-black mt-4">
            {user?.displayName || "Student"}
          </h1>

          <p className="text-gray-500 mt-2">
            {user?.email}
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white rounded-2xl p-6 shadow text-center">
            <h2 className="text-3xl font-black text-violet-600">
              {orders.length}
            </h2>

            <p className="text-gray-500">
              Orders
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow text-center">
            <h2 className="text-3xl font-black text-green-600">
              ₹{totalPayment}
            </h2>

            <p className="text-gray-500">
              Payments
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow text-center">
            <h2 className="text-3xl font-black text-blue-600">
              {orders.length}
            </h2>

            <p className="text-gray-500">
              Projects
            </p>
          </div>

        </div>

        {/* Orders */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold">
            My Orders
          </h2>

          {orders.length === 0 ? (
            <p className="text-gray-500 mt-4">
              No Orders Yet
            </p>
          ) : (
            <div className="space-y-4 mt-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="border rounded-xl p-4"
                >
                  <h3 className="font-bold">
                    {order.plan}
                  </h3>

                  <p>Amount: ₹{order.amount}</p>

                  <p>
                    Status:
                    <span className="text-orange-500 ml-2">
                      {order.status}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
{/* Project Tracking */}
<div className="bg-white rounded-3xl shadow-lg p-8 mt-8">
  <h2 className="text-2xl font-bold mb-6">
    Project Tracking
  </h2>

  {orders.length === 0 ? (
    <p className="text-gray-500">
      No Project Found
    </p>
  ) : (
    orders.map((order) => (
      <div
        key={order.id}
        className="border rounded-2xl p-6 mb-5"
      >
        <h3 className="font-bold text-xl">
          {order.plan}
        </h3>

        <p className="mt-2">
          Current Status:
          <span className="ml-2 font-semibold text-violet-600">
            {order.status}
          </span>
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
          <div
            className={`h-4 rounded-full
              ${
                order.status === "Pending"
                  ? "w-[20%] bg-orange-500"
                  : order.status === "Payment Verified"
                  ? "w-[40%] bg-blue-500"
                  : order.status === "In Progress"
                  ? "w-[70%] bg-violet-500"
                  : order.status === "Completed"
                  ? "w-full bg-green-500"
                  : "w-[10%] bg-gray-400"
              }
            `}
          />
        </div>

        <div className="flex justify-between text-sm mt-2 text-gray-500">
          <span>Pending</span>
          <span>Verified</span>
          <span>Progress</span>
          <span>Completed</span>
        </div>
      </div>
    ))
  )}
</div>
        {/* Payment History */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold">
            Payment History
          </h2>

          {orders.length === 0 ? (
            <p className="text-gray-500 mt-4">
              No Payments Found
            </p>
          ) : (
            <div className="space-y-4 mt-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="border rounded-xl p-4"
                >
                  <p>Plan: {order.plan}</p>

                  <p>Amount: ₹{order.amount}</p>

                  <p>Status: {order.status}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Support */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mt-8 text-center">
          <h2 className="text-2xl font-bold">
            Need Help?
          </h2>

          <a
  href={`https://wa.me/919528532241?text=${encodeURIComponent(
    "Hello! Mujhe ProjectHub ke baare mein information chahiye."
  )}`}
  target="_blank"
  rel="noreferrer"
>
  <button className="bg-green-500 text-white px-10 py-4 rounded-2xl">
    WhatsApp Support
  </button>
</a>
        </div>

        {/* Logout */}
        <div className="text-center mt-8">
          <button
  onClick={handleLogout}
  className="
  px-8
  py-3
  rounded-xl
  bg-red-500
  text-white
  font-semibold
  "
>
  Logout
</button>
        </div>

      </div>
    </section>
  );
} 