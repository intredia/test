import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import 'antd/dist/antd.css';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Helpers/firebase";
import { chPage } from "./Helpers/chPage";

export const root = ReactDOM.createRoot(
  document.getElementById("root")
);
export let urlArr = window.location.pathname.split("/")
export const top = ReactDOM.createRoot(
  document.getElementById("topBar")
);
export const url = new URL(window.location);
onAuthStateChanged(auth, (user) => {
  if (user) {
   chPage(urlArr)
  } else {
    
    
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
  }
});
