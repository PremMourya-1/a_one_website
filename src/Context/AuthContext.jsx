import { createContext, useState } from "react";
import { getLocaleStorageItem } from "../Utils/localeStorage";
import { USER_DETAILS } from "../Constant/Constant";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loginModal, setLoginModal] = useState(false);
  const [isLogin, setIsLogin] = useState(getLocaleStorageItem(USER_DETAILS));

  return (
    <AuthContext.Provider
      value={{ loginModal, setLoginModal, isLogin, setIsLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
}
