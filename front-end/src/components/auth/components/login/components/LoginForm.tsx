import React, { useState } from "react";
import { FloatingLabelInput } from "../../../../../helper/FloatingLabelInput";
import { encryptPassword } from "../../../../../helper/auth";
import { signUp } from "../../sign-up/constants";
import { ForgotPasswordPageLink } from "./PageLinks";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    const data = {
      email: email,
      password: encryptPassword(password),
    };
    console.log("data", data);
  };
  return (
    <section className="space-y-4 mt-10">
      <div className="group mb-4">
        <FloatingLabelInput value={email} setValue={setEmail} name="Email" />

        {/* {errors.Email && <span className="text-red-500 text-xs+ ml-2">{errors.Email?.message}</span>} */}
      </div>
      <div className="group mb-2">
        <FloatingLabelInput
          type="password"
          value={password}
          setValue={setPassword}
          name="Password"
        />

        {/* {errors.Password && <span className="text-red-500 text-xs+ ml-2">{errors.Password?.message}</span>}
				{!errors.Password && getValues("Password") && errors.CPassword && (
					<span className="text-red-500 text-xs+ ml-2">{errors.CPassword?.message}</span>
				)} */}
      </div>

      <div className="flex items-center justify-end">
        <ForgotPasswordPageLink />
      </div>

      <button
        id="Signup_Submit"
        onClick={handleSubmit}
        className="btn w-full h-12 mt-6 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
      >
        {signUp.btnTxt}
      </button>
    </section>
  );
};

export default LoginForm;
