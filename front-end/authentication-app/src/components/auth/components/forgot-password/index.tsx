import React from "react";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import { Link, useLocation } from "react-router-dom";
import { navigateLink } from "../../../../config/navigationLink";
import { Icon } from "@iconify/react";
import { forgotPassword } from "./constants";
import "../../../../index.scss";
const BackToLogin = () => {
  const location = useLocation();
  return (
    <Link
      to={`${navigateLink.auth.login}${location.search}`}
      className="no-underline space-x-2 absolute top-20 text-left flex cursor-pointer text-[#00000099]"
    >
      <Icon
        width={20}
        icon="mingcute:arrow-left-line"
        className="fill-current"
      />
      <span>{forgotPassword.loginText}</span>
    </Link>
  );
};

const ForgotPasswordPage = () => {
  return (
    <div className="flex w-full max-w-md grow flex-col justify-center p-5 bg-white">
      <BackToLogin />
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPasswordPage;
