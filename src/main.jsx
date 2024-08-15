import "./index.css";
import { StrictMode } from "react";
import { router } from "./Routes/Routes";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
