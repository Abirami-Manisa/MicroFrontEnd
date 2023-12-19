import React from "react";
import { Toaster } from "react-hot-toast";
import AppRouter from "./router";
import "./index.scss";

const App = (): JSX.Element => (
  <>
    <AppRouter />
    <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
  </>
);

export default App;
