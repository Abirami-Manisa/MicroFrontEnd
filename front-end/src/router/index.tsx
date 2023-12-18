import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AuthLayout from "../layout/auth";
import * as Auth from "../components/auth";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}></Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="/auth/login" />} />
          <Route path="login" element={<Auth.LoginPage />} />
          <Route path="signup" element={<Auth.SignUpPage />} />
          <Route path="forgot-password" element={<Auth.ForgotPasswordPage />} />
          <Route path="logout" element={<Auth.AppLogout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
