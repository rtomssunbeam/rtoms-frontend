import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className='nav-link' aria-current='page' to='/home'>Home</Link></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-item"><Link className='nav-link' aria-current='page' to='/LearningLicense'>Apply for Learning License</Link></li>
                <li className="dropdown-item"><Link className='nav-link' aria-current='page' to='/LearningLicense'>Apply for Permanent License</Link></li>
                <li className="dropdown-item"><Link className='nav-link' aria-current='page' to='/Appointment'>Book an Appointment</Link></li>
                {/* <li className="dropdown-item"><Link className='nav-link' aria-current='page' to='/vehicle-registration'>Vehicle Registration</Link></li> */}
              </ul>
            </li>
            <li className="nav-item"><Link className='nav-link' aria-current='page' to='/AboutUs'>About us</Link></li>
            <li className="nav-item"><Link className='nav-link' aria-current='page' to='/ContactUs'>Contact us</Link></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-item"><Link className='nav-link' aria-current='page' to='/Information'>Information</Link></li>
                <li className="dropdown-item"><Link className='nav-link' aria-current='page' to='/ExternalLink'>Link</Link></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <Link className="btn btn-primary mx-2" to='/Signin' role="button">Signin</Link>
          </form>
        </div>
      </div>
    </nav >
  );
}

export default Navbar;
