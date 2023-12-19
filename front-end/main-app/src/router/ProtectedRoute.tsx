import React from "react";
import { getLoggedUser } from "../helper/auth";
import { Navigate, Outlet } from "react-router-dom";
import { navigateLink } from "../config/navigationLink";

export const useAuth = () => {
  const user = getLoggedUser();
  return {
    isLoggedIn: !!user,
  };
};

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Outlet /> : <Navigate to={navigateLink.auth.login} />;
};

export default ProtectedRoute;
