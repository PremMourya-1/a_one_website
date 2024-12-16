import React from "react";
import BreadCrumb from "../../components/front/BreadCrumb/BreadCrumb";
import BlogCard from "../../components/front/BlogCard/BlogCard";

function BlogList() {
  return (
    <>
      {" "}
      <div className="pt-16 md:py-12 pb-[120px] bg-gradient-to-r from-[#c6f8ec] to-[#c3d4f3] ">
        <div className="container">
          <div className="flex justify-between items-center sm:flex-col sm:justify-start sm:items-start sm:gap-3">
            <div className=" shrink-0">
              <BreadCrumb />
              <h2 className="text-3xl font-semibold ">Latest Blogs</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="sectionPadding -mt-[150px] md:mt-0">
        <div className="container">
          <div className="flex gap-6 md:flex-col">
            <div className="blogs ">
              <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 sm:grid-cols-1">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogList;
