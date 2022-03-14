import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'modern-normalize/modern-normalize.css';
import store from './redux/store'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
// import {myAction} from './redux/contacts/contact-action'
// store.dispatch(myAction(2))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={'Загружаємо'} persistor={store.persistor}>
    <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
