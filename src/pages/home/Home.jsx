import CountUp from "react-countup";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CourseCard from "../../components/front/CourseCard/CourseCard";
import digitalMarketing from "../../assets/images/digitalMarketing.jpg";
import about from "../../assets/images/about.png";
import hero from "../../assets/images/hero.png";
import banner from "../../assets/images/banner.png";
import profile from "../../assets/images/profile.png";
import { FaPlay } from "react-icons/fa";
import ProductCard from "../../components/front/ProductCard/ProductCard";
import EventCard from "../../components/front/EventCard/EventCard";
import {
  blogSettings,
  homePageProductSettings,
  testimonialSetting,
} from "./carouselSetting";
import Slider from "react-slick";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import BlogCard from "../../components/front/BlogCard/BlogCard";

function Home() {
  const courseData = [
    {
      id: 1,
      image: digitalMarketing,
      lesson: "07",
      duration: "10:20",
      tutorProfile: "",
      tutor: "mr tony stark",
      ratting: 4,
      mrp: 3000,
      sellPrice: 2500,
      name: "Advance Digital Marketing",
      slug: "/course/advance-digital-marketing",
    },
    {
      id: 2,
      image: digitalMarketing,
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
      image: digitalMarketing,
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
  const EventData = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3DNasCvfOLMIxJyQtbNq7EfLkWnMazHE9xw&s",
      date: "04 july 2024",
      title: "Network marketing event with jogendar singh",
      description: "was started with the and guidance to those who are",
      mrp: 3000,
      sellPrice: 2500,
      slug: "/course/advance-digital-marketing",
    },
    {
      id: 2,
      image:
        "https://www.eventbrite.com/blog/wp-content/uploads/2023/02/Frame-1-3-min-1-3.png",
      date: "04 july 2024",
      title: "Network marketing event with jogendar singh",
      description:
        "was started with the aim of providing the best-quality education, started with the aim of providing the best-quality education, training and guidance to those who are",
      mrp: 3000,
      sellPrice: 2500,
      slug: "/course/advance-digital-marketing",
    },
    {
      id: 3,
      image: "https://www.vidyard.com/media/video-for-event-marketing.jpg",
      date: "04 july 2024",
      title: "Network marketing event with jogendar singh",
      description:
        "was started with the aim of providing the best-quality education, training and guidance to those who are",
      mrp: 3000,
      sellPrice: 2500,
      slug: "/course/advance-digital-marketing",
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
  ];
  const categories = [
    {
      id: 1,
      title: "web Development",
      course: 10,
      img: "https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=",
    },
    {
      id: 2,
      title: "Advance Web Development",
      course: 10,
      img: "https://img.freepik.com/premium-photo/html-system-websites-concept_23-2150323528.jpg?semt=ais_hybrid",
    },
    {
      id: 3,
      title: "Digital Marketing",
      course: 12,
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg",
    },
    {
      id: 4,
      title: "web Development",
      course: 10,
      img: "https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=",
    },
  ];

  return (
    <>
      <div className="hero  pt-16 pb-32 lg:py-14 md:py-12 relative">
        <img
          src={hero}
          alt="heroImage"
          className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
        />
        <div className="container">
          <div className="left max-w-[55%] md:max-w-full">
            <h1>
              <span className="text-primary">Academy</span> Starter is a
              community for <span className="text-primary">creative</span>{" "}
              people
            </h1>
            <p className="text-gray mb-6 md:text-sm">
              Embark on a Journey of Digital Discovery: Expert-Led Courses
              Designed to Equip
            </p>

            <Link
              to={"/courses"}
              className="btn-primary text-sm inline-flex items-center gap-3"
            >
              <span className="">Explore Courses</span>
              <FaChevronRight className="text-white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="counter max-w-[1080px] mx-auto -mt-[80px] md:px-2 rounded-[30px] lg:mt-0 lg:rounded-none w-full bg-primary p-8 mb-16">
        <div className="grid grid-cols-4 md:grid-cols-2 ">
          <div className="text-white text-center py-4 border-r-2  border-r-white">
            <h4 className="text-4xl md:text-3xl font-semibold">
              <CountUp end={10} duration={3} /> +
            </h4>
            <span className="md:text-sm">Skillful Instructors</span>
          </div>
          <div className="text-white text-center py-4 border-r-2 md:border-r-0 border-r-white">
            <h4 className="text-4xl md:text-3xl font-semibold">
              {" "}
              <CountUp end={150} duration={3} /> +
            </h4>
            <span className="md:text-sm">Happy Students</span>
          </div>
          <div className="text-white text-center py-4 border-r-2  border-r-white">
            <h4 className="text-4xl md:text-3xl font-semibold">
              {" "}
              <CountUp end={3000} duration={3} /> +
            </h4>
            <span className="md:text-sm">Live Classes</span>
          </div>
          <div className="text-white  py-4  text-center">
            <h4 className="text-4xl md:text-3xl font-semibold">
              {" "}
              <CountUp end={120} duration={3} /> +
            </h4>
            <span className="md:text-sm">Video Courses</span>
          </div>
        </div>
      </div>
      <section className="sectionPaddingBottom relative aboutUs">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="left max-w-[45%] md:max-w-full md:mb-6">
              <div className="sectionHeading">
                <h2>
                  About <span className="text-primary"> us </span>
                </h2>
                <p>We are network marketing experts</p>
              </div>

              <p className="border-s-2 mb-6 border-[color:var(--primary)] ps-2">
                A one Academy was started with the aim of providing the
                best-quality education, training and guidance to those who are
                willing to go the extra mile to turn their dreams of
                entrepreneurship into{" "}
              </p>

              <div className="flex gap-6 mb-8">
                <div className="box p-4 bg-[#E0E4FF] rounded-md max-w-[220px]">
                  <span className="text-xl font-semibold">6+ Year</span>
                  <p className="text-xs">
                    idance to those who are willing to go the extra mile to turn
                  </p>
                </div>
                <div className="box p-4 bg-[#F1E0FF] rounded-md max-w-[220px]">
                  <span className="text-xl font-semibold">10+ Year</span>
                  <p className="text-xs">
                    idance to those who are willing to go the extra mile to turn
                  </p>
                </div>
              </div>
              <Link
                to={"/courses"}
                className="btn-primary text-sm inline-flex items-center gap-3"
              >
                <span className="">Know More</span>
                <FaChevronRight className="text-white " />
              </Link>
            </div>

            <div className="right ps-16 lg:ps-0 max-w-[55%] md:max-w-full relative">
              <img
                src={about}
                alt="about_us_Image"
                className="max-w-[400px]  lg:ms-auto md:m-auto md:max-w-[340px] sm:max-w-[260px] w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="courses sectionPaddingBottom">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="sectionHeading">
              <h2>
                Top <span className="text-primary"> courses </span>
              </h2>
              <p>We provide the best industry level courses</p>
            </div>
            <Link
              to={"/course-list"}
              className="flex items-center group gap-3 hover:translate-x-4 transition-all hover:text-[color:var(--primary)] "
            >
              <span>View All Courses </span>
              <svg
                className="fill-gray-600 group-hover:fill-[color:var(--primary)]"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.0695 5.40008H0.565173C0.41528 5.40008 0.271526 5.46328 0.165536 5.57579C0.059545 5.6883 0 5.84089 0 6C0 6.15911 0.059545 6.3117 0.165536 6.42421C0.271526 6.53672 0.41528 6.59992 0.565173 6.59992H11.0695L6.94711 10.9746C6.84099 11.0872 6.78137 11.24 6.78137 11.3993C6.78137 11.5586 6.84099 11.7114 6.94711 11.8241C7.05324 11.9367 7.19717 12 7.34725 12C7.49734 12 7.64127 11.9367 7.7474 11.8241L12.834 6.42475C12.8866 6.36902 12.9283 6.30282 12.9568 6.22993C12.9853 6.15705 13 6.07891 13 6C13 5.92109 12.9853 5.84295 12.9568 5.77007C12.9283 5.69718 12.8866 5.63098 12.834 5.57525L7.7474 0.175936C7.64127 0.0632858 7.49734 0 7.34725 0C7.19717 0 7.05324 0.0632858 6.94711 0.175936C6.84099 0.288585 6.78137 0.441371 6.78137 0.600682C6.78137 0.759993 6.84099 0.912779 6.94711 1.02543L11.0695 5.40008Z" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
            {courseData.map((item) => {
              return <CourseCard key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>
      <section className="homeBanner relative h-[320px] sm:h-[340px] ">
        <img
          src={banner}
          alt="banner_image"
          className="h-full w-full object-cover "
        />
        <div className="overlay flex flex-col items-center justify-center text-center text-white sectionPadding  absolute top-0 left-0 h-full w-full bg-[#27262685]">
          <h2 className="text-[32px] font-semibold mb-2">
            A complite Learning Eco System
          </h2>
          <p className="mb-4">
            Use Mentors adda to access high-quality education materials without
            any limitations in the easiest way.
          </p>

          <div className=" w-16 h-16 rounded-full bg-white m-auto relative  cursor-pointer">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl ">
              <FaPlay className="text-[color:var(--primary)]" />
            </span>
            <div className="w-full h-full rounded-full bg-white animate-waterdrop  text-xl "></div>
          </div>
        </div>
      </section>
      <section className="sectionPadding category">
        <div className="container">
          <div className="sectionHeading text-center">
            <h2>
              Explore Top <span className="text-primary"> Categories </span>
            </h2>
            <p>We have more then 10 category experts</p>
          </div>

          <div className="grid grid-cols-4 gap-7 lg:gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {categories.map((item) => {
              return (
                <Link
                  to={item.slug}
                  key={item.id}
                  className={`h-[220px] lg:h-[160px] rounded-xl  relative overflow-hidden group `}
                >
                  <img
                    src={item.img}
                    className="h-full w-full object-cover"
                    alt=""
                  />
                  <div className="overlay absolute h-full top-0 left-0 w-full bg-white border transition-all group-hover:bg-[#2828286c]">
                    <div className=" px-4 py-3 bg-white w-full top-6 left-0 z-10 mt-6">
                      <h3 className="text-lg font-semibold capitalize">
                        {item.title}
                      </h3>
                      <p className="text-gray"> {item.course} Courses</p>
                    </div>
                    <span className="absolute flex items-center right-6 bottom-4 gap-2 group-hover:text-white hover:translate-x-4 transition-all">
                      Read More <FaChevronRight className=" " />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-light sectionPadding">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="sectionHeading ">
              <h2>
                Recent <span className="text-primary"> Products </span>
              </h2>
              <p>We have more then 10 category experts</p>
            </div>
            <Link
              to={"/product-list"}
              className="flex items-center group gap-3 hover:translate-x-4 transition-all hover:text-[color:var(--primary)] "
            >
              <span>View All products </span>
              <svg
                className="fill-gray-600 group-hover:fill-[color:var(--primary)]"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.0695 5.40008H0.565173C0.41528 5.40008 0.271526 5.46328 0.165536 5.57579C0.059545 5.6883 0 5.84089 0 6C0 6.15911 0.059545 6.3117 0.165536 6.42421C0.271526 6.53672 0.41528 6.59992 0.565173 6.59992H11.0695L6.94711 10.9746C6.84099 11.0872 6.78137 11.24 6.78137 11.3993C6.78137 11.5586 6.84099 11.7114 6.94711 11.8241C7.05324 11.9367 7.19717 12 7.34725 12C7.49734 12 7.64127 11.9367 7.7474 11.8241L12.834 6.42475C12.8866 6.36902 12.9283 6.30282 12.9568 6.22993C12.9853 6.15705 13 6.07891 13 6C13 5.92109 12.9853 5.84295 12.9568 5.77007C12.9283 5.69718 12.8866 5.63098 12.834 5.57525L7.7474 0.175936C7.64127 0.0632858 7.49734 0 7.34725 0C7.19717 0 7.05324 0.0632858 6.94711 0.175936C6.84099 0.288585 6.78137 0.441371 6.78137 0.600682C6.78137 0.759993 6.84099 0.912779 6.94711 1.02543L11.0695 5.40008Z" />
              </svg>
            </Link>
          </div>

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
      </section>

      <section className="events sectionPadding">
        <div className="container">
          <div className="sectionHeading text-center ">
            <h2>
              Upcoming <span className="text-primary"> Events </span>
            </h2>
            <p>
              best-quality education, training and guidance to those who ares
            </p>
          </div>

          <div className="grid grid-cols-3 gap-7 md:grid-cols-2 sm:grid-cols-1">
            {EventData.map((item) => {
              return <EventCard key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>

      <section className="testimonials sectionPadding bg-light">
        <div className="container">
          <div className="sectionHeading text-center ">
            <h2>
              What the peoples says
              <span className="text-primary"> about us </span>
            </h2>
            <p>best-quality education, training and guidance to ares</p>
          </div>

          <div className="slider-container">
            <div className=" max-w-[1080px] m-auto">
              <Slider {...testimonialSetting}>
                <div className="text-center">
                  <div className="tutor mt-3  mb-2 flex gap-4 items-center">
                    <div className="profile h-16 w-16 m-auto rounded-full overflow-hidden ">
                      <img
                        className="h-full w-full object-cover"
                        src={profile}
                        alt={"cleint_profile_iamge"}
                      />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg">Tony Stark</h3>
                  <p className="text-gray">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, et facere? Non quas, et temporibus ipsam veritatis
                    earum ad repudiandae?
                  </p>
                  <BiSolidQuoteAltLeft className="text-center text-4xl text-primary block m-auto mt-4 " />
                </div>
                <div className="text-center">
                  <div className="tutor mt-3  mb-2 flex gap-4 items-center">
                    <div className="profile h-16 w-16 m-auto rounded-full overflow-hidden ">
                      <img
                        className="h-full w-full object-cover"
                        src={profile}
                        alt={"cleint_profile_iamge"}
                      />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg">Tony Stark</h3>
                  <p className="text-gray">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, et facere? Non quas, et temporibus ipsam veritatis
                    earum ad repudiandae?
                  </p>
                  <BiSolidQuoteAltLeft className="text-center text-4xl text-primary block m-auto mt-4 " />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="blogs sectionPadding">
        <div className="container">
          <div className="sectionHeading text-center ">
            <h2>
              Our Latest
              <span className="text-primary"> Blog </span>
            </h2>
            <p>best-quality education, training and guidance to ares</p>
          </div>
          <Slider {...blogSettings}>
            <div className="mb-6">
              <BlogCard />
            </div>
            <div className="mb-6">
              <BlogCard />
            </div>
            <div className="mb-6">
              <BlogCard />
            </div>
          </Slider>

          <Link
            to={"/blogs"}
            className="btn-primary text-sm flex w-max mt-12 m-auto  items-center gap-3 px-8"
          >
            <span className="">View All Blogs</span>
            <FaChevronRight className="text-white" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
