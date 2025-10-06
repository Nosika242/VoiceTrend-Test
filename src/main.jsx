

import React from "react";
// import { StrictMode } from 'react'
// import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppPage from "./AppPage.jsx";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(

  // <StrictMode>
  //   <App />
  //   </StrictMode>

   <BrowserRouter>
   <AppPage />
    </BrowserRouter>
 
);
