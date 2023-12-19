import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AuthLayout from "../layout/auth";
import LoginPage from "../components/auth/components/login";
import SignUpPage from "../components/auth/components/sign-up";
import ForgotPasswordPage from "../components/auth/components/forgot-password";
import AppLogout from "../components/auth/components/logout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}></Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="/auth/login" />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="logout" element={<AppLogout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
