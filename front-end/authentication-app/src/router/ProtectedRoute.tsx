import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { navigateLink } from "../config/navigationLink";
import { useSelector } from "react-redux/es/exports";

export const useAuth = () => {
  const { loggedIn } = useSelector((state: any) => state.loginDetails);

  return {
    isLoggedIn: loggedIn,
  };
};

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Outlet /> : <Navigate to={navigateLink.auth.login} />;
};

export default ProtectedRoute;
