import React, { useState } from "react";
import { signUp } from "../constants";
import { FloatingLabelInput } from "../../../../../helper/FloatingLabelInput";
import { encryptPassword } from "../../../../../helper/auth";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSubmit = () => {
    const data = {
      "first name": firstName,
      "last name": lastName,
      email: email,
      password: encryptPassword(password),
    };
    console.log("data", data);
  };
  return (
    <section className="space-y-4 mt-10">
      <div className="flex flex-col space-y-1">
        <div className="flex space-x-3">
          <FloatingLabelInput
            value={firstName}
            setValue={setFirstName}
            name="First Name"
          />

          <FloatingLabelInput
            setValue={setLastName}
            value={lastName}
            name="Last Name"
          />
        </div>
        {/* {errors.FirstName && !errors.LastName && (
					<span className="text-red-500 text-xs+ ml-2">{errors.FirstName?.message}</span>
				)}
				{!errors.FirstName && errors.LastName && (
					<span className="text-red-500 text-xs+ ml-2">{errors.LastName?.message}</span>
				)}
				{errors.FirstName && errors.LastName && (
					<span className="text-red-500 text-xs+ ml-2">Enter first and last names</span>
				)} */}
      </div>
      <div className="w-full relative">
        <FloatingLabelInput value={email} setValue={setEmail} name="Email" />

        {/* {errors.Email && <span className="text-red-500 text-xs+ ml-2">{errors.Email?.message}</span>} */}
      </div>
      <div className="flex flex-col space-y-1">
        <div className="flex space-x-3">
          <FloatingLabelInput
            type="password"
            value={password}
            setValue={setPassword}
            name="Password"
          />
          <FloatingLabelInput
            type="password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            name="Confirm Password"
          />
        </div>
        {/* {errors.Password && <span className="text-red-500 text-xs+ ml-2">{errors.Password?.message}</span>}
				{!errors.Password && getValues("Password") && errors.CPassword && (
					<span className="text-red-500 text-xs+ ml-2">{errors.CPassword?.message}</span>
				)} */}
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

export default SignUpForm;
