import React, { PropsWithChildren } from "react";
import Slider from "./components/Slider";
import { Outlet } from "react-router-dom";

const AuthLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Slider />      
      <main className="flex w-full flex-col items-center bg-white dark:bg-navy-700 lg:max-w-5xl overflow-auto">
        {children ? children : <Outlet />}
      </main>
    </>
  );
};

export default AuthLayout;
