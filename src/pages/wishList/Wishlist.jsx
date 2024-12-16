import { useState } from "react";
import BreadCrumb from "../../components/front/BreadCrumb/BreadCrumb";
import CourseCard from "../../components/front/CourseCard/CourseCard";
import ProductCard from "../../components/front/ProductCard/ProductCard";

function Wishlist() {
  const [tab, setTab] = useState(1);
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
  ];
  const ProductData = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ38N5r35bm0H1Wc4ulA6f9H-ha9R03YjeJCw&s",
      ratting: 4,
      mrp: 3000,
      sellPrice: 2500,
      name: "Advance Digital Marketing",
      slug: "/course/advance-digital-marketing",
      isWishlist: true,
    },
    {
      id: 2,
      image:
        "https://industrylearning.co.in/wp-content/uploads/2021/05/1622098249-600x553.png",
      lesson: "07",
      duration: "10:20",
      tutorProfile: "",
      tutor: "mr tony stark",
      ratting: 4,
      mrp: 3000,
      sellPrice: 2500,
      name: "Advance Digital Marketing",
      slug: "/",
      isWishlist: true,
    },
  ];
  return (
    <>
      <div className="sectionPadding bg-gradient-to-r from-[#c6f6f8] to-[#f1c3f3] ">
        <div className="container">
          <div className="flex justify-between items-center sm:flex-col sm:justify-start sm:items-start sm:gap-3">
            <div className=" shrink-0">
              <BreadCrumb />
              <h2 className="text-3xl font-semibold mb-3">Wishlist</h2>
            </div>
            <div className="buttons p-1.5 flex gap-2 bg-[#ffffff75] rounded-lg overflow-hidden">
              <button
                onClick={() => {
                  setTab(1);
                }}
                className={`px-3 rounded-lg py-1.5  ${
                  tab === 1
                    ? "bg-[color:var(--primary)] text-white"
                    : "bg-white"
                }`}
              >
                Courses
              </button>
              <button
                onClick={() => {
                  setTab(2);
                }}
                className={`px-3 rounded-lg py-1.5  ${
                  tab === 2
                    ? "bg-[color:var(--primary)] text-white"
                    : "bg-white"
                }`}
              >
                Products
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="sectionPadding bg-light">
        <div className="container">
          {tab === 1 ? (
            <div className="grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
              {courseData.map((item) => {
                return <CourseCard key={item.id} item={item} />;
              })}
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-7 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              {ProductData.map((item) => {
                return <ProductCard key={item.id} item={item} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Wishlist;
