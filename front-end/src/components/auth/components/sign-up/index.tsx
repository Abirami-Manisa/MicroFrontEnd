import React from "react";
import { BackToLogin } from "./components";
import { signUp } from "./constants";
import logo from "../../../../assets/logo.png";
import SignUpForm from "./components/SignUpForm";

const SignUpPage = () => {
  return (
    <section className="flex w-full max-w-lg grow flex-col justify-center p-5 bg-white">
      <div className="text-center">
        <img className="mx-auto mb-5 lg:hidden w-32" src={logo} alt="logo" />
        <div className="mt-4">
          <h2 className="text-3xl font-semibold text-slate-600 dark:text-navy-100">
            {signUp.title}
          </h2>
          <BackToLogin />
        </div>
      </div>
      <SignUpForm />
    </section>
  );
};

export default SignUpPage;
