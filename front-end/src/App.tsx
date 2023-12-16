import React from "react";

import { Toaster } from "react-hot-toast";
import * as Sentry from "@sentry/react";

import AppRouter from "./router";
import "./index.scss";

Sentry.init({
  dsn: "https://276496cf638de494569f5e7a032ddb8b@o4506403542728704.ingest.sentry.io/4506403550724096",
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 0.2, //  Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

const App = () => (
  <>
    <AppRouter />
    <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
  </>
);

export default App;
