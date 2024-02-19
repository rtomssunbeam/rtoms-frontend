import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import './NavigationBar.css';

function MyNavbar() {
  return (
    <Navbar bg="body-tertiary" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/LearningLicense">Apply for Learning License</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/PermanentLicense">Apply for Permanent License</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Appointment">Book an Appointment</NavDropdown.Item>
            {/* <NavDropdown.Item as={Link} to="/vehicle-registration">Vehicle Registration</NavDropdown.Item> */}
          </NavDropdown>
          <Nav.Link as={Link} to="/AboutUs">About us</Nav.Link>
          <Nav.Link as={Link} to="/ContactUs">Contact us</Nav.Link>
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/Information">Information</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/ExternalLink">Link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Button variant="primary" className="mx-2" as={Link} to="/Signin" role="button">
          Signin
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;





// import React from 'react';
// import { Link } from "react-router-dom";
// import './NavigationBar.css';

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item"><Link className='nav-link' aria-current='page' to='/home'>Home</Link></li>
//             <li className="nav-item dropdown">
//               <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                 Services
//               </a>
//               <ul className="dropdown-menu">
//                 <li className="dropdown-item"><Link className='nav-link' aria-current='page' to='/LearningLicense'>Apply for Learning License</Link></li>
//                 <li className="dropdown-item"><Link className='nav-link' aria-current='page' to='/LearningLicense'>Apply for Permanent License</Link></li>
//                 <li className="dropdown-item"><Link className='nav-link' aria-current='page' to='/Appointment'>Book an Appointment</Link></li>
//                 {/* <li className="dropdown-item"><Link className='nav-link' aria-current='page' to='/vehicle-registration'>Vehicle Registration</Link></li> */}
//               </ul>
//             </li>
//             <li className="nav-item"><Link className='nav-link' aria-current='page' to='/AboutUs'>About us</Link></li>
//             <li className="nav-item"><Link className='nav-link' aria-current='page' to='/ContactUs'>Contact us</Link></li>
//             <li className="nav-item dropdown">
//               <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                 More
//               </a>
//               <ul className="dropdown-menu">
//                 <li className="dropdown-item"><Link className='nav-link' aria-current='page' to='/Information'>Information</Link></li>
//                 <li className="dropdown-item"><Link className='nav-link' aria-current='page' to='/ExternalLink'>Link</Link></li>
//               </ul>
//             </li>
//           </ul>
//           <form className="d-flex">
//             <Link className="btn btn-primary mx-2" to='/Signin' role="button">Signin</Link>
//           </form>
//         </div>
//       </div>
//     </nav >
//   );
// }

// export default Navbar;
