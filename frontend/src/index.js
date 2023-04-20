import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ReactDOM  from 'react-dom';
import { FilterProvider } from './Components/Filter/filtercontext';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Productdisplay from './Components/Home/productsdisplay';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
    <FilterProvider>
    <App/>
    </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
