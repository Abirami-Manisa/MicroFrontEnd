import React, { type PropsWithChildren } from "react";
import Slider from "./components/Slider";
import { Outlet } from "react-router-dom";
import "../../index.scss";

const AuthLayout = ({ children }: PropsWithChildren<React.ReactNode>) => {
  return (
    <>
      <Slider />
      <main className="flex w-full flex-col items-center bg-white dark:bg-navy-700 lg:max-w-5xl overflow-auto">
        {children ?? <Outlet />}
      </main>
    </>
  );
};

export default AuthLayout;
