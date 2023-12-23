import React from "react";
import LoginForm from "./components/LoginForm";
import { SignUpPageLink } from "./components";
import { login } from "./constants";
import "../../../../index.scss";
const LoginPage = () => {
  return (
    <div className="flex w-full max-w-lg grow flex-col justify-center p-5 bg-white">
      <div className="text-center">
        <div className="mt-4">
          <h2 className="text-3xl font-semibold text-slate-600 dark:text-navy-100">
            {login.title}
          </h2>
        </div>
      </div>
      <LoginForm />
      <SignUpPageLink />
    </div>
  );
};

export default LoginPage;
