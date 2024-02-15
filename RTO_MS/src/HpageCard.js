import React from 'react';
import { Link } from 'react-router-dom';
import learningLogo from './Assets/RTOMSimages/LL4.png';
import feepay from './Assets/RTOMSimages/feepay-icon2.png';
import ncl from './Assets/RTOMSimages/NCL1.png';
import MyCarousel from './Components/MyCarousel';

const HpageCard = () => {
  return (
    <>
      <div id="MyCarousel">
        <MyCarousel />
      </div>
      <div className="container">

        <div className="box">
          <Link to="/drivers-license">
            <img src={learningLogo} className="card-img-top" alt="learning logo" />
          </Link>
          <div className="card-body">
            <h5 className="card-title">Driving License</h5>
            <p className="card-text">You can apply here for Driving License.</p>
            <Link to="/drivers-license" className="btn btn-primary">
              Apply Here
            </Link>
          </div>
        </div>
        <div className="box">
          <Link to="/online-test">
            <img src={feepay} className="card-img-top" alt="learning logo" />
          </Link>
          <div className="card-body">
            <h5 className="card-title">Online Test/ Appointment</h5>
            <p className="card-text">You can apply here for Online Test/ Appointment.</p>
            <Link to="/online-test" className="btn btn-primary">
              Apply Here
            </Link>
          </div>
        </div>
        <div className="box">
          <Link to="/vehicle-registration">
            <img src={ncl} className="card-img-top" alt="learning logo" />
          </Link>
          <div className="card-body">
            <h5 className="card-title">Vehicle Registration</h5>
            <p className="card-text">You can apply here for Vehicle Registration.</p>
            <Link to="/vehicle-registration" className="btn btn-primary">
              Apply Here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HpageCard;
