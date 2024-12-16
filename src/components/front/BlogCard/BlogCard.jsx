import { FaChevronRight, FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <>
      <div className="bg-white block shadow-lg hover:shadow-xl p-3 rounded-xl group border-b-2 border-transparent hover:border-[color:var(--primary)] transition-all">
        <Link
          to={"/blog/blog-detail"}
          className="imgBox rounded-md overflow-hidden h-[240px] block"
        >
          <img
            className="h-full w-full object-cover transition-all  group-hover:scale-110"
            src="https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e.png"
            alt=""
          />
        </Link>
        <div className="content p-3">
          <div className="name flex justify-between items-center pb-3 border-b text-sm mb-2">
            <span className="left flex items-center gap-2">
              <FaUser />
              Tony Stark
            </span>

            <span className="right flex items-center gap-2">
              <SlCalender />
              15 july 2020
            </span>
          </div>
          <h3 className="font-semibold text-lg line-clamp-2 mb-2 group-hover:text-[color:var(--primary)]">
            <Link to={"/blog/blog-detail"}>
              Balance your priorities in life and enjoy a beautiful life
            </Link>
          </h3>
          <p className="text-gray text-sm">
            was started with the aim of providing the best-qualit was started
            with the aim of providing of providing the best-qualit was started
            with the ...
          </p>

          <Link
            to={"/blog/blog-detail"}
            className="gap-2 group mt-4 hover:text-[color:var(--primary)] flex items-center"
          >
            Read More{" "}
            <FaChevronRight className="text-gray-600 text-sm group-hover:text-[color:var(--primary)]" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
