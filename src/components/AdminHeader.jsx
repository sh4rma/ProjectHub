import { LogOut } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AdminHeader() {

  const navigate = useNavigate();

  const handleLogout = async () => {

    await signOut(auth);

    toast.success("Logged Out");

    navigate("/login");
  };

  return (

    <div className="bg-white shadow-sm rounded-2xl p-4 flex items-center justify-between mb-8">

      <div>

        <h2 className="text-2xl font-bold">
          Admin Panel
        </h2>

        <p className="text-gray-500">
          Manage your platform
        </p>

      </div>

      <button
        onClick={handleLogout}
        className="
        flex
        items-center
        gap-2
        bg-red-500
        text-white
        px-4
        py-2
        rounded-xl
        hover:bg-red-600
        "
      >
        <LogOut size={18} />
        Logout
      </button>

    </div>
  );
}