import { Navigate } from "react-router-dom";
import { USER_DETAILS } from "../Constant/Constant";
import { getLocaleStorageItem } from "../Utils/localeStorage";

const ProtectedRoute = ({ children, isProtected }) => {
  if (isProtected) {
    if (getLocaleStorageItem(USER_DETAILS)) {
      return children;
    } else {
      return <Navigate to={"/"} replace />;
    }
  } else return children;
};

export default ProtectedRoute;
