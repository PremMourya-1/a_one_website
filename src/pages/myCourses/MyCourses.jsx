import React from "react";
import BreadCrumb from "../../components/front/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";

function MyCourses() {
  const myCourses = [
    {
      image:
        "https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
      name: "advance Web development",
      tutor: "mr tony stark",
      progress: 20,
      slug: "advance-web-development",
    },
    {
      image:
        "https://cdn-images-1.medium.com/max/958/1*dbggYEdKfBg-4SqRqrkFow.png",
      name: "advance Javascript",
      tutor: "mr tony stark",
      progress: 0,
      slug: "advance-javascript",
    },
  ];
  return (
    <>
      <div className=" pb-[120px] pt-16 bg-gradient-to-r from-slate-100 to-slate-400 ">
        <div className="container">
          <div className="flex">
            <div className=" shrink-0">
              <BreadCrumb />
              <h2 className="text-3xl font-semibold ">My Courses</h2>
            </div>
          </div>
        </div>
      </div>
      <div className=" sectionPadding -mt-[150px]">
        <div className="container">
          <div className="">
            <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
              {myCourses.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-white shadow-lg  border"
                  >
                    <div className="imgBox mb-3 h-[180px] rounded-md overflow-hidden">
                      <img
                        src={item.image}
                        alt="course_image"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <h3 className="text-lg font-semibold line-clamp-2 mb-2 capitalize">
                      {item.name}
                    </h3>
                    <div className="progressContainer mb-6 ">
                      <div className="flex justify-between text-sm py-2">
                        <span className="text-gray uppercase font-medium">
                          Progress
                        </span>
                        <span className="text-gray">{item.progress}%</span>
                      </div>

                      <div className="progress mb-4 rounded-full bg-gray-200 overflow-hidden">
                        <div
                          style={{ width: `${item.progress}%` }}
                          className="progressBar bg-primary h-2"
                        ></div>
                      </div>
                    </div>

                    {item.progress > 0 ? (
                      <Link
                        to={`/play-course/${item.slug}`}
                        className="btn-primary w-full block text-center"
                      >
                        <span>Continue</span>
                      </Link>
                    ) : (
                      <Link
                        to={`/play-course/${item.slug}`}
                        className="btn-outline-gray w-full block text-center"
                      >
                        <span>Start Now</span>
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCourses;
