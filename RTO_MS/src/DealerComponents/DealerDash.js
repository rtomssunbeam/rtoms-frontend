import React from 'react';
import { Link } from 'react-router-dom';
import CarouselComponent from '../MajorComponents/carousel/Carousel';
import '../MajorComponents/HomePage/Home.css';

const DealerDash = () => {
  return (
    <>
      
      <div className="HomeContainer">
                
                <div className="HomeCard">
                  <img src="https://icon-library.com/images/to-do-list-icon/to-do-list-icon-15.jpg" alt="Service 3" />
                  <h5>REGISTER OWNER</h5>
                  <p>Registering owners online simplifies the process of ownership responsibilities</p>
                  <Link to="/VehOwnerRegistrationForm" className="btn btn-primary" style={{ width: '100%', maxWidth: '100%' }}>APPLY</Link>
                </div>
                
                <div className="HomeCard">
                  <img src="https://cdn-icons-png.flaticon.com/512/3410/3410318.png" alt="Service 4" />
                  <h5>REGISTER VEHICLE</h5>
                  <p>Registering vehicles online provides an efficient method for managing information within a system.</p>
                  <Link to="/RegisterVehicle" className="btn btn-primary" style={{ width: '100%', maxWidth: '70%' }}>APPLY</Link>   
                </div>

                <div className="HomeCard">
                  <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/search-car-3954426-3272629.png" alt="Service 1" />
                  <h5>FIND VEHICLE</h5>
                  <p>you can find owner by entering the vehicle registration number</p>
                  <Link to="/VehicleDetails" className="btn btn-primary" style={{ width: '100%', maxWidth: '100%' }}>APPLY</Link>
                </div>

       </div>
      <div className='HomeContainer' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CarouselComponent />
      </div>
    </>
  );
};

export default DealerDash;
