/* eslint-disable react/prop-types */
import { auth } from "../services/authService";
import SignUp from "../signup";
import RoleLogin from "../rolebaselogin";
import { getLocalStorageItem } from "./localStorage";
import AdminLogin from "../adminlogin";
import UserLogin from "../userlogin";
import ForgotPassword from "../forgotPassword";

export function PrivateRoutes({ permissions, children }) {
  if (hasPermission(permissions)) {
    return <div>{children}</div>;
  }

  if (window.location.pathname === "/signup") return <SignUp />;
  if (window.location.pathname === "/adminlogin") return <AdminLogin />;
  if (window.location.pathname === "/userlogin") return <UserLogin />;
  if (window.location.pathname === "/forgotPassword") return <ForgotPassword />;
  else {
    window.location === "/";
    return <RoleLogin />;
  }
}

function hasPermission(permissions) {
  const user = auth.getCurrentUserDetails();
  console.log("userr");
  if (user && permissions.includes(getLocalStorageItem("userType"))) return true;

  return false;
}
