import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import i18n from "./common/i18next";
import reportWebVitals from "./reportWebVitals";
import themeReducer from "./reducers/themeReducer";
import userReducer from "./reducers/userReducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer
  }
})

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
       <App />
     </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
