import React from "react";
import ReactDOM from "react-dom/client";
import FormVisibleProvider from "./store/FormVisibleProvider";
import PasswordContextProvider from "./store/PasswordContextProvider";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FormVisibleProvider><PasswordContextProvider><App /></PasswordContextProvider></FormVisibleProvider>);
