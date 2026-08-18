import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  setDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

import AdminSidebar from "../components/AdminSidebar";

import toast from "react-hot-toast";

export default function AdminCoupons() {

  const [coupons, setCoupons] = useState([]);

  const [code, setCode] = useState("");

  const [discount, setDiscount] = useState("");

  const fetchCoupons = async () => {

    const snapshot = await getDocs(
      collection(db, "coupons")
    );

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setCoupons(data);
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  const handleCreateCoupon = async () => {

    if (!code || !discount) {
      toast.error("Fill all fields");
      return;
    }

    try {

      await setDoc(
        doc(db, "coupons", code),
        {
          code,
          discount: Number(discount),
          used: false,
        }
      );

      toast.success("Coupon Created");

      setCode("");
      setDiscount("");

      fetchCoupons();

    } catch (error) {

      console.log(error);

      toast.error("Failed");
    }
  };

  const handleDelete = async (id) => {

    try {

      await deleteDoc(
        doc(db, "coupons", id)
      );

      toast.success("Deleted");

      fetchCoupons();

    } catch (error) {

      console.log(error);

      toast.error("Delete Failed");
    }
  };

  return (

    <div className="flex min-h-screen bg-gray-100">

      <AdminSidebar />

      <div className="w-full md:ml-64 p-4 md:p-8">

        <h1 className="text-4xl font-black mb-8">
          Coupons
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">

          <h2 className="text-2xl font-bold mb-5">
            Create Coupon
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="Coupon Code"
              value={code}
              onChange={(e) =>
                setCode(e.target.value.toUpperCase())
              }
              className="border p-3 rounded-xl"
            />

            <input
              type="number"
              placeholder="Discount"
              value={discount}
              onChange={(e) =>
                setDiscount(e.target.value)
              }
              className="border p-3 rounded-xl"
            />

            <button
              onClick={handleCreateCoupon}
              className="
              bg-violet-600
              text-white
              rounded-xl
              px-4
              py-3
              "
            >
              Create Coupon
            </button>

          </div>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-6">
            Coupon Management
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left p-3">
                    Code
                  </th>

                  <th className="text-left p-3">
                    Discount
                  </th>

                  <th className="text-left p-3">
                    Status
                  </th>

                  <th className="text-left p-3">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {coupons.map((coupon) => (

                  <tr
                    key={coupon.id}
                    className="border-b"
                  >

                    <td className="p-3 font-semibold">
                      {coupon.code}
                    </td>

                    <td className="p-3">
                      ₹{coupon.discount}
                    </td>

                    <td className="p-3">
                      {coupon.used
                        ? "Used"
                        : "Available"}
                    </td>

                    <td className="p-3">

                      <button
                        onClick={() =>
                          handleDelete(
                            coupon.id
                          )
                        }
                        className="
                        bg-red-500
                        text-white
                        px-4
                        py-2
                        rounded-lg
                        "
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}