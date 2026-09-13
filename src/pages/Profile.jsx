import { useEffect, useState } from "react";

import { auth, db } from "../firebase/firebase";

import { signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import {
  User,
  ShoppingBag,
  CreditCard,
  FolderKanban,
  MessageCircle,
  LogOut,
  CheckCircle,
  Clock,
} from "lucide-react";


export default function Profile() {

  const navigate = useNavigate();

  const [user, setUser] = useState(auth.currentUser);
  const [orders, setOrders] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0);


  // =====================================================
  // AUTH
  // =====================================================

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((currentUser) => {

      if (!currentUser) {
        navigate("/");
        return;
      }

      setUser(currentUser);

    });

    return unsubscribe;

  }, [navigate]);


  // =====================================================
  // FETCH ORDERS
  // =====================================================

  useEffect(() => {

    const fetchOrders = async () => {

      try {

        if (!user) return;

        const q = query(
          collection(db, "orders"),
          where("uid", "==", user.uid)
        );

        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setOrders(data);

        const total = data.reduce(
          (sum, item) =>
            sum + Number(item.amount || 0),
          0
        );

        setTotalPayment(total);

      } catch (error) {

        console.log(error);

      }

    };

    fetchOrders();

  }, [user]);


  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = async () => {

    try {

      await signOut(auth);

      toast.success(
        "Logged Out Successfully 👋"
      );

      navigate("/", {
        replace: true,
      });

    } catch (error) {

      console.log(error);

      toast.error(
        "Logout Failed ❌"
      );

    }

  };


  // =====================================================
  // STATUS WIDTH
  // =====================================================

  const getProgress = (status) => {

    if (status === "Pending") return "20%";

    if (status === "Payment Verified") return "40%";

    if (status === "In Progress") return "70%";

    if (status === "Completed") return "100%";

    return "10%";

  };


  return (

    <section
      className="
        min-h-screen
        bg-white
        pt-28
        sm:pt-32
        pb-16
        px-5
        sm:px-6
      "
    >

      <div
        className="
          max-w-5xl
          mx-auto
        "
      >

        {/* =================================================
            PROFILE HEADER
           ================================================= */}

        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-center
            justify-between
            gap-6
            pb-8
            border-b
            border-gray-100
          "
        >

          <div
            className="
              flex
              items-center
              gap-4
            "
          >

            <img
              src={`https://ui-avatars.com/api/?name=${
                user?.email || "User"
              }&background=7c3aed&color=ffffff&bold=true`}
              alt="Profile"
              className="
                w-16
                h-16
                sm:w-20
                sm:h-20
                rounded-full
              "
            />

            <div>

              <p
                className="
                  text-sm
                  text-violet-600
                  font-semibold
                "
              >
                Student Profile
              </p>

              <h1
                className="
                  mt-1
                  text-2xl
                  sm:text-3xl
                  font-black
                  text-gray-900
                "
              >
                {user?.displayName || "Student"}
              </h1>

              <p
                className="
                  mt-1
                  text-sm
                  text-gray-500
                  break-all
                "
              >
                {user?.email}
              </p>

            </div>

          </div>


          {/* Logout */}

          <button
            onClick={handleLogout}
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              px-5
              py-2.5
              rounded-xl
              border
              border-red-100
              text-red-500
              hover:bg-red-50
              font-semibold
              text-sm
              transition
            "
          >

            <LogOut size={17} />

            Logout

          </button>

        </div>


        {/* =================================================
            QUICK STATS
           ================================================= */}

        <div
          className="
            grid
            grid-cols-3
            divide-x
            divide-gray-100
            py-7
            border-b
            border-gray-100
          "
        >

          {/* Orders */}

          <div className="text-center px-2">

            <ShoppingBag
              size={20}
              className="
                mx-auto
                text-violet-600
              "
            />

            <p
              className="
                mt-2
                text-2xl
                sm:text-3xl
                font-black
                text-gray-900
              "
            >
              {orders.length}
            </p>

            <p
              className="
                mt-1
                text-xs
                sm:text-sm
                text-gray-500
              "
            >
              Orders
            </p>

          </div>


          {/* Payments */}

          <div className="text-center px-2">

            <CreditCard
              size={20}
              className="
                mx-auto
                text-green-600
              "
            />

            <p
              className="
                mt-2
                text-2xl
                sm:text-3xl
                font-black
                text-gray-900
              "
            >
              ₹{totalPayment}
            </p>

            <p
              className="
                mt-1
                text-xs
                sm:text-sm
                text-gray-500
              "
            >
              Payments
            </p>

          </div>


          {/* Projects */}

          <div className="text-center px-2">

            <FolderKanban
              size={20}
              className="
                mx-auto
                text-blue-600
              "
            />

            <p
              className="
                mt-2
                text-2xl
                sm:text-3xl
                font-black
                text-gray-900
              "
            >
              {orders.length}
            </p>

            <p
              className="
                mt-1
                text-xs
                sm:text-sm
                text-gray-500
              "
            >
              Projects
            </p>

          </div>

        </div>


        {/* =================================================
            MY ORDERS
           ================================================= */}

        <div className="py-8">

          <div
            className="
              flex
              items-center
              gap-3
              mb-5
            "
          >

            <ShoppingBag
              size={21}
              className="text-violet-600"
            />

            <h2
              className="
                text-xl
                sm:text-2xl
                font-black
                text-gray-900
              "
            >
              My Orders
            </h2>

          </div>


          {orders.length === 0 ? (

            <div
              className="
                py-8
                border-y
                border-gray-100
                text-sm
                text-gray-500
              "
            >
              No Orders Yet
            </div>

          ) : (

            <div
              className="
                divide-y
                divide-gray-100
                border-y
                border-gray-100
              "
            >

              {orders.map((order) => (

                <div
                  key={order.id}
                  className="
                    py-5
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    justify-between
                    gap-3
                  "
                >

                  <div>

                    <h3
                      className="
                        font-bold
                        text-gray-900
                      "
                    >
                      {order.plan}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-gray-500
                      "
                    >
                      Amount: ₹{order.amount}
                    </p>

                  </div>


                  <span
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      w-fit
                      px-3
                      py-1.5
                      rounded-full
                      bg-violet-50
                      text-violet-600
                      text-xs
                      font-semibold
                    "
                  >

                    <Clock size={13} />

                    {order.status}

                  </span>

                </div>

              ))}

            </div>

          )}

        </div>


        {/* =================================================
            PROJECT TRACKING
           ================================================= */}

        <div className="py-8 border-t border-gray-100">

          <div
            className="
              flex
              items-center
              gap-3
              mb-6
            "
          >

            <FolderKanban
              size={21}
              className="text-violet-600"
            />

            <h2
              className="
                text-xl
                sm:text-2xl
                font-black
                text-gray-900
              "
            >
              Project Tracking
            </h2>

          </div>


          {orders.length === 0 ? (

            <p
              className="
                text-sm
                text-gray-500
              "
            >
              No Project Found
            </p>

          ) : (

            <div className="space-y-8">

              {orders.map((order) => (

                <div key={order.id}>

                  <div
                    className="
                      flex
                      flex-col
                      sm:flex-row
                      sm:items-center
                      justify-between
                      gap-2
                    "
                  >

                    <h3
                      className="
                        font-bold
                        text-gray-900
                      "
                    >
                      {order.plan}
                    </h3>

                    <span
                      className="
                        text-sm
                        font-semibold
                        text-violet-600
                      "
                    >
                      {order.status}
                    </span>

                  </div>


                  {/* Progress */}

                  <div
                    className="
                      w-full
                      h-2
                      mt-4
                      bg-gray-100
                      rounded-full
                      overflow-hidden
                    "
                  >

                    <div
                      className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-violet-500
                        to-purple-600
                        transition-all
                        duration-500
                      "
                      style={{
                        width: getProgress(
                          order.status
                        ),
                      }}
                    />

                  </div>


                  {/* Labels */}

                  <div
                    className="
                      flex
                      justify-between
                      mt-2
                      text-[10px]
                      sm:text-xs
                      text-gray-400
                    "
                  >

                    <span>Pending</span>

                    <span>Verified</span>

                    <span>Progress</span>

                    <span>Completed</span>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>


        {/* =================================================
            PAYMENT HISTORY
           ================================================= */}

        <div
          className="
            py-8
            border-t
            border-gray-100
          "
        >

          <div
            className="
              flex
              items-center
              gap-3
              mb-5
            "
          >

            <CreditCard
              size={21}
              className="text-violet-600"
            />

            <h2
              className="
                text-xl
                sm:text-2xl
                font-black
                text-gray-900
              "
            >
              Payment History
            </h2>

          </div>


          {orders.length === 0 ? (

            <p
              className="
                text-sm
                text-gray-500
              "
            >
              No Payments Found
            </p>

          ) : (

            <div
              className="
                border-y
                border-gray-100
                divide-y
                divide-gray-100
              "
            >

              {orders.map((order) => (

                <div
                  key={order.id}
                  className="
                    py-4
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    justify-between
                    gap-2
                  "
                >

                  <div>

                    <p
                      className="
                        text-sm
                        font-semibold
                        text-gray-800
                      "
                    >
                      {order.plan}
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        text-gray-500
                      "
                    >
                      {order.status}
                    </p>

                  </div>

                  <p
                    className="
                      font-bold
                      text-violet-600
                    "
                  >
                    ₹{order.amount}
                  </p>

                </div>

              ))}

            </div>

          )}

        </div>


        {/* =================================================
            SUPPORT
           ================================================= */}

        <div
          className="
            py-8
            border-t
            border-gray-100
          "
        >

          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              justify-between
              gap-5
            "
          >

            <div>

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <MessageCircle
                  size={21}
                  className="text-green-500"
                />

                <h2
                  className="
                    text-xl
                    font-black
                    text-gray-900
                  "
                >
                  Need Help?
                </h2>

              </div>

              <p
                className="
                  mt-2
                  text-sm
                  text-gray-500
                "
              >
                Contact us for project support.
              </p>

            </div>


            <a
              href={`https://wa.me/919528532241?text=${encodeURIComponent(
                "Hello! Mujhe ProjectHub ke baare mein information chahiye."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-6
                py-3
                rounded-xl
                bg-green-500
                hover:bg-green-600
                text-white
                font-semibold
                text-sm
                transition
              "
            >

              <MessageCircle size={18} />

              WhatsApp Support

            </a>

          </div>

        </div>


        {/* =================================================
            ACCOUNT FOOTER
           ================================================= */}

        <div
          className="
            pt-6
            border-t
            border-gray-100
            flex
            items-center
            justify-center
            gap-2
            text-xs
            text-gray-400
          "
        >

          <User size={14} />

          ProjectHub Student Account

          <CheckCircle
            size={14}
            className="text-green-500"
          />

        </div>

      </div>

    </section>
  );
}