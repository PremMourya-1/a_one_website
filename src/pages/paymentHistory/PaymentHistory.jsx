import { useState } from "react";
import BreadCrumb from "../../components/front/BreadCrumb/BreadCrumb";

import { MdLocalPrintshop } from "react-icons/md";
function PaymentHistory() {
  const [tab, setTab] = useState(1);
  const pyamentHistory = [
    {
      name: "advance Web Development",
      date: "12 july 2024",
      method: "Phone Pay",
      price: 2000,
    },
    {
      name: "Javascript full course",
      date: "12 july 2024",
      method: "Phone Pay",
      price: 2000,
    },
    {
      name: "Javascript full course",
      date: "12 july 2024",
      method: "Phone Pay",
      price: 2000,
    },
    {
      name: "Javascript full course",
      date: "12 july 2024",
      method: "Phone Pay",
      price: 2000,
    },
    {
      name: "Javascript full course",
      date: "12 july 2024",
      method: "Phone Pay",
      price: 2000,
    },
    {
      name: "Javascript full course",
      date: "12 july 2024",
      method: "Phone Pay",
      price: 2000,
    },
  ];
  return (
    <>
      <div className=" pb-[120px] pt-16 bg-gradient-to-r from-slate-100 to-slate-400 ">
        <div className="container">
          <div className="flex justify-between items-center sm:flex-col sm:justify-start sm:items-start sm:gap-3">
            <div className=" shrink-0">
              <BreadCrumb />
              <h2 className="text-3xl font-semibold mb-3">Payment History</h2>
            </div>
            <div className="buttons p-1.5 flex gap-2 bg-[#ffffff75] rounded-lg overflow-hidden">
              <button
                onClick={() => {
                  setTab(1);
                }}
                className={`px-3 rounded-lg py-1.5  ${
                  tab === 1
                    ? "bg-[color:var(--primary)] text-white"
                    : "bg-white"
                }`}
              >
                Courses
              </button>
              <button
                onClick={() => {
                  setTab(2);
                }}
                className={`px-3 rounded-lg py-1.5  ${
                  tab === 2
                    ? "bg-[color:var(--primary)] text-white"
                    : "bg-white"
                }`}
              >
                Products
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sectionPadding -mt-[150px]">
        <div className="container">
          <div className="p-5 bg-white w-full  m-auto rounded-xl shadow-lg border overflow-x-auto">
            <table className="w-full  min-w-[800px] rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-200">
                  <td className="p-2 font-medium">Course Name</td>
                  <td className="p-2 font-medium">Date</td>
                  <td className="p-2 font-medium">Payment Method</td>
                  <td className="p-2 font-medium">Price </td>
                  <td className="p-2 font-medium">Invoice</td>
                </tr>
              </thead>
              <tbody>
                {pyamentHistory.map((item, i) => {
                  return (
                    <tr
                      key={i}
                      className="even:bg-[color:var(--light)] text-sm"
                    >
                      <td className="p-2 capitalize">{item.name}</td>
                      <td className="p-2 capitalize">{item.date}</td>
                      <td className="p-2 capitalize">{item.method}</td>
                      <td className="p-2 capitalize">{item.price}</td>
                      <td className="p-2 capitalize">
                        <button>
                          <MdLocalPrintshop className="text-xl text-gray-500" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentHistory;
