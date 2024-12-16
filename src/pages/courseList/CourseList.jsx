import React from "react";
import BreadCrumb from "../../components/front/BreadCrumb/BreadCrumb";
import { Panel, PanelGroup } from "rsuite";
import { MdOutlineClear } from "react-icons/md";
import CourseCard from "../../components/front/CourseCard/CourseCard";

function CourseList() {
  const courseData = [
    {
      id: 1,
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg",
      lesson: "07",
      duration: "10:20",
      tutorProfile: "",
      tutor: "mr tony stark",
      ratting: 4,
      mrp: 3000,
      sellPrice: 2500,
      name: "Advance Digital Marketing",
      slug: "/course/advance-digital-marketing",
      isWishList: true,
    },
    {
      id: 1,
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg",
      lesson: "07",
      duration: "10:20",
      tutorProfile: "",
      tutor: "mr tony stark",
      ratting: 4,
      mrp: 3000,
      sellPrice: 2500,
      name: "Advance Digital Marketing",
      slug: "/course/advance-digital-marketing",
      isWishList: true,
    },
    {
      id: 1,
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg",
      lesson: "07",
      duration: "10:20",
      tutorProfile: "",
      tutor: "mr tony stark",
      ratting: 4,
      mrp: 3000,
      sellPrice: 2500,
      name: "Advance Digital Marketing",
      slug: "/course/advance-digital-marketing",
      isWishList: true,
    },
    {
      id: 1,
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg",
      lesson: "07",
      duration: "10:20",
      tutorProfile: "",
      tutor: "mr tony stark",
      ratting: 4,
      mrp: 3000,
      sellPrice: 2500,
      name: "Advance Digital Marketing",
      slug: "/course/advance-digital-marketing",
      isWishList: true,
    },
  ];
  const filterData = [
    {
      category: "Web Development",
      courses: [
        {
          name: "basics of html",
          slug: "/",
        },
        {
          name: "basics of css",
          slug: "/",
        },
        {
          name: "Advance css",
          slug: "/",
        },
        {
          name: "javascript",
          slug: "/",
        },
      ],
    },
    {
      category: "digital Marketing",
      courses: [
        {
          name: "digital marketing one",
          slug: "/",
        },
        {
          name: "how to talk with client",
          slug: "/",
        },
      ],
    },
    {
      category: "price",
      courses: [
        {
          name: "paid",
          slug: "/",
        },
        {
          name: "free",
          slug: "/",
        },
        {
          name: "discount",
          slug: "/",
        },
      ],
    },
  ];
  return (
    <>
      <div className="pt-16 md:py-12 pb-[120px] bg-gradient-to-r from-[#c6f8ec] to-[#c3d4f3] ">
        <div className="container">
          <div className="flex justify-between items-center sm:flex-col sm:justify-start sm:items-start sm:gap-3">
            <div className=" shrink-0">
              <BreadCrumb />
              <h2 className="text-3xl font-semibold ">Courses</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="sectionPadding -mt-[150px] md:mt-0">
        <div className="container">
          <div className="flex gap-6 md:flex-col">
            <div className="sideBar shrink-0 w-full filterSideBar bg-white  max-w-[280px] lg:max-w-[240px] md:max-w-full shadow-lg overflow-hidden  rounded-lg">
              <div className="courseContent">
                <div className="p-4 pb-2  flex justify-between">
                  <h3>Filter</h3>
                  <span className="text-sm cursor-pointer px-2 py-1 bg-light hover:bg-gray-100 rounded-md flex gap-1 items-center">
                    <MdOutlineClear />
                    Clear
                  </span>
                </div>
                <PanelGroup accordion>
                  {filterData.map((item, i) => {
                    return (
                      <Panel
                        defaultExpanded
                        className="capitalize"
                        header={
                          <>
                            <span className="w-full block text-left capitalize font-medium">
                              {item.category}
                            </span>
                          </>
                        }
                      >
                        <div className="content text-sm">
                          <ul>
                            {item.courses.map((it, index) => {
                              return (
                                <li className="flex cursor-pointer  gap-3 group justify-between py-2.5 px-2 border-b border-gray-300 last:pb-0 last:mb-0 last:border-0">
                                  <label
                                    htmlFor={it.name + i}
                                    className="flex items-center gap-2 w-full cursor-pointer"
                                  >
                                    <input
                                      type="checkbox"
                                      className=""
                                      id={it.name + i}
                                    />
                                    <span className="block group-hover:text-[color:var(--primary)] line-clamp-1">
                                      {it.name}
                                    </span>
                                  </label>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </Panel>
                    );
                  })}
                </PanelGroup>
              </div>
            </div>

            <div className="courses ">
              <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 sm:grid-cols-1">
                {courseData.map((item) => {
                  return <CourseCard key={item.id} item={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseList;
