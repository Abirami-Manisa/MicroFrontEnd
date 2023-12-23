import React, { useState } from "react";
import { signUp } from "../constants";
import { FloatingLabelInput } from "../../../../../helper/FloatingLabelInput";
import { encryptPassword } from "../../../../../helper/auth";
import { validateEmail, validatePassword } from "../../../../../helper/regex";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError(true);
    } else {
      setError(false);
      const data = {
        "first name": firstName,
        "last name": lastName,
        email: email,
        password: encryptPassword(password),
      };
      console.log("data", data);
    }
  };

  const errors = signUp.form;
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
        {error && firstName === "" && lastName !== "" && (
          <span className="text-red-500 text-xs+ ml-2">
            {errors.firstName.error.required}
          </span>
        )}
        {error && firstName !== "" && lastName === "" && (
          <span className="text-red-500 text-xs+ ml-2">
            {errors.lastName.error.required}
          </span>
        )}
        {error && firstName === "" && lastName === "" && (
          <span className="text-red-500 text-xs+ ml-2">
            Enter first and last names
          </span>
        )}
      </div>
      <div className="w-full relative">
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
        {error && password === "" && (
          <span className="text-red-500 text-xs+ ml-2">
            {errors.password.error.required}
          </span>
        )}
        {error && password !== "" && !validatePassword(password) && (
          <span className="text-red-500 text-xs+ ml-2">
            {errors.password.error.regex}
          </span>
        )}

        {error && confirmPassword === "" && (
          <span className="text-red-500 text-xs+ ml-2">
            {errors.confirm_password.error.required}
          </span>
        )}
        {error && confirmPassword !== "" && password !== confirmPassword && (
          <span className="text-red-500 text-xs+ ml-2">
            {errors.confirm_password.error.mismatch}
          </span>
        )}
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
