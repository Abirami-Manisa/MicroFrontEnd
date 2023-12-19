import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "authentication_app/Login";
import SignUpPage from "authentication_app/SignUp";
import ForgotPasswordPage from "authentication_app/ForgotPassword";
import AppLogout from "authentication_app/Logout";
import AuthLayout from "authentication_app/AuthLayout";
import DashboardPage from "dashboard_app/Profile";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<DashboardPage />} />
        </Route>

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
