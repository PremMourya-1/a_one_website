import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { LuLogOut } from "react-icons/lu";
import profile from "../../../assets/images/profile.png";
import { Link } from "react-router-dom";
import { ImBooks } from "react-icons/im";
import { ImUserTie } from "react-icons/im";
import { MdOutlineManageHistory } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa6";

function UserProfile() {
  return (
    <>
      <Menu as="div" className="relative CustomDropdown flex text-left">
        <MenuButton className="">
          <div className="h-9 w-9 rounded-full bg-light">
            <img
              className="h-full w-full object-cover"
              src={profile}
              alt="user_profile_image"
              height={100}
              width={100}
            />
          </div>
        </MenuButton>

        <MenuItems
          transition
          className="data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in absolute right-2 top-6 z-10 mt-4 w-max origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none ] font-semibold text-white border border-[color:var(--primary-dark)] dark:bg-[color:var(--dark-background-dark)] border-none overflow-hidden"
        >
          <MenuItem className="dropdownLink cursor-pointer">
            <Link to={"/profile"} className="profile">
              <div className="flex gap-4 items-center">
                <div className="h-12 w-12 rounded-full bg-light">
                  <img
                    className="h-full w-full object-cover"
                    src={profile}
                    alt="user_profile_image"
                    height={100}
                    width={100}
                  />
                </div>
                <div className="name capitalize">
                  <span className="block ">Alyxa nice</span>
                  <span className="block text-xs text-gray-500 lowercase">
                    Alyxanice123@gmail.com
                  </span>
                </div>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="dropdownLink cursor-pointer">
            <Link to={"/profile"}>
              <span className="text-lg ">
                <FaUserGraduate className="text-lg" />
              </span>

              <span>My Profile</span>
            </Link>
          </MenuItem>
          <MenuItem className="dropdownLink cursor-pointer">
            <Link to={"/my-courses"}>
              <span className="text-lg ">
                <ImBooks className="text-lg" />
              </span>

              <span>My Courses</span>
            </Link>
          </MenuItem>

          <MenuItem className="dropdownLink cursor-pointer">
            <Link to={"/payment-history"}>
              <MdOutlineManageHistory className="text-lg" />
              <span>Purchase History</span>
            </Link>
          </MenuItem>
          <MenuItem className="dropdownLink cursor-pointer">
            <Link to={"/"}>
              <ImUserTie className="text-lg" />
              <span>Become Instructor</span>
            </Link>
          </MenuItem>
          <MenuItem className="dropdownLink cursor-pointer">
            <span
              onClick={() => {
                setModal(true);
              }}
            >
              <span className="text-lg ">
                <LuLogOut />
              </span>
              Log out
            </span>
          </MenuItem>
        </MenuItems>
      </Menu>
    </>
  );
}

export default UserProfile;
