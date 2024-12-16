import React from "react";
import BreadCrumb from "../../components/front/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import ProductCard from "../../components/front/ProductCard/ProductCard";
import Slider from "react-slick";
import { homePageProductSettings } from "../home/carouselSetting";
import { Tabs } from "rsuite";

function ProductDetail() {
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
    },
    {
      id: 3,
      image:
        "https://d502jbuhuh9wk.cloudfront.net/courses/65f42c106998d02da03f8cf3/N9cku1710501339.png",
      lesson: "07",
      duration: "10:20",
      tutorProfile: "",
      tutor: "mr tony stark",
      ratting: 4,
      mrp: 3000,
      sellPrice: 2500,
      name: "Advance Digital Marketing",
      slug: "/",
    },
    {
      id: 4,
      image: "https://urbansparks.in/wp-content/uploads/2023/06/product03.png",
      lesson: "07",
      duration: "10:20",
      tutorProfile: "",
      tutor: "mr tony stark",
      ratting: 4,
      mrp: 3000,
      sellPrice: 2500,
      name: "Advance Digital Marketing",
      slug: "/",
    },
    {
      id: 5,
      image: "https://urbansparks.in/wp-content/uploads/2023/06/product03.png",
      lesson: "07",
      duration: "10:20",
      tutorProfile: "",
      tutor: "mr tony stark",
      ratting: 4,
      mrp: 3000,
      sellPrice: 2500,
      name: "Advance Digital Marketing",
      slug: "/",
    },
  ];
  return (
    <>
      <div className=" pb-[120px] pt-16 bg-gradient-to-r from-slate-100 to-slate-400 ">
        <div className="container">
          <BreadCrumb />
          <h2 className="text-3xl font-semibold ">Product Details</h2>
        </div>
      </div>
      <div className="sectionPadding -mt-[150px]">
        <div className="container">
          <div className="p-5 bg-white w-full max-w-[1080px] m-auto rounded-xl shadow-lg border">
            <div className="flex gap-6  lg:flex-col">
              <div className="productImage p-4 border rounded-lg w-full max-w-[400px] lg:m-auto sm:max-w-[300px] lg:border-0 ">
                <img
                  src="https://images.ctfassets.net/6nwv0fapso8r/6fHhKK91M3A1gWzMOnT2SC/e671b18c8ff765fe7537cb13fddf37e3/CC_ProductBook.png"
                  class="h-full w-full object-cover "
                  alt="Image"
                />
              </div>
              <div className="right w-full py-4">
                <h3 className="font-semibold text-2xl  capitalize mb-1">
                  rich dad poor dad
                </h3>
                <p className="mb-4 text-gray">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sequi, quaerat!
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-1.5 items-center">
                    {Array.from({ length: 5 }).map((_, i) => {
                      return <span key={i}>{starSvg("#F2930E")}</span>;
                    })}
                  </div>
                  <span>Ratting</span>
                </div>
                <div className="price flex gap-4">
                  <span className="text-xl text-gray-400 line-through">
                    Rs 499
                  </span>
                  <span className="font-semibold  text-xl">Rs 260</span>
                </div>

                <div className="buttons mt-10 flex gap-4">
                  <Link
                    to={""}
                    className="btn-outline-gray flex items-center justify-center gap-3 flex-1 text-center uppercase "
                  >
                    <HiOutlineShoppingBag className="text-2xl" /> Add to cart
                  </Link>
                  <Link
                    to={""}
                    className="btn-primary flex-1 text-center uppercase leading-7 justify-center"
                  >
                    <span>buy now</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-10">
          <div className="container">
            <div className="content">
              <div className=" courseDetails">
                <Tabs
                  className="rounded-lg w-full"
                  defaultActiveKey="1"
                  appearance="pills"
                >
                  <Tabs.Tab eventKey="1" title="Product Details">
                    <div className="p-3">
                      <p className="text-gray">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consectetur eaque soluta quas, officia quaerat ipsum,
                        sed sint mollitia deserunt laboriosam, saepe accusamus.
                        Aliquid possimus laboriosam ipsa facere distinctio
                        pariatur veniam culpa eos, dolorum perferendis, illo,
                        nobis ut at praesentium quibusdam dolorem eum
                        accusantium voluptatem sapiente. Dignissimos repellat
                        voluptates minus eum, atque obcaecati molestias maxime
                        provident, similique sed labore eius sint deserunt
                        libero quas illo cupiditate distinctio ab. Explicabo
                        blanditiis, necessitatibus obcaecati quos, modi
                        asperiores earum deleniti culpa, dolores repellendus
                        fuga nihil molestias dolor provident pariatur porro
                        veritatis dolorem odit? Obcaecati a alias ipsam dolorum
                        commodi neque eius odio aut dolore!
                      </p>
                    </div>
                  </Tabs.Tab>
                  <Tabs.Tab eventKey="2" title="Ratting & Reviews">
                    <div className="p-3">
                      <h5 className="font-semibold text-lg mb-3">
                        {" "}
                        Lorem ipsum dolor sit amet{" "}
                      </h5>
                      <p className="text-gray">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consectetur eaque soluta quas, officia quaerat ipsum,
                        sed sint mollitia deserunt laboriosam, saepe accusamus.
                        Aliquid possimus laboriosam ipsa facere distinctio
                        pariatur veniam culpa eos, dolorum perferendis, illo,
                        nobis ut at praesentium quibusdam dolorem eum
                        accusantium voluptatem sapiente. Dignissimos repellat
                        voluptates minus eum, atque obcaecati molestias maxime
                        provident, similique sed labore eius sint deserunt
                        libero quas illo cupiditate distinctio ab. Explicabo
                        blanditiis, necessitatibus obcaecati quos, modi
                        asperiores earum deleniti culpa, dolores repellendus
                        fuga nihil molestias dolor provident pariatur porro
                        veritatis dolorem odit? Obcaecati a alias ipsam dolorum
                        commodi neque eius odio aut dolore!
                      </p>
                    </div>
                  </Tabs.Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sectionPadding bg-light">
        <div className="container">
          <Slider {...homePageProductSettings}>
            {ProductData.map((item) => {
              return (
                <div className="mb-6" key={item.id}>
                  <ProductCard item={item} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
