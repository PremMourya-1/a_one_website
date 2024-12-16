import React from "react";
import BreadCrumb from "../../components/front/BreadCrumb/BreadCrumb";
import CartItem from "../../components/front/CartItem/CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const cartData = [
    {
      image:
        "https://cloudinary.hbs.edu/hbsit/image/upload/s--jcW2HPqC--/f_auto,c_fill,h_375,w_750,/v20200101/EA99CC738B99D0AA67987EC2976D550F.jpg",
      name: "Advance Web Devlopment full course",
      price: 2000,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, delectus animi. Quaerat, dolor quasi? Amet animi consequuntur fugit perspiciatis voluptas.",
    },
    {
      image:
        "https://www.blissmarcom.com/wp-content/uploads/2024/04/How-the-Digital-Marketing-Agency-in-Noida-Stands-Out.jpeg",
      name: "Advance Web Devlopment full course",
      price: 2000,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, delectus animi. Quaerat, dolor quasi? Amet animi consequuntur fugit perspiciatis voluptas.",
    },
    {
      image:
        "https://designsvalley.com/wp-content/uploads/2023/10/what-is-digital-marketing.png",
      name: "Advance Web Devlopment full course",
      price: 2000,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, delectus animi. Quaerat, dolor quasi? Amet animi consequuntur fugit perspiciatis voluptas.",
    },
  ];
  return (
    <>
      <div className="sectionPadding bg-gradient-to-r from-slate-100 to-slate-400 ">
        <div className="container">
          <div className="flex">
            <div className="max-w-[68%] lg:max-w-full  shrink-0">
              <BreadCrumb />

              <h2 className="text-3xl font-semibold ">Shopping Cart</h2>
            </div>
          </div>
        </div>
      </div>

      <div className=" sectionPadding">
        <div className="container">
          <div className="flex justify-between lg:flex-col lg:gap-4">
            <div className="left p-5 bg-white w-full max-w-[70%] lg:max-w-full rounded-xl shadow-xl me-3 lg:me-0 border">
              <h3 className="font-semibold text-lg mb-4">Cart Items</h3>
              {cartData.map((item, i) => {
                return <CartItem item={item} key={i} />;
              })}
            </div>

            <div className="right h-max sticky top-8 w-full max-w-[30%] lg:max-w-full p-5 bg-white rounded-xl shadow-xl ms-3 lg:ms-0 border">
              <h3 className="font-semibold text-lg mb-4">Payment summary</h3>

              <div>
                <div className="flex justify-between mb-1.5 pb-1.5  border-b">
                  <span>Sub Total</span>
                  <span>Rs 2000</span>
                </div>
                <div className="flex justify-between mb-1.5 pb-1.5  border-b">
                  <span>Tax (18%)</span>
                  <span>Rs 360</span>
                </div>
                <div className="flex justify-between mb-1.5 font-semibold mt-3">
                  <span className="">Total</span>
                  <span>Rs 2360</span>
                </div>

                <form className="inputContainer flex border-2 border-gray-200  rounded-lg mt-4">
                  <input
                    type="text"
                    className="border-0 outline-none p-2.5 w-full text-sm bg-transparent"
                    placeholder="Apply Coupon"
                  />
                  <button className="px-6 text-sm py-1.5 rounded-md text-white bg-primary hover:bg-[color:var(--primary-dark)]">
                    Apply
                  </button>
                </form>

                <Link
                  to={"/courses"}
                  className="btn-primary  flex items-center gap-3 mt-4 justify-center text "
                >
                  <span className="">Continue Payment</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
