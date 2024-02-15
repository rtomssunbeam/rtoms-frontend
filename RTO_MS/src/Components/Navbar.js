import React from 'react';
//import { Link } from 'react-router-dom/cjs/react-router-dom.min';
//import { Link, useNavigate } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Navbar() {
  return (

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li> */}
            <li class="nav-item"><Link className='nav-link' aria-current='page' to='/home'>Home</Link></li>
            <li class="nav-item"><Link className='nav-link' aria-current='page' to='/OnlineServices'>Services</Link></li>
            <li class="nav-item"><Link className='nav-link' aria-current='page' to='/AboutUs'>About us</Link></li>
            <li class="nav-item"><Link className='nav-link' aria-current='page' to='/ContactUs'>Contact us</Link></li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li> */}
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More
              </a>
              <ul class="dropdown-menu">
                <li class="dropdown-item"><Link className='nav-link' aria-current='page' to='/Information'>Information</Link></li>
                <li class="dropdown-item"><Link className='nav-link' aria-current='page' to='/ExternalLink'>Link</Link></li>
                {/* <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li> */}
              </ul>
            </li>
            {/* <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
          </ul>
          {/* <form className="d-flex" style={{ justifyContent: 'flex-end', padding: '10px' }}>
            <Link
              className="btn btn-outline-danger mx-2"
              to='/Signin'
              role="button"
              style={{ textDecoration: 'none', color: 'white', border: '2px solid #dc3545', backgroundColor: '#dc3545' }}
            >
              Signin
            </Link>
          </form> */}
          {/* <form className="d-flex" style={{ justifyContent: 'flex-end', padding: '10px' }}>
            <Link className="btn btn-outline-danger" to='/Signin' role="button" style={{ textDecoration: 'none', color: 'white' }}>
              Signin
            </Link>
          </form> */}
          <form className="d-flex">
            <Link class="btn btn-primary mx-2" to='/Signin' role="button">Signin</Link>
            {/* <a class="btn btn-primary mx-2" role="button">Signup</a> */}
          </form>
          {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
        </div>
      </div>
    </nav >




    // <nav>
    //   <ul>
    //     {/* <li>About us</li>
    //     <li>Online Services</li>
    //     <li>Information Services</li>
    //     <li>External Links</li>
    //     <li>Contact Us</li>
    //     <li>Login</li> */}
    //     <li><Link className='nav-link' aria-current='page' to='/AboutUs'>About us</Link></li>
    //     <li><Link className='nav-link' aria-current='page' to='/OnlineServices'>Online Services</Link></li>
    //     <li><Link className='nav-link' aria-current='page' to='/Information'>Information</Link></li>
    //     <li><Link className='nav-link' aria-current='page' to='/ExternalLink'>External Link</Link></li>
    //     <li><Link className='nav-link' aria-current='page' to='/ContactUs'>Contact us</Link></li>
    //     <li>
    //       <Link className='nav-link' aria-current='page' to='/Signin'>Login</Link>
    //     </li>
    //   </ul>
    // </nav>

    // //   <nav className='navbar navbar-expand-lg  bg-primary' data-bs-theme='dark'>
    // //     <div className='container-fluid'>
    // //       <div className='collapse navbar-collapse' id='navbarSupportedContent'>
    // //         <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
    // //           {/* <li className='nav-item'>
    // //             <Link className='nav-link' aria-current='page' to='/Aboutus'>
    // //               About us
    // //             </Link>
    // //           </li>
    // //           <li>
    // //             <Link className='nav-link' aria-current='page' to='/cart'>
    // //               Online Services
    // //             </Link>
    // //           </li>
    // //           <li>
    // //             <Link className='nav-link' aria-current='page' to='/orders'>
    // //               Orders
    // //             </Link>
    // //           </li>
    // //           <li>
    // //             <button
    // //               onClick={onLogout}
    // //               className='nav-link'
    // //               aria-current='page'
    // //             >
    // //               Logout
    // //             </button>
    // //           </li> */}

    // //           <li>
    // //             <Link className='nav-link' aria-current='page' to='/Signin'>Signin</Link>
    // //           </li>
    // //         </ul>
    // //       </div>
    // //     </div>
    // //   </nav>
  );
}

export default Navbar;
