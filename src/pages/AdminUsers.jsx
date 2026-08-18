import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

import AdminSidebar from "../components/AdminSidebar";

export default function AdminUsers() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {

    const querySnapshot = await getDocs(
      collection(db, "users")
    );

    const data = querySnapshot.docs.map(
      (doc) => ({
        id: doc.id,
        ...doc.data(),
      })
    );

    setUsers(data);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      <AdminSidebar />

      <div className="ml-64 p-8 w-full">

        <h1 className="text-4xl font-black mb-8">
          Users
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="p-3 text-left">
                  Name
                </th>

                <th className="p-3 text-left">
                  Email
                </th>

                <th className="p-3 text-left">
                  Phone
                </th>

                <th className="p-3 text-left">
                  Joined
                </th>

              </tr>

            </thead>

            <tbody>

              {users.map((user) => (

                <tr
                  key={user.id}
                  className="border-b"
                >

                  <td className="p-3">
                    {user.name}
                  </td>

                  <td className="p-3">
                    {user.email}
                  </td>

                  <td className="p-3">
                    {user.phone}
                  </td>

                  <td className="p-3">
                    {user.createdAt
                      ?.split("T")[0]}
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