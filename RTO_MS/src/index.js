import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import LearnerLicenseApplicationForm from './ExtraPages/LearnerLicenseApplicationForm';
// import DoLogin from './ExtraPages/DoLogin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    {/* <LearnerLicenseApplicationForm /> */}
    {/* <DoLogin /> */}
  </BrowserRouter>
);

