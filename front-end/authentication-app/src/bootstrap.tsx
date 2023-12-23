import React from "react";
import { createRoot } from "react-dom/client";
import * as Sentry from "@sentry/react";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { configureStore, persistor } from "./redux/store";

const store = configureStore();
const container = document.getElementById("auth-app");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

if (process.env.REACT_APP_MODE === "production") {
  Sentry.init({
    dsn: "https://8e4845ab16434845b5fcc36a376b9d16@sentry.ccapps.in/17",
    integrations: [
      new Sentry.BrowserTracing({
        // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
        tracePropagationTargets: [
          "localhost",
          /^https:\/\/yourserver\.io\/api/,
        ],
      }),
      new Sentry.Replay(),
    ],
    // Performance Monitoring
    tracesSampleRate: 0.2, //  Capture 100% of the transactions
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
