import { Route, Routes } from "react-router";
import websiteRoutes from "../Data/websiteRoutes";
import WebLayout from "../layout/webLayout";
import dashboardRoutes from "../Data/dashboardRoutes";
import DashboardLayout from "../layout/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import ScrollTop from "../components/common/ScrollToTop";

function RouteData() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WebLayout />}>
          {websiteRoutes.map(({ id, path, element, isProtected }) => {
            const Element = element;
            return (
              <Route
                key={id}
                path={path}
                element={
                  <ProtectedRoute isProtected={isProtected}>
                    <Element />
                    <ScrollTop />
                  </ProtectedRoute>
                }
              />
            );
          })}
        </Route>

        <Route path="/play-course" element={<DashboardLayout />}>
          {dashboardRoutes.map(({ id, path, element, isProtected }) => {
            const Element = element;
            return (
              <Route
                key={id}
                path={path}
                element={
                  <ProtectedRoute isProtected={isProtected}>
                    <Element />
                    <ScrollTop />
                  </ProtectedRoute>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default RouteData;
