import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";

import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";

export default function AdminDashboard() {
  const [usersCount, setUsersCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [pendingOrders, setPendingOrders] = useState(0);

  useEffect(() => {
    // Users Realtime
    const unsubscribeUsers = onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        setUsersCount(snapshot.size);
      }
    );

    // Orders Realtime
    const unsubscribeOrders = onSnapshot(
      collection(db, "orders"),
      (snapshot) => {
        setOrdersCount(snapshot.size);

        let totalRevenue = 0;
        let pending = 0;

        snapshot.forEach((doc) => {
          const order = doc.data();

          totalRevenue += Number(order.amount || 0);

          if (order.status === "Pending") {
            pending++;
          }
        });

        setRevenue(totalRevenue);
        setPendingOrders(pending);
      }
    );

    return () => {
      unsubscribeUsers();
      unsubscribeOrders();
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <div className="w-full md:ml-64 p-4 md:p-8">
        <AdminHeader />

        <h1 className="text-4xl font-black mb-8">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-4xl font-black text-violet-600">
              {ordersCount}
            </h2>
            <p className="text-gray-500 mt-2">
              Total Orders
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-4xl font-black text-green-600">
              ₹{revenue}
            </h2>
            <p className="text-gray-500 mt-2">
              Revenue
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-4xl font-black text-blue-600">
              {usersCount}
            </h2>
            <p className="text-gray-500 mt-2">
              Users
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-4xl font-black text-orange-600">
              {pendingOrders}
            </h2>
            <p className="text-gray-500 mt-2">
              Pending Orders
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}