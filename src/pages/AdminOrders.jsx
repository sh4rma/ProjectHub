import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

import AdminSidebar from "../components/AdminSidebar";

export default function AdminOrders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {

    const querySnapshot = await getDocs(
      collection(db, "orders")
    );

    const data = querySnapshot.docs.map(
      (doc) => ({
        id: doc.id,
        ...doc.data(),
      })
    );

    setOrders(data);
  };

  const updateStatus = async (
    id,
    status
  ) => {

    try {

      await updateDoc(
        doc(db, "orders", id),
        {
          status,
        }
      );

      fetchOrders();

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div className="flex min-h-screen bg-gray-100">

      <AdminSidebar />

      <div className="w-full md:ml-64 p-4 md:p-8">

        <h1 className="text-4xl font-black mb-8">
          Orders Management
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">

          <table className="min-w-full">

            <thead>

              <tr className="border-b">

                <th className="p-3 text-left">
                  Email
                </th>

                <th className="p-3 text-left">
                  Plan
                </th>

                <th className="p-3 text-left">
                  Amount
                </th>

                <th className="p-3 text-left">
                  Current Status
                </th>

                <th className="p-3 text-left">
                  Update Status
                </th>

              </tr>

            </thead>

            <tbody>

              {orders.map((order) => (

                <tr
                  key={order.id}
                  className="border-b"
                >

                  <td className="p-3">
                    {order.email}
                  </td>

                  <td className="p-3">
                    {order.plan}
                  </td>

                  <td className="p-3">
                    ₹{order.amount}
                  </td>

                  <td className="p-3 font-semibold text-violet-600">
                    {order.status || "Pending"}
                  </td>

                  <td className="p-3">

                    <select
                      value={
                        order.status ||
                        "Pending"
                      }
                      onChange={(e) =>
                        updateStatus(
                          order.id,
                          e.target.value
                        )
                      }
                      className="
                      border
                      rounded-lg
                      px-3
                      py-2
                      w-full
                      "
                    >

                      <option value="Pending">
                        Pending
                      </option>

                      <option value="Payment Verified">
                        Payment Verified
                      </option>

                      <option value="Requirement Discussion">
                        Requirement Discussion
                      </option>

                      <option value="Development Started">
                        Development Started
                      </option>

                      <option value="Testing">
                        Testing
                      </option>

                      <option value="Completed">
                        Completed
                      </option>

                      <option value="Delivered">
                        Delivered
                      </option>

                    </select>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );
}