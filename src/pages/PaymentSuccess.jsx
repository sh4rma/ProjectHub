import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccess() {

  const navigate = useNavigate();

  useEffect(() => {

    // Back button disable
    window.history.pushState(null, "", window.location.href);

    const handlePopState = () => {
      window.history.pushState(null, "", window.location.href);
    };

    window.addEventListener("popstate", handlePopState);

    // Auto Redirect
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("popstate", handlePopState);
    };

  }, [navigate]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 to-blue-50 px-6">

      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-xl w-full animate-pulse">

        <CheckCircle
  size={100}
  className="mx-auto text-green-500 animate-bounce"
/>

        <h1 className="text-5xl font-black mt-6 text-slate-900">
          Payment Successful 🎉
        </h1>

        <p className="text-gray-500 mt-4 text-lg">
          Thank you for choosing ProjectHub.
        </p>

        <p className="text-gray-500 mt-2">
          Your payment proof has been submitted successfully.
        </p>

        <p className="text-gray-500 mt-2">
          Our team will verify it and contact you on WhatsApp shortly.
        </p>

        <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-4">
          <p className="text-green-700 font-semibold">
            Order Received Successfully ✅
          </p>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          Redirecting to Home Page in 3 seconds...
        </p>

      </div>

    </section>
  );
}