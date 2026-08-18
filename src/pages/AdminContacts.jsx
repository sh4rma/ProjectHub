import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import AdminSidebar from "../components/AdminSidebar";
import toast from "react-hot-toast";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "contacts"),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(data);
      }
    );

    return () => unsubscribe();
  }, []);

  const deleteContact = async (id) => {
    if (!window.confirm("Delete this message?")) return;

    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Message Deleted");
    } catch (error) {
      toast.error("Delete Failed");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <div className="w-full md:ml-64 p-6">
        <h1 className="text-4xl font-black mb-8">
          Contact Messages
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Project</th>
                <th className="p-3 text-left">Message</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id} className="border-b">
                  <td className="p-3">{contact.name}</td>
                  <td className="p-3">{contact.phone}</td>
                  <td className="p-3">{contact.email}</td>
                  <td className="p-3">{contact.projectType}</td>
                  <td className="p-3 max-w-xs">
                    {contact.message}
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() =>
                        deleteContact(contact.id)
                      }
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {contacts.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-10 text-gray-500"
                  >
                    No Contact Messages Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}