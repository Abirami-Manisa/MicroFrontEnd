import React from "react";
import { Toaster } from "react-hot-toast";
import AppRouter from "./router";
import { ToastContainer } from "react-toastify";

const App = (): JSX.Element => (
  <>
    <AppRouter />
    {/* <Toaster
      position="top-right"
      toastOptions={{
        duration: 100000,
        style: {
          padding: "10px",
        },
      }}
    /> */}
   <ToastContainer autoClose={false} />
  </>
);

export default App;
