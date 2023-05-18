import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./components/Main";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./features/mainSlice";
import sourceSlice from "./features/sourceSlice";
import nameSlice from "./features/nameSlice";
import publisherSlice from "./features/publisherSlice";

const store = configureStore({
  reducer: {
    main: mainSlice,
    source: sourceSlice,
    name: nameSlice,
    publish: publisherSlice,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
