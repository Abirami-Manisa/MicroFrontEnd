import React from "react";
import LoginForm from "./components/LoginForm";
import { SignUpPageLink } from "./components";

const LoginPage = () => {
  return (
    <>
      <div className="flex w-full max-w-lg grow flex-col justify-center p-5 bg-white">
        <LoginForm />
        <SignUpPageLink />
      </div>
    </>
  );
};

export default LoginPage;
