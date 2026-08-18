import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useEffect, useState } from "react";

export default function AdminRoute({
  children,
}) {

  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {

    const checkAdmin = async () => {

      const user = auth.currentUser;

      if (!user) {
        setLoading(false);
        return;
      }

      const adminRef = doc(
        db,
        "admins",
        user.email
      );

      const adminSnap = await getDoc(adminRef);

      if (adminSnap.exists()) {
        setIsAdmin(true);
      }

      setLoading(false);
    };

    checkAdmin();

  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!isAdmin) {
    return <Navigate to="/profile" />;
  }

  return children;
}