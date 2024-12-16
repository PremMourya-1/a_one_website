import React from "react";
import logo from "../../../assets/images/logoWhite.png";
import { Link } from "react-router-dom";
import { RiFacebookFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-gradient-to-t to-[#1D5689] from-[#0D3559] py-10 text-white">
      <div className="container">
        <div className="grid grid-cols-12 ">
          <div className="one col-span-4 lg:col-span-12 lg:mb-6">
            <Link to={""} className="mb-4">
              <img src={logo} alt="" className="max-w-[220px]" />
            </Link>
            <p className="text-sm mt-3 font-normal">
              A one is a fully-featured learning management system that helps
              you to run your education business in several hours. This platform
              helps instructors to create professional education materials and
              helps students to learn from the best instructors.
            </p>

            <div className="links mt-4 flex gap-3 items-center">
              <Link
                to={""}
                className="h-10 w-10 border border-white flex items-center justify-center rounded-lg hover:bg-white hover:text-[color:var(--primary)] transition-all"
              >
                <RiFacebookFill className="text-xl" />
              </Link>
              <Link
                to={""}
                className="h-10 w-10 border border-white flex items-center justify-center rounded-lg hover:bg-white hover:text-[color:var(--primary)] transition-all"
              >
                <BsTwitterX className="text-lg" />
              </Link>

              <Link
                to={""}
                className="h-10 w-10 border border-white flex items-center justify-center rounded-lg hover:bg-white hover:text-[color:var(--primary)] transition-all"
              >
                <FaInstagram className="text-lg" />
              </Link>
            </div>
          </div>
          <div className="two col-span-2 lg:col-span-4 sm:col-span-6 ps-10 lg:ps-0">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>

            <ul>
              <li>
                <Link
                  className="text-gray-300 mb-2 block hover:text-white"
                  to={""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 mb-2 block hover:text-white"
                  to={""}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 mb-2 block hover:text-white"
                  to={""}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 mb-2 block hover:text-white"
                  to={""}
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 mb-2 block hover:text-white"
                  to={""}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 mb-2 block hover:text-white"
                  to={""}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 mb-2 block hover:text-white"
                  to={""}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="three col-span-2  lg:col-span-4 sm:col-span-6 ps-10 lg:ps-0">
            <h3 className="text-lg font-semibold mb-3">Use Full Links</h3>
            <ul>
              <li>
                <Link
                  className="text-gray-300 mb-2 block hover:text-white"
                  to={""}
                >
                  Privacy & Plicy
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 mb-2 block hover:text-white"
                  to={""}
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 mb-2 block hover:text-white"
                  to={""}
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 mb-2 block hover:text-white"
                  to={""}
                >
                  Help & Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="three col-span-4 lg:col-span-4 sm:col-span-12 ps-16 lg:ps-0 sm:mt-6">
            <h3 className="text-lg font-semibold mb-3">We are here</h3>
            <ul className="mb-4">
              <li>
                <Link
                  className="text-gray-300 mb-2 block hover:text-white"
                  to={""}
                >
                  Mobile : +91 9987 696 556
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 mb-2 block hover:text-white"
                  to={""}
                >
                  Email : info@gmail.com
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
            <p className="text-sm text-gray-300">
              Subscribe to stay tuned for new web design and latest updates.
              Let's do it!
            </p>

            <form className="inputContainer flex border-2 border-gray-200  rounded-lg mt-4">
              <input
                type="text"
                className="border-0 outline-none p-2.5 w-full text-sm bg-transparent"
                placeholder="Email Address"
              />
              <button className="px-3 text-sm py-1.5 bg-white rounded-md text-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
