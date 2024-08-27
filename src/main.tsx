import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { generateLocalizedPath } from "./Utils/RoutesGeneration.tsx";
import { LocalesInfo } from "./Types/index.ts";

const localesInfo: LocalesInfo = {
  defaultLocale: "ar",
  locales: ["en", "ar"],
};

// Routes
const router = createBrowserRouter(generateLocalizedPath(localesInfo));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
