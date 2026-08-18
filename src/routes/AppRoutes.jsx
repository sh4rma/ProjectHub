import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import History from "../pages/History";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProjectRequest from "../pages/ProjectRequest";
import ThankYou from "../pages/ThankYou";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../pages/Contact";
import Payment from "../pages/Payment";
import PaymentSuccess from "../pages/PaymentSuccess";
import Profile from "../pages/Profile";

import AdminDashboard from "../pages/AdminDashboard";
import AdminOrders from "../pages/AdminOrders";
import AdminUsers from "../pages/AdminUsers";
import AdminProjects from "../pages/AdminProjects";
import AdminCoupons from "../pages/AdminCoupons";
import AdminLogin from "../pages/AdminLogin";
import AdminContacts from "../pages/AdminContacts";

import AdminRoute from "../routes/AdminRoutes";
import Resources from "../components/Resources";


function AppContent() {
  const location = useLocation();

  const isAdminPage =
    location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/history" element={<History />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/request-project" element={<ProjectRequest />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/res" element={<Resources />} />

        <Route path="/payment" element={<Payment />} />
        <Route
          path="/payment-success"
          element={<PaymentSuccess />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <AdminRoute>
              <AdminOrders />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <AdminUsers />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/projects"
          element={
            <AdminRoute>
              <AdminProjects />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/coupons"
          element={
            <AdminRoute>
              <AdminCoupons />
            </AdminRoute>
          }
        />
    

      <Route
          path="/admin/contacts"
          element={
            <AdminRoute>
              <AdminContacts />
            </AdminRoute>
          }
  />
  </Routes>
  
      

      {!isAdminPage && <Footer />}
    </>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}