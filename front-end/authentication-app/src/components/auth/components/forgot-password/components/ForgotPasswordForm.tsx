import React, { useState } from "react";
import { forgotPassword } from "../constants";
import { FloatingLabelInput } from "../../../../../helper/FloatingLabelInput";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState<string>("");
  const handleSubmit = () => {
    const data = email;
    console.log("data", data);
  };
  return (
    <>
      <div className="text-center">
        <img
          className="mx-auto mb-5 lg:hidden w-32"
          src="/logo.png"
          alt="logo"
        />
        <div className="mt-4">
          <h2 className="text-3xl font-semibold text-slate-600 dark:text-navy-100">
            {forgotPassword.title}
          </h2>
          <p className="text-slate-400 dark:text-navy-300 mt-2 text-sm+">
            {forgotPassword.description}
          </p>
        </div>
      </div>
      <form className="mt-10" onSubmit={handleSubmit}>
        <div className="form-group flex flex-col">
          <FloatingLabelInput
            name={forgotPassword.form.email.placeholder}
            value={email}
            setValue={setEmail}
          />
          {/* {errors.Email && <p className="mt-0.5 ml-1.5 text-xs+ text-red-600">{errors.Email.message}</p>} */}
        </div>
        <button className="btn w-full h-12 mt-6 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
          {forgotPassword.btnTxt}
        </button>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
