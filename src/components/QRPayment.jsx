import { QRCode } from "react-qr-code";

export default function QRPayment({ amount }) {
  const upiLink = `upi://pay?pa=shritik406@okicici&pn=ProjectHub&am=${amount}&cu=INR`;

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Scan & Pay
      </h2>

      <div className="flex justify-center">
        <div className="bg-white p-4 rounded-2xl border">
          <QRCode
            value={upiLink}
            size={220}
          />
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-500">
          Amount
        </p>

        <h3 className="text-4xl font-black text-violet-600">
          {amount}
        </h3>

        <p className="text-gray-500 mt-4">
          UPI ID
        </p>

        <h3 className="font-bold text-lg text-violet-600">
          shritik406@okicici
        </h3>

        <p className="text-sm text-red-500 mt-3">
          Important Note : Payment karne ke baad Transaction Screenshot upload karein
        </p>
      </div>
    </div>
  );
}