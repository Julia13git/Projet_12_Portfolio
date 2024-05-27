import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import Router from "./Router";

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter basename={"/Projet_12_Portfolio"}>
      <Router />
    </HashRouter>
  </React.StrictMode>
);
