import BreadCrumb from "../../components/front/BreadCrumb/BreadCrumb";
import courseImg from "../../assets/images/digitalMarketing.jpg";
import language from "../../assets/images/icons/language.png";
import profile from "../../assets/images/profile.png";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TfiAlarmClock } from "react-icons/tfi";
import { Tabs } from "rsuite";
function CourseDetails() {
  return (
    <>
      <div className="sectionPadding bg-gradient-to-r from-slate-100 to-slate-400 ">
        <div className="container">
          <div className="flex">
            <div className="max-w-[68%] lg:max-w-full  shrink-0">
              <BreadCrumb />

              <h2 className="text-3xl font-semibold mb-3">
                The Complete Web Development with Bootstrap
              </h2>
              <p>
                Become a Full-Stack Web Developer with just ONE course. HTML,
                CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps with
                Bootstrap.
              </p>
              <div className="tutor mt-3  mb-2 flex gap-4 items-center">
                <div className="profile h-10 w-10 rounded-full overflow-hidden ">
                  <img
                    className="h-full w-full object-cover"
                    src={profile}
                    alt={"teacher"}
                  />
                </div>
                <span className="font-semibold capitalize">Mr Tony stark</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container sectionPadding courseDetails">
        <div className="flex flex-wrap md:flex-col-reverse">
          <div className="w-full max-w-[68%] pe-10 lg:pe-4 md:pe-0 -mt-[100px] lg:mt-0 md:max-w-full ">
            <div className="content">
              <div className="bg-white shadow-lg lg:border lg:p-2 p-4 rounded-xl">
                <Tabs
                  className="rounded-lg w-full"
                  defaultActiveKey="1"
                  appearance="pills"
                >
                  <Tabs.Tab eventKey="1" title="Overview">
                    <h2 className="text-base mt-5">Overview</h2>
                  </Tabs.Tab>
                  <Tabs.Tab eventKey="2" title="Curriculum">
                    <h2 className="text-base mt-5">Curriculum</h2>
                  </Tabs.Tab>
                  <Tabs.Tab eventKey="3" title="Details">
                    <h2 className="text-base mt-5">Details</h2>
                  </Tabs.Tab>
                  <Tabs.Tab eventKey="4" title="Instructor">
                    <h2 className="text-base mt-5">Instructor</h2>
                  </Tabs.Tab>
                  <Tabs.Tab eventKey="5" title="Reviews">
                    <h2 className="text-base mt-5">Reviews</h2>
                  </Tabs.Tab>
                </Tabs>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[32%] md:max-w-full ">
            <div className=" -mt-[200px] lg:mt-0  sticky top-3  rounded-3xl shadow-xl lg:shadow-md lg:mb-10  bg-white border-2 border-[color:var(--primary)] p-3">
              <Link
                to={""}
                className="imageBox h-[220px] overflow-hidden relative"
              >
                <img
                  className="h-full w-full rounded-2xl object-cover group-hover:scale-110 transition-transform"
                  src={courseImg}
                  alt={"course_iamge"}
                />
              </Link>
              <div className="content py-3 ">
                <div className="price mb-3">
                  <h4 className="text-xl font-semibold">12.00 $</h4>
                </div>
                <ul className="">
                  <li className="pb-2 mb-2 border-b last:mb-0 last:border-none last:pb-0 border-gray-300 flex gap-4 items-center justify-between">
                    <p className="flex gap-1 w-full items-center text-gray">
                      <img
                        className="shrink-0 max-w-5"
                        src={language}
                        alt="language_icon"
                      />
                      <span>Language</span>
                    </p>
                    <span className="shrink-0">English</span>
                  </li>
                  <li className="pb-2 mb-2 border-b last:mb-0 last:border-none last:pb-0 border-gray-300 flex gap-4 items-center justify-between">
                    <p className="flex gap-1 w-full items-center text-gray">
                      <TfiAlarmClock className="text-lg font-semibold" />
                      <span>Duration</span>
                    </p>
                    <span className="shrink-0">03:20 M </span>
                  </li>
                </ul>

                <Link
                  to={"/play-course/advance-digital-marketing"}
                  className="inline-flex btn-outline-gray items-center gap-2  w-full text-center justify-center mb-2 mt-6"
                >
                  <span className="">Add to Cart</span>
                </Link>
                <Link
                  to={"/play-course/advance-digital-marketing"}
                  className="inline-flex btn-outline-gray items-center gap-2  w-full text-center justify-center"
                >
                  <span className="">Add to Wishlist</span>
                </Link>
                <Link
                  to={"/play-course/advance-digital-marketing"}
                  className="btn-primary  inline-flex items-center gap-2  w-full text-center justify-center mt-6 mb-2"
                >
                  <span className="">Buy Now</span>
                </Link>
                <Link
                  to={"/play-course/advance-digital-marketing"}
                  className="btn-primary  inline-flex items-center gap-2  w-full text-center justify-center "
                >
                  <FaPlay className="text-white " />
                  <span className="">Start Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseDetails;
