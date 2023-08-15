import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import { CurrentUserContext } from "./context/CurrentUserContext";
import "./vendor/globals.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// TODO: Вернуть <React.StrictMode></React.StrictMode>,
root.render(
  <CurrentUserContext.Provider value={null}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App/>
    </BrowserRouter>
  </CurrentUserContext.Provider>,
);

