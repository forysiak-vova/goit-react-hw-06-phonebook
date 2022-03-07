import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'modern-normalize/modern-normalize.css';
import { Provider } from "react-redux";


ReactDOM.render(
  <React.StrictMode>
    <Provider>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
