import React from "react";
import BreadCrumb from "../../components/front/BreadCrumb/BreadCrumb";
import profile from "../../assets/images/profile.png";
import { SlCalender } from "react-icons/sl";
import BlogCard from "../../components/front/BlogCard/BlogCard";
import Slider from "react-slick";
import { blogSettings } from "../home/carouselSetting";

function BlogDetails() {
  return (
    <>
      {" "}
      <div className="py-16 pb-[120px]  bg-gradient-to-r from-[#c6f6f8] to-[#f1c3f3] ">
        <div className="container">
          <div className="flex">
            <div className="max-w-[68%] lg:max-w-full  shrink-0">
              <BreadCrumb />

              <h2 className="text-3xl font-semibold mb-3">Blog Detail</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="blogDetails -mt-[100px]">
        <div className="container">
          <div className="bg-white rounded-xl p-6 shadow-xl border max-w-[1080px]  m-auto">
            <div className="imgBox h-[460px] lg:h-[300px] sm:h-[280px] rounded-xl overflow-hidden">
              <img
                src="https://vh-info.com/wp-content/uploads/2024/09/What-is-Blogging-For-Business.png"
                alt="blog_image"
                className="h-full w-full object-cover "
              />
            </div>

            <div className="content pt-4">
              <div className="basicInfo mb-4">
                <h2 className="text-2xl font-semibold mb-4">
                  Balance your priorities in life and enjoy a beautiful life
                </h2>
                <div className="flex justify-between">
                  <div className="profile">
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
                      </div>
                    </div>
                  </div>
                  <span className="right flex items-center gap-2">
                    <SlCalender />
                    15 july 2020
                  </span>
                </div>
              </div>

              <p className="text-gray">
                Living a productive and meaningful life is a balancing act. With
                the pressures of today’s demanding and high paced world, most
                people struggle to find a reasonable balance. We can easily be
                drawn away from our priorities when one aspect of our life
                consumes the bulk of our time. To a large extent, it is much
                like walking a tightrope. When we drift too much in one
                direction or the other, we become unbalanced. To sustain what we
                value most in our lives, we must constantly maintain our
                equilibrium as we move forward to achieve our purpose and goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sectionPadding">
        <div className="container">
          <Slider {...blogSettings}>
            <div className="mb-4">
              <BlogCard />
            </div>
            <div className="mb-4">
              <BlogCard />
            </div>
            <div className="mb-4">
              <BlogCard />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
