// import {
//   LayoutDashboard,
//   ShoppingCart,
//   Users,
//   FolderKanban,
//   Ticket,
//   Menu,
//   X,
// } from "lucide-react";
// import Login from "../pages/Login";
// import { Link } from "react-router-dom";
// import { useState } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  FolderKanban,
  Ticket,
  Menu,
  MessageSquare,
  X,
  LogOut,

} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import toast from "react-hot-toast";

export default function AdminSidebar() {
  const navigate = useNavigate();

const handleLogout = async () => {
  try {
    await signOut(auth);
    toast.success("Logged Out Successfully");
    navigate("/admin/login");
  } catch (error) {
    toast.error("Logout Failed");
  }
};
  
  
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between bg-slate-900 text-white p-4">
        <h1 className="text-xl font-bold">
          ProjectHub
        </h1>

        <button
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`
        bg-slate-900 text-white
        fixed top-0 left-0 h-screen z-50
        w-64 transform transition-transform duration-300

        ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }

        md:translate-x-0
        `}
      >
        <div className="p-6 text-3xl font-black">
          ProjectHub
        </div>

        <div className="mt-10 flex flex-col gap-2">

          <Link
            to="/admin"
            className="px-6 py-4 hover:bg-slate-800 flex gap-3"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            to="/admin/orders"
            className="px-6 py-4 hover:bg-slate-800 flex gap-3"
          >
            <ShoppingCart size={20} />
            Orders
          </Link>

          <Link
            to="/admin/users"
            className="px-6 py-4 hover:bg-slate-800 flex gap-3"
          >
            <Users size={20} />
            Users
          </Link>

          <Link
            to="/admin/projects"
            className="px-6 py-4 hover:bg-slate-800 flex gap-3"
          >
            <FolderKanban size={20} />
            Projects
          </Link>

          <Link
            to="/admin/coupons"
            className="px-6 py-4 hover:bg-slate-800 flex gap-3"
          >
            <Ticket size={20} />
            Coupons
            
          </Link>
          <Link
  to="/admin/contacts"
  className="px-6 py-4 hover:bg-slate-800 flex gap-3"
>
  <MessageSquare size={20} />
  Contact
</Link>
         
        
      
        </div>
 
      </div>
     
    </>
  );
}