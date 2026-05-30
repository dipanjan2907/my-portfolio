import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
    <App />
  </BrowserRouter>,
);
