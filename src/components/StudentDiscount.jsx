export default function StudentDiscount() {
  return (
    <div className="bg-green-50 border border-green-200 rounded-3xl p-10 text-center">

      <h2 className="text-4xl font-black">
        🎓 Student Discount
      </h2>

      <p className="mt-4 text-gray-600">
        Discuss your project and get up to ₹200 OFF
      </p>

      <a
        href="https://wa.me/919528532241"
        target="_blank"
        rel="noreferrer"
      >
        <button
          className="
          mt-6
          px-8
          py-4
          bg-green-500
          text-white
          rounded-xl
          font-semibold
          "
        >
          Discuss on WhatsApp
        </button>
      </a>

    </div>
  );
}