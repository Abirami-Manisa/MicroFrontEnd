import React from "react";
import { Link, useLocation } from "react-router-dom";
import { login } from "../constants";
import { navigateLink } from "../../../../../config/navigationLink";

export const SignUpPageLink = () => {
  const location = useLocation();
  return (
    <p className="mt-4 text-center text-sm+">
      <span>{login.createAccountText}</span>
      <Link
        to={`${navigateLink.auth.createAccount}${location.search}`}
        className="inline-block text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
      >
        {login.createAccountBtnLink}
      </Link>
    </p>
  );
};

export const ForgotPasswordPageLink = () => {
  const location = useLocation();
  return (
    <Link
      to={`/auth/forgot-password${location.search}`}
      className="inline-block text-sm+ text-slate-400 transition-colors line-clamp-1 hover:text-slate-800 focus:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100 dark:focus:text-navy-100"
    >
      {login.forgotPasswordText}
    </Link>
  );
};
