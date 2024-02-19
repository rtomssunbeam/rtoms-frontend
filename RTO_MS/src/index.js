import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import LearnerLicenseApplicationForm from './ExtraPages/LearnerLicenseApplicationForm';
import PermanentLicenseApplicationForm from './ExtraPages/PermanentLicenseApplicationForm';

// import DoLogin from './ExtraPages/DoLogin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    {/* <PermanentLicenseApplicationForm /> */}
    {/* <LearnerLicenseApplicationForm /> */}
    {/* <DoLogin /> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
