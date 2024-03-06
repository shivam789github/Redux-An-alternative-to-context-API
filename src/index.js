import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
//This provides redux store to this react app
//now any components in our app can tap data out of our store. they can set up a subscription to that data
// and they also can dispatch actions