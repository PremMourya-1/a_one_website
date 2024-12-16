import { USER_DETAILS } from "../../../Constant/Constant";
import {
  removeLoaleStorageItem,
  setLocaleStorageItem,
} from "../../../Utils/localeStorage";

export default function userLogin(setLoginModal, setIsLogin) {
  setLocaleStorageItem(USER_DETAILS, { login: "true", name: "tony stark" });
  setLoginModal(false);
  setIsLogin(true);
}
function userLogout(navigate) {
  removeLoaleStorageItem(USER_DETAILS);
  navigate("/");
}

export { userLogout };
