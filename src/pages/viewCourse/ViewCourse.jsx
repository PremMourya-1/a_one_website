import { useParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import { IoArrowBack } from "react-icons/io5";
import { Panel, PanelGroup, Tabs } from "rsuite";
import { useState } from "react";

import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import profile from "../../assets/images/profile.png";
function ViewCourse() {
  const courseName = useParams().slug?.split("-").join(" ");
  const [courseContent, setCourseContent] = useState([
    {
      id: 1,
      title: "basics of html",
      cheptors: [
        {
          id: 1,
          title: "tags",
          duration: "10:16",
          watshed: true,
        },
        {
          id: 2,
          title: "inline and block level elements",
          duration: "15:16",
        },
        {
          id: 3,
          title: "cemtic tags in html",
          duration: "24:56",
        },
        {
          id: 4,
          title: "form and tabels",
          duration: "20:18",
        },
      ],
    },
    {
      id: 1,
      title: "css",
      cheptors: [
        {
          id: 1,
          title: "tags",
          duration: "10:16",
        },
        {
          id: 2,
          title: "inline and block level elements",
          duration: "15:16",
        },
        {
          id: 3,
          title: "cemtic tags in html",
          duration: "24:56",
        },
        {
          id: 4,
          title: "form and tabels",
          duration: "20:18",
        },
      ],
    },
    {
      id: 1,
      title: "javascript",
      cheptors: [
        {
          id: 1,
          title: "introduction of javascript & how javascript works",
          duration: "10:16",
        },
        {
          id: 2,
          title: "inline and block level elements",
          duration: "15:16",
        },
        {
          id: 3,
          title: "cemtic tags in html",
          duration: "24:56",
        },
        {
          id: 4,
          title: "form and tabels",
          duration: "20:18",
        },
      ],
    },
  ]);
  return (
    <>
      <div className="py-4 bg-primary text-white">
        <div className="container">
          <div className="flex justify-between">
            <div className="heading flex gap-3 items-center">
              <button
                onClick={() => {
                  history.back();
                }}
                className="backButton flex items-center justify-center  h-10 w-10 rounded-full hover:bg-gray-200 hover:text-gray-600"
              >
                <IoArrowBack />
              </button>
              <h2 className="capitalize text-lg ">{courseName}</h2>
            </div>
            <div className="profile h-10 w-10 rounded-full overflow-hidden ">
              <img
                className="h-full w-full object-cover"
                src={profile}
                alt={"teacher"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light">
        <div className="container py-10 ">
          <div className="flex lg:flex-col">
            <div className="max-w-[70%] lg:max-w-full w-full pe-6 lg:pe-0 lg:mb-6">
              <VideoPlayer />
              <div className="content mt-4">
                <div className="bg-white shadow-md p-4 rounded-xl courseDetails">
                  <Tabs
                    className="rounded-lg w-full"
                    defaultActiveKey="1"
                    appearance="pills"
                  >
                    <Tabs.Tab eventKey="1" title="Overview">
                      <div className="p-3">
                        <h2 className="text-base">Summary</h2>
                      </div>
                    </Tabs.Tab>
                    <Tabs.Tab eventKey="2" title="Curriculum">
                      <div className="p-3">
                        <h2 className="text-base">Live Classes</h2>
                      </div>
                    </Tabs.Tab>
                    <Tabs.Tab eventKey="3" title="Details">
                      <div className="p-3">
                        <h2 className="text-base">Certificate</h2>
                      </div>
                    </Tabs.Tab>
                    <Tabs.Tab eventKey="4" title="Instructor">
                      <div className="p-3">
                        <h2 className="text-base">Forum</h2>
                      </div>
                    </Tabs.Tab>
                  </Tabs>
                </div>
              </div>
            </div>
            <div className="card max-w-[30%] lg:max-w-full w-full">
              <div className="courseHeading  border-b p-5">
                <h4 className="text-xl font-medium capitalize ">
                  Course curriculum{" "}
                </h4>
                <p className="text-sm">35.00% Completed (7/20)</p>
              </div>

              <div className="courseContent">
                <PanelGroup accordion defaultActiveKey={1}>
                  {courseContent.map((item, i) => {
                    return (
                      <Panel
                        className="capitalize"
                        header={
                          <>
                            <span className="w-full block text-left capitalize font-medium">
                              {item.title}
                            </span>
                          </>
                        }
                        eventKey={i + 1}
                      >
                        <div className="content text-sm">
                          <ul>
                            {item.cheptors.map((it) => {
                              return (
                                <li className="flex cursor-pointer gap-3 group justify-between py-2.5 px-2 border-b border-gray-300 last:pb-0 last:mb-0 last:border-0">
                                  <div className="flex items-center gap-2">
                                    <span>
                                      {it.watshed ? (
                                        <FaCheckCircle className="text-lg text-green-500" />
                                      ) : (
                                        <FaRegCircleCheck className="text-lg text-gray-500" />
                                      )}
                                    </span>
                                    <span className=" group-hover:text-[color:var(--primary)] line-clamp-1">
                                      {it.title}
                                    </span>
                                  </div>
                                  <span>{it.duration}</span>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewCourse;
