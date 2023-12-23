import React, { useState } from "react";
import { FloatingLabelInput } from "../../../../../helper/FloatingLabelInput";
import { setLoginData } from "../../../../../helper/auth";
import { ForgotPasswordPageLink } from "./PageLinks";
import { login } from "../constants";
import { validateEmail } from "../../../../../helper/regex";
import { useDispatch } from "react-redux";
import { CONSTANTS } from "../../../../../redux/saga/types";
import { useNavigate } from "react-router-dom";
import { navigateLink } from "../../../../../config/navigationLink";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();
  const errors = login.form;
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (email === "" || password === "") {
      setError(true);
    } else {
      setError(false);
      const data = {
        email,
        password,
      };
      dispatch({
        type: CONSTANTS.USER_LOGIN,
        payload: data,
        onLogin: () => navigate(navigateLink.dashboard),
      });
    }
  };
  return (
    <section className="space-y-4 mt-10">
      <div className="group mb-4">
        <FloatingLabelInput value={email} setValue={setEmail} name="Email" />
        {error && email === "" && (
          <span className="text-red-500 text-xs+ ml-2">
            {errors.email.error.required}
          </span>
        )}
        {error && email !== "" && !validateEmail(email) && (
          <span className="text-red-500 text-xs+ ml-2">
            {errors.email.error.regex}
          </span>
        )}
      </div>
      <div className="group mb-2">
        <FloatingLabelInput
          type="password"
          value={password}
          setValue={setPassword}
          name="Password"
        />
        {error && password === "" && (
          <span className="text-red-500 text-xs+ ml-2">
            {errors.password.error.required}
          </span>
        )}
      </div>

      <div className="flex items-center justify-end">
        <ForgotPasswordPageLink />
      </div>

      <button
        id="Signup_Submit"
        onClick={handleSubmit}
        className="btn w-full h-12 mt-6 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
      >
        {login.btnTxt}
      </button>
    </section>
  );
};

export default LoginForm;
