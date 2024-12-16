import ViewCourse from "../pages/viewCourse/ViewCourse";

const dashboardRoutes = [
  {
    id: 1,
    element: ViewCourse,
    path: "/play-course/:slug",
    isProtected: true,
  },
];

export default dashboardRoutes;
