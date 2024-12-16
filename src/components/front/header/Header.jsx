import { useContext, useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import phoneIcon from "../../../assets/images/svg/call.svg";
import logo from "../../../assets/images/logo.png";
import profile from "../../../assets/images/profile.png";
import location from "../../../assets/images/svg/location.svg";
import { IoIosLogOut } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { RiMenu4Fill } from "react-icons/ri";
import UserProfile from "./UserProfile";
import { AuthContext } from "../../../Context/AuthContext";

function Header() {
  const { setLoginModal, isLogin: login } = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(login);

  useEffect(() => {
    setIsLogin(login);
  }, [login]);

  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState([
    {
      title: "home",
      slug: "/",
      content: [],
      id: 1,
    },
    {
      title: "courses",
      slug: "#",
      content: [
        {
          id: 1,
          title: "web designing",
          slug: "#",
          content: [
            { id: 1, title: "basics of html", slug: "/basics-of-html" },
            { id: 2, title: "advance html", slug: "/advance-html" },
            { id: 3, title: "css", slug: "/css" },
          ],
        },
        {
          id: 2,
          title: "Front end development",
          slug: "#",
          content: [
            { id: 1, title: "javascript", slug: "/basics-of-html" },
            { id: 2, title: "advance javascript", slug: "/advance-html" },
            { id: 3, title: "react js", slug: "/css" },
            { id: 4, title: "redux js", slug: "/css" },
          ],
        },
        { id: 3, title: "courses 3", slug: "/courses-3", content: [] },
      ],
      id: 3,
    },
    {
      title: "products",
      slug: "/products",
      content: [],
      id: 4,
    },
    {
      title: "contact us",
      slug: "/contact-us",
      content: [],
      id: 5,
    },
  ]);
  return (
    <>
      <div className="header-top bg-light">
        <div className="container">
          <div className="headerTopDetails flex sm:flex-col sm:gap-3 justify-between items-center py-2">
            <div className="left flex gap-6 items-center text-sm">
              <div className="flex gap-3 items-center">
                <img src={phoneIcon} alt="phone_icon" />
                <span>+91 9879 569 236</span>
              </div>
              <div className="flex gap-3 items-center">
                <img src={location} alt="location_icon" />
                <span>Jaipur Rajasthan</span>
              </div>
            </div>
            <div className="right">
              <ul className="flex gap-4 items-center">
                <li>
                  <Link to={"/"} className="">
                    <svg
                      className="fill-[#655E5E] hover:fill-[color:var(--primary)] hover:scale-125 transition-transform"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.0292 1.91667H2.97091C2.69133 1.91667 2.4232 2.02774 2.22551 2.22543C2.02781 2.42312 1.91675 2.69126 1.91675 2.97084V20.0292C1.91675 20.3088 2.02781 20.5769 2.22551 20.7746C2.4232 20.9723 2.69133 21.0833 2.97091 21.0833H12.1517V13.6563H9.66008V10.7813H12.1517V8.625C12.1001 8.11877 12.1599 7.60738 12.3268 7.12669C12.4938 6.646 12.7639 6.20765 13.1182 5.8424C13.4725 5.47715 13.9024 5.19383 14.3778 5.01232C14.8532 4.83081 15.3625 4.7555 15.8701 4.79167C16.616 4.78652 17.3616 4.82492 18.103 4.90667V7.49417H16.5792C15.3717 7.49417 15.1417 8.06917 15.1417 8.90292V10.7525H18.0167L17.643 13.6275H15.1417V21.0833H20.0292C20.1677 21.0833 20.3048 21.0561 20.4327 21.0031C20.5606 20.9501 20.6768 20.8725 20.7747 20.7746C20.8725 20.6767 20.9502 20.5605 21.0032 20.4326C21.0561 20.3047 21.0834 20.1676 21.0834 20.0292V2.97084C21.0834 2.8324 21.0561 2.69532 21.0032 2.56743C20.9502 2.43953 20.8725 2.32332 20.7747 2.22543C20.6768 2.12754 20.5606 2.04989 20.4327 1.99692C20.3048 1.94394 20.1677 1.91667 20.0292 1.91667Z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="">
                    <svg
                      className="fill-[#655E5E] hover:fill-[color:var(--primary)] hover:scale-125 transition-transform"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.4851 1.91667C13.5632 1.91955 14.1104 1.9253 14.5829 1.93871L14.7688 1.94542C14.9834 1.95309 15.1952 1.96267 15.4511 1.97417C16.4708 2.02209 17.1665 2.18309 17.777 2.4198C18.4095 2.66321 18.9423 2.99288 19.4751 3.52476C19.9626 4.00367 20.3397 4.58321 20.5801 5.22292C20.8168 5.83338 20.9778 6.52913 21.0257 7.54976C21.0372 7.80467 21.0468 8.01646 21.0545 8.23209L21.0602 8.41801C21.0746 8.88951 21.0804 9.43671 21.0823 10.5148L21.0832 11.2298V12.4852C21.0856 13.1842 21.0782 13.8832 21.0612 14.582L21.0554 14.7679C21.0478 14.9835 21.0382 15.1953 21.0267 15.4503C20.9788 16.4709 20.8159 17.1657 20.5801 17.7771C20.3397 18.4168 19.9626 18.9963 19.4751 19.4753C18.9962 19.9628 18.4167 20.3398 17.777 20.5802C17.1665 20.8169 16.4708 20.9779 15.4511 21.0258L14.7688 21.0546L14.5829 21.0603C14.1104 21.0738 13.5632 21.0805 12.4851 21.0824L11.7701 21.0833H10.5157C9.81635 21.0858 9.11702 21.0785 8.41789 21.0613L8.23198 21.0555C8.00448 21.0469 7.77703 21.037 7.54964 21.0258C6.52998 20.9779 5.83423 20.8169 5.22281 20.5802C4.58344 20.3397 4.00424 19.9626 3.5256 19.4753C3.03776 18.9964 2.66033 18.4169 2.41969 17.7771C2.18298 17.1666 2.02198 16.4709 1.97406 15.4503L1.94531 14.7679L1.94052 14.582C1.92285 13.8832 1.91487 13.1842 1.91656 12.4852V10.5148C1.91391 9.81583 1.92094 9.11682 1.93764 8.41801L1.94435 8.23209C1.95202 8.01646 1.9616 7.80467 1.9731 7.54976C2.02102 6.52913 2.18202 5.83434 2.41873 5.22292C2.65993 4.58295 3.03802 4.00338 3.52656 3.52476C4.00492 3.03749 4.58378 2.66041 5.22281 2.4198C5.83423 2.18309 6.52902 2.02209 7.54964 1.97417C7.80456 1.96267 8.01731 1.95309 8.23198 1.94542L8.41789 1.93967C9.1167 1.92264 9.81571 1.9153 10.5147 1.91763L12.4851 1.91667ZM11.4999 6.70834C10.2291 6.70834 9.01029 7.21317 8.11167 8.11179C7.21306 9.0104 6.70823 10.2292 6.70823 11.5C6.70823 12.7708 7.21306 13.9896 8.11167 14.8882C9.01029 15.7868 10.2291 16.2917 11.4999 16.2917C12.7707 16.2917 13.9895 15.7868 14.8881 14.8882C15.7867 13.9896 16.2916 12.7708 16.2916 11.5C16.2916 10.2292 15.7867 9.0104 14.8881 8.11179C13.9895 7.21317 12.7707 6.70834 11.4999 6.70834ZM11.4999 8.62501C11.8774 8.62494 12.2513 8.69924 12.6001 8.84367C12.949 8.98809 13.266 9.19981 13.533 9.46673C13.8 9.73366 14.0118 10.0506 14.1563 10.3993C14.3009 10.7481 14.3753 11.122 14.3754 11.4995C14.3754 11.8771 14.3011 12.2509 14.1567 12.5998C14.0123 12.9486 13.8006 13.2656 13.5336 13.5326C13.2667 13.7996 12.9498 14.0114 12.601 14.156C12.2522 14.3005 11.8784 14.3749 11.5009 14.375C10.7384 14.375 10.0071 14.0721 9.46792 13.5329C8.92875 12.9938 8.62585 12.2625 8.62585 11.5C8.62585 10.7375 8.92875 10.0062 9.46792 9.46707C10.0071 8.92791 10.7384 8.62501 11.5009 8.62501M16.5321 5.27084C16.2144 5.27084 15.9097 5.39705 15.685 5.6217C15.4604 5.84635 15.3342 6.15105 15.3342 6.46876C15.3342 6.78646 15.4604 7.09116 15.685 7.31581C15.9097 7.54046 16.2144 7.66667 16.5321 7.66667C16.8498 7.66667 17.1545 7.54046 17.3792 7.31581C17.6038 7.09116 17.73 6.78646 17.73 6.46876C17.73 6.15105 17.6038 5.84635 17.3792 5.6217C17.1545 5.39705 16.8498 5.27084 16.5321 5.27084Z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="">
                    <svg
                      className="fill-[#655E5E] hover:fill-[color:var(--primary)] hover:scale-125 transition-transform"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21.5242 5.74999C20.7862 6.08541 19.9908 6.30583 19.1667 6.41124C20.01 5.90333 20.6617 5.09833 20.9683 4.13041C20.1729 4.60958 19.2912 4.945 18.3617 5.13666C17.6046 4.3125 16.5408 3.83333 15.3333 3.83333C13.0812 3.83333 11.2412 5.67333 11.2412 7.94458C11.2412 8.27041 11.2796 8.58666 11.3467 8.88375C7.935 8.71125 4.89708 7.07249 2.875 4.59041C2.52041 5.19416 2.31916 5.90333 2.31916 6.65083C2.31916 8.07874 3.03791 9.34374 4.14958 10.0625C3.46916 10.0625 2.83666 9.87083 2.28083 9.58333V9.61208C2.28083 11.6054 3.69916 13.2729 5.5775 13.6467C4.97455 13.8124 4.34128 13.8354 3.72791 13.7137C3.9882 14.5307 4.49797 15.2456 5.18555 15.7578C5.87314 16.2701 6.70397 16.5539 7.56125 16.5696C6.1081 17.7201 4.30676 18.3419 2.45333 18.3329C2.1275 18.3329 1.80166 18.3137 1.47583 18.2754C3.29666 19.4446 5.4625 20.125 7.78166 20.125C15.3333 20.125 19.4829 13.8575 19.4829 8.42374C19.4829 8.24166 19.4829 8.06916 19.4733 7.88708C20.2783 7.31208 20.9683 6.58374 21.5242 5.74999Z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="">
                    <svg
                      className="fill-[#655E5E] hover:fill-[color:var(--primary)] hover:scale-125 transition-transform"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.7339 3.83333C12.2457 3.8362 13.526 3.84866 14.8868 3.90329L15.3698 3.92437C16.7393 3.98858 18.1078 4.09974 18.7872 4.28854C19.6929 4.54345 20.404 5.2852 20.6445 6.22629C21.0278 7.72129 21.0757 10.6365 21.0815 11.3428L21.0825 11.4885V11.6552C21.0757 12.3615 21.0278 15.2777 20.6445 16.7718C20.4011 17.7157 19.689 18.4585 18.7872 18.7095C18.1078 18.8983 16.7393 19.0095 15.3698 19.0737L14.8868 19.0957C13.526 19.1494 12.2457 19.1628 11.7339 19.1647L11.5087 19.1657H11.2643C10.1814 19.159 5.65233 19.1101 4.211 18.7095C3.30633 18.4546 2.59429 17.7129 2.35375 16.7718C1.97041 15.2768 1.9225 12.3615 1.91675 11.6552V11.3428C1.9225 10.6365 1.97041 7.72033 2.35375 6.22629C2.59716 5.28233 3.30921 4.53962 4.21196 4.28949C5.65233 3.88795 10.1824 3.83908 11.2653 3.83333H11.7339ZM9.58246 8.14583V14.8542L15.3325 11.5L9.58246 8.14583Z" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="headerBottom shadow-sm md:py-2">
        <div className="container">
          <div className="headerBottomDetails flex justify-between items-center ">
            <Link className="logo" to={"/"}>
              <img src={logo} className="sm:max-w-[140px]" alt="logo" />
            </Link>
            <nav className={` ${menuOpen ? "show" : ""} navBar`}>
              <div className="menuWrapper">
                <div className=" md:block hidden p-3 pb-0">
                  <div className="flex justify-between items-center">
                    <Link className="logo" to={"/"}>
                      <img src={logo} className="max-w-44" alt="logo" />
                    </Link>

                    <button
                      onClick={() => {
                        setMenuOpen(false);
                      }}
                      className="group"
                    >
                      <CgClose className="text-2xl text-gray-400  group-hover:text-gray-600" />
                    </button>
                  </div>
                  {isLogin && (
                    <div className="profile mt-6 pb-4 mb-4 border-b flex justify-between">
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
                      <button className="logout">
                        <IoIosLogOut className="text-2xl hover:text-red-500" />
                      </button>
                    </div>
                  )}
                </div>
                <ul
                  className={`navMenu flex gap-8 lg:gap-5  z-40 ${
                    !isLogin ? "mt-4" : ""
                  }`}
                >
                  {menu.map((item) => {
                    return (
                      <li key={item.id} className="navItem group">
                        <Link to={item.slug} className="navLink">
                          <span>{item.title}</span>
                          {item.content.length ? (
                            <span>
                              {
                                <FaAngleDown className="text-[#655E5E] text-base group-hover:rotate-180 transition-transform group-hover:text-[color:var(--primary)]" />
                              }
                            </span>
                          ) : (
                            ""
                          )}
                        </Link>
                        {item.content.length ? (
                          <ul className="dropDown flex flex-col mt-6 ">
                            {item.content.map((item2) => {
                              return (
                                <li key={item2.id} className="navItem2 ">
                                  <Link to={item2.slug} className="navLink2">
                                    <span>{item2.title}</span>
                                    {item2.content.length ? (
                                      <span>
                                        {
                                          <FaAngleDown className="arrow text-sm transition-transform text-gray-500 -rotate-90" />
                                        }
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </Link>
                                  {item2.content.length ? (
                                    <ul className="subDropDown flex flex-col">
                                      {item2.content.map((item3) => {
                                        return (
                                          <li
                                            key={item3.id}
                                            className="navItem3"
                                          >
                                            <Link
                                              to={item3.slug}
                                              className="navLink3"
                                            >
                                              {item3.title}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  ) : (
                                    ""
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        ) : (
                          ""
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
            <div className="buttons flex gap-4 items-center">
              <Link
                to={"/shopping-cart"}
                onClick={(e) => {
                  if (!isLogin) {
                    e.preventDefault();
                    setLoginModal(true);
                  }
                }}
              >
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1579 18.1579C18.8 18.1579 19.4158 18.413 19.8698 18.867C20.3239 19.321 20.5789 19.9368 20.5789 20.5789C20.5789 21.2211 20.3239 21.8369 19.8698 22.2909C19.4158 22.7449 18.8 23 18.1579 23C17.5158 23 16.9 22.7449 16.446 22.2909C15.9919 21.8369 15.7368 21.2211 15.7368 20.5789C15.7368 19.9368 15.9919 19.321 16.446 18.867C16.9 18.413 17.5158 18.1579 18.1579 18.1579ZM18.1579 19.3684C17.8368 19.3684 17.5289 19.496 17.3019 19.723C17.0749 19.95 16.9474 20.2579 16.9474 20.5789C16.9474 20.9 17.0749 21.2079 17.3019 21.4349C17.5289 21.6619 17.8368 21.7895 18.1579 21.7895C18.4789 21.7895 18.7868 21.6619 19.0139 21.4349C19.2409 21.2079 19.3684 20.9 19.3684 20.5789C19.3684 20.2579 19.2409 19.95 19.0139 19.723C18.7868 19.496 18.4789 19.3684 18.1579 19.3684ZM7.26316 18.1579C7.90526 18.1579 8.52106 18.413 8.9751 18.867C9.42914 19.321 9.68421 19.9368 9.68421 20.5789C9.68421 21.2211 9.42914 21.8369 8.9751 22.2909C8.52106 22.7449 7.90526 23 7.26316 23C6.62106 23 6.00525 22.7449 5.55122 22.2909C5.09718 21.8369 4.84211 21.2211 4.84211 20.5789C4.84211 19.9368 5.09718 19.321 5.55122 18.867C6.00525 18.413 6.62106 18.1579 7.26316 18.1579ZM7.26316 19.3684C6.94211 19.3684 6.6342 19.496 6.40719 19.723C6.18017 19.95 6.05263 20.2579 6.05263 20.5789C6.05263 20.9 6.18017 21.2079 6.40719 21.4349C6.6342 21.6619 6.94211 21.7895 7.26316 21.7895C7.58421 21.7895 7.89211 21.6619 8.11913 21.4349C8.34615 21.2079 8.47368 20.9 8.47368 20.5789C8.47368 20.2579 8.34615 19.95 8.11913 19.723C7.89211 19.496 7.58421 19.3684 7.26316 19.3684ZM20.5789 3.63158H3.95842L7.04526 10.8947H16.9474C17.3468 10.8947 17.6979 10.7011 17.9158 10.4105L21.5474 5.56842C21.7047 5.36263 21.7895 5.10842 21.7895 4.84211C21.7895 4.52105 21.6619 4.21315 21.4349 3.98613C21.2079 3.75912 20.9 3.63158 20.5789 3.63158ZM16.9474 12.1053H7.10579L6.17368 13.9937L6.05263 14.5263C6.05263 14.8474 6.18017 15.1553 6.40719 15.3823C6.6342 15.6093 6.94211 15.7368 7.26316 15.7368H20.5789V16.9474H7.26316C6.62106 16.9474 6.00525 16.6923 5.55122 16.2383C5.09718 15.7842 4.84211 15.1684 4.84211 14.5263C4.84175 14.1156 4.94589 13.7115 5.14474 13.3521L6.01632 11.5726L1.62211 1.21053H0V0H2.42105L3.45 2.42105H20.5789C21.2211 2.42105 21.8369 2.67613 22.2909 3.13016C22.7449 3.5842 23 4.2 23 4.84211C23 5.44737 22.7942 5.95579 22.4553 6.36737L18.9326 11.0763C18.4968 11.6937 17.7705 12.1053 16.9474 12.1053Z"
                    fill="#655E5E"
                  />
                </svg>
              </Link>
              {isLogin && (
                <Link to={"/wishlist"}>
                  <svg
                    width="25"
                    height="21"
                    viewBox="0 0 25 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.6335 11.9751L14.3265 19.2833C13.8421 19.7676 13.1851 20.0397 12.5001 20.0397C11.8151 20.0397 11.1581 19.7676 10.6737 19.2833L3.36672 11.9764C2.7627 11.3776 2.28289 10.6655 1.95484 9.88077C1.62679 9.09608 1.45696 8.25432 1.45509 7.40383C1.45323 6.55333 1.61938 5.71084 1.94399 4.92472C2.2686 4.13861 2.74529 3.42435 3.34668 2.82295C3.94808 2.22156 4.66233 1.74487 5.44845 1.42026C6.23456 1.09565 7.07706 0.929504 7.92755 0.931366C8.77805 0.933229 9.61981 1.10306 10.4045 1.43111C11.1892 1.75916 11.9013 2.23897 12.5001 2.843C13.7163 1.65708 15.3507 0.998064 17.0494 1.00871C18.748 1.01935 20.3741 1.6988 21.5753 2.89986C22.7766 4.10092 23.4562 5.72689 23.4671 7.42554C23.478 9.12418 22.8192 10.7587 21.6335 11.9751Z"
                      stroke="#655E5E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              )}
              {isLogin ? (
                <UserProfile />
              ) : (
                <button
                  onClick={() => {
                    setLoginModal(true);
                  }}
                  className="hover:shadow-lg px-4 py-1.5 bg-primary text-white rounded-md"
                >
                  Login
                </button>
              )}

              <button
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
                className="toggleBtn md:block hidden"
              >
                <RiMenu4Fill className="text-3xl text-[#383838] hover:text-[color:var(--primary)]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
