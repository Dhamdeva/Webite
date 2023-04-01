import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import './view/dashboard/Dashboard.css';
import './view/configure/Colors.css';
import { Dashboard } from './view/dashboard/Dashboard';
import MainNavigator from './controller/MainNavigator';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>

  </React.StrictMode>
);