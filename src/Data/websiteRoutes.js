import BlogDetails from "../pages/blogDetails/BlogDetails";
import BlogList from "../pages/blogList/BlogList";
import Cart from "../pages/cart/Cart";
import CourseDetails from "../pages/courseDetails/CourseDetails";
import CourseList from "../pages/courseList/CourseList";
import Home from "../pages/home/Home";
import MyCourses from "../pages/myCourses/MyCourses";
import PaymentHistory from "../pages/paymentHistory/PaymentHistory";
import ProductDetail from "../pages/productDetail/ProductDetail";
import ProductList from "../pages/productList/ProductList";
import Profile from "../pages/profile/Profile";
import Wishlist from "../pages/wishList/Wishlist";

const websiteRoutes = [
  {
    id: 1,
    element: Home,
    path: "/",
    isProtected: false,
  },
  {
    id: 2,
    element: CourseDetails,
    path: "/course/:slug",
    isProtected: false,
  },
  {
    id: 3,
    element: Wishlist,
    path: "/wishlist",
    isProtected: true,
  },
  {
    id: 4,
    element: CourseList,
    path: "/course-list",
    isProtected: false,
  },
  {
    id: 5,
    element: Cart,
    path: "/shopping-cart",
    isProtected: true,
  },
  {
    id: 6,
    element: BlogDetails,
    path: "/blog/blog-detail",
    isProtected: false,
  },
  {
    id: 7,
    element: BlogList,
    path: "/blogs",
    isProtected: false,
  },
  {
    id: 8,
    element: Profile,
    path: "/profile",
    isProtected: true,
  },
  {
    id: 9,
    element: MyCourses,
    path: "/my-courses",
    isProtected: true,
  },
  {
    id: 10,
    element: ProductList,
    path: "/product-list",
    isProtected: false,
  },
  {
    id: 11,
    element: ProductDetail,
    path: "/product/:slug",
    isProtected: false,
  },
  {
    id: 12,
    element: PaymentHistory,
    path: "/payment-history",
    isProtected: true,
  },
];

export default websiteRoutes;
