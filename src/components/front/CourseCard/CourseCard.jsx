import { Link } from "react-router-dom";
import HeartCart from "../HeartCart/HeartCart";

function CourseCard({ item }) {
  function starSvg(color) {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 11.7246L10.3949 13.873C11.0166 14.2668 11.7774 13.6847 11.6138 12.9486L10.7139 8.90845L13.7162 6.18649C14.2643 5.69003 13.9698 4.74846 13.2499 4.68855L9.29871 4.3376L7.7526 0.519999C7.47447 -0.173333 6.52553 -0.173333 6.2474 0.519999L4.70129 4.32904L0.750115 4.67999C0.030233 4.7399 -0.264264 5.68147 0.283828 6.17793L3.28606 8.89989L2.38621 12.94C2.2226 13.6762 2.98339 14.2582 3.6051 13.8645L7 11.7246Z"
          fill={color}
        />
      </svg>
    );
  }
  return (
    <>
      <div className="card bg-light rounded-lg overflow-hidden block group hover:shadow-lg transition-all">
        <Link
          to={item.slug}
          className="imageBox  block h-[220px] overflow-hidden relative"
        >
          <img
            className="h-full w-full  object-cover group-hover:scale-110 transition-transform"
            src={item.image}
            alt={"course_iamge"}
          />
          <div className="absolute top-2 right-2">
            <HeartCart isWishList={item.isWishList} />
          </div>
        </Link>
        <div className="content p-3">
          <div className="flex gap-6 capitalize text-sm">
            <span>{item.duration} lessons</span>
            <span>{item.duration} Hours</span>
          </div>
          <div className="tutor mt-3  mb-2 flex gap-4 items-center">
            <div className="profile h-10 w-10 rounded-full overflow-hidden ">
              <img
                className="h-full w-full object-cover"
                src={item.image}
                alt={"course_iamge"}
              />
            </div>
            <span className="font-semibold capitalize">{item.tutor}</span>
          </div>
          <h3 className="text-gray group-hover:text-[color:var(--primary)] mb-2">
            <Link to={item.slug}>{item.name}</Link>
          </h3>

          <div className="ratting flex gap-2 items-center mt-1">
            {Array.from({ length: 5 }).map((_, i) => {
              return (
                <span key={i}>
                  {starSvg(i < item.ratting ? "#F2930E" : "#655E5E")}
                </span>
              );
            })}
            <span className="text-sm text-gray">Ratting</span>
          </div>

          <div className="price flex justify-between border-gray-400 pt-2 border-t mt-3">
            <span className="price text-primary text-lg font-semibold flex gap-1 items-center">
              <svg
                width="10"
                height="16"
                viewBox="0 0 13 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00093 9H4.75093C5.92293 9 7.02293 8.6 7.81193 7.923C8.26564 7.54367 8.61357 7.05347 8.82193 6.5H0.99993C0.734714 6.5 0.48036 6.39464 0.292824 6.20711C0.105287 6.01957 -6.97058e-05 5.76522 -6.97058e-05 5.5C-6.97058e-05 5.23478 0.105287 4.98043 0.292824 4.79289C0.48036 4.60536 0.734714 4.5 0.99993 4.5H8.82193C8.61357 3.94653 8.26564 3.45633 7.81193 3.077C7.02193 2.401 5.92293 2 4.75093 2H0.99993C0.734714 2 0.48036 1.89464 0.292824 1.70711C0.105287 1.51957 -6.97058e-05 1.26522 -6.97058e-05 1C-6.97058e-05 0.734784 0.105287 0.48043 0.292824 0.292893C0.48036 0.105357 0.734714 0 0.99993 0H4.74993L4.92993 0.00200009L4.99993 0H11.9999C12.2651 0 12.5195 0.105357 12.707 0.292893C12.8946 0.48043 12.9999 0.734784 12.9999 1C12.9999 1.26522 12.8946 1.51957 12.707 1.70711C12.5195 1.89464 12.2651 2 11.9999 2H9.57493C10.2364 2.69642 10.6937 3.56126 10.8969 4.5H11.9999C12.2651 4.5 12.5195 4.60536 12.707 4.79289C12.8946 4.98043 12.9999 5.23478 12.9999 5.5C12.9999 5.76522 12.8946 6.01957 12.707 6.20711C12.5195 6.39464 12.2651 6.5 11.9999 6.5H10.8969C10.6609 7.627 10.0319 8.654 9.11393 9.441C7.93393 10.452 6.36293 11 4.74993 11H3.71193L9.84993 16.24C10.0444 16.4143 10.163 16.6577 10.1804 16.9183C10.1978 17.1789 10.1125 17.4359 9.94281 17.6344C9.77315 17.833 9.53255 17.9573 9.27245 17.9807C9.01235 18.0042 8.75339 17.925 8.55093 17.76L0.35393 10.763L0.34393 10.754C0.16728 10.6015 0.0497881 10.3918 0.0119561 10.1615C-0.0258758 9.93125 0.0183551 9.695 0.13693 9.494C0.225282 9.34339 0.351528 9.21855 0.503109 9.13188C0.65469 9.04521 0.826322 8.99974 1.00093 9Z"
                  fill="#2E76B6"
                />
              </svg>
              {item.sellPrice?.toLocaleString()}
            </span>

            <Link
              to={item.slug}
              className="hover:text-[color:var(--primary)] flex items-center gap-1 group stroke-gray-500 hover:stroke-[color:var(--primary)]"
            >
              Enrol Now{" "}
              <span>
                <svg
                  className=""
                  width="12"
                  height="12"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
