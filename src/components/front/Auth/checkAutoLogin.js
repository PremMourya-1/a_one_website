import { USER_DETAILS } from "../../../Constant/Constant";
import { getLocaleStorageItem } from "../../../Utils/localeStorage";
import { userLogout } from "./auth";

export default function checkAutoLogin(navigate) {
  if (getLocaleStorageItem(USER_DETAILS)) {
  } else {
    userLogout(navigate);
  }
}
