import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import "./vendor/globals.css";

const node = document.getElementById("root");

if (node) {
  // TODO: Вернуть <React.StrictMode></React.StrictMode>,
  createRoot(node).render(<App/>);
}
