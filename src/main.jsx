import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./context/auth/AuthProvider.jsx";
import Loading from "./components/Loading.jsx";
import NotificationProvider from "./context/notification/NotificationProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <NotificationProvider>
        <AuthProvider>
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        </AuthProvider>
      </NotificationProvider>
    </Router>
  </StrictMode>,
);
