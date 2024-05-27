import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={"/Projet_12_Portfolio"}>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
