import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./style.css";
import { FaSafari } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import Toaster from "./Toaster";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>
);
