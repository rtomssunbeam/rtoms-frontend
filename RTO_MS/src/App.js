import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

import {
  BrowserRouter as Router, Routes, Route,
  Switch,
  Link,
} from "react-router-dom";

import Header from './MajorComponents/Header/Header';
import Footer from './MajorComponents/Footer/Footer';
import Navbar from './MajorComponents/navBar/Navbar';
import HomePage from './MajorComponents/HomePage/HomePage';
import DriversLicense from './DriversLicense';
import Appointment from './Appointment';
import VehicleRegistration from './VehicleRegistration';
import NotFound from "./NotFound";
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import ContactUs from './Pages/ContactUs';
import Services from './Pages/OnlineServices';
import Stepper from './Components/Stepper';
import LearningLicense from './Pages/LearningLicense';
import OtpVerification from './Pages/OtpVerification';
import LearnerLicenseApplicationForm from './ExtraPages/LearnerLicenseApplicationForm'
import VehicleListByOwner from './AdminComponents/VehicleListByOwner';
import OwnerList from './AdminComponents/GetListOfOwners'
import GetSingleLearnerApplication from './AdminComponents/LearningApplication'
import LearnerApplicationsList from './AdminComponents/LeranerApplications'
import SuccessfullyAproovalOrRejection from './AdminComponents/SuccessfullyAproovalOrRejection';
import UserList from './AdminComponents/UserList'
import DealerDash from './DealerComponents/DealerDash'
import VehicleDetails from './DealerComponents/GetVehicleDetails'
import VehOwnerRegistrationForm from './DealerComponents/OwnerRegister'


// import Stepper from './Components/Stepper1';
// import Aboutus from './Pages/Aboutus';


function App() {
  return (
    <>
        <Header />
        <Navbar />
     
      <main className="App-body">
        <div>
          <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/home" exact component={HomePage} />
                  <Route path="/drivers-license" exact component={DriversLicense} />
                  <Route path="/Appointment" exact component={Appointment} />
                  <Route path="/vehicle-registration" exact component={VehicleRegistration} />
                  {/* <Route path="*" exact component={NotFound} /> */}
                  <Route path="/Signin" exact component={Signin} />
                  <Route path="/Signup" exact component={Signup} />
                  <Route path="/otp-verification" component={OtpVerification} />
                  <Route path="/ContactUs" exact component={ContactUs} />
                  <Route path="/OnlineServices" exact component={Services} />
                  <Route path="/LearningLicense" exact component={LearningLicense} />
                  <Route path="/Stepper" exact component={Stepper} />
                  <Route path="/LearnerLicenseApplicationForm" exact component={LearnerLicenseApplicationForm} />
                  <Route path="/OwnerList" exact component={OwnerList} />
                  <Route path="/GetSingleLearnerApplication" exact component={GetSingleLearnerApplication} />
                  <Route path="/LearnerApplicationsList" exact component={LearnerApplicationsList} />
                  <Route path="/SuccessfullyAproovalOrRejection" exact component={SuccessfullyAproovalOrRejection} />
                  <Route path="/UserList" exact component={UserList} />
                  <Route path="/VehicleListByOwner" exact component={VehicleListByOwner} />
                  <Route path="/DealerDash" exact component={DealerDash}/>
                  <Route path="/VehicleDetails" exact component={VehicleDetails}/>
                  <Route path="/VehOwnerRegistrationForm" exact component={VehOwnerRegistrationForm}/>

                  
                  
                  

                  
                  {/* <Route path="/Aboutus" exact component={Aboutus} /> */}
                  {/* <Signin />
                  </Route> */}
                  {/* <Route exact path="/Signin">
                    <Signup />
                  </Route> */}
                  {/* <Route path="/Signin" component={Signin} /> */}
          </Switch>

        </div>
      </main>
     
        <Footer />
        </>

  );
}

export default App;


// <div className="App">
//   <div id="header">
//     <Header />
//   </div>
//   <div id="navbar">
//     <Navbar />
//   </div>
//   <main className="App-body">

//     <div id="MyCarousel">
//       <MyCarousel />
//     </div>


//     {/* <div className="container">
//       <div className="box">
//         <Link to="/drivers-license">
//           <img src={learningLogo} className="card-img-top" alt="learning logo" />
//         </Link>
//         <div className="card-body">
//           <h5 className="card-title">Drivers/ Learners License</h5>
//           <p className="card-text">You can apply here for drivers or learners License.</p>
//           <Link to="/drivers-license" className="btn btn-primary">
//             Apply Here
//           </Link>
//         </div>
//       </div>
//       <div className="box">
//         <Link to="/online-test">
//           <img src={feepay} className="card-img-top" alt="learning logo" />
//         </Link>
//         <div className="card-body">
//           <h5 className="card-title">Online Test/ Appointment</h5>
//           <p className="card-text">You can apply here for Online Test/ Appointment.</p>
//           <Link to="/online-test" className="btn btn-primary">
//             Apply Here
//           </Link>
//         </div>
//       </div>
//       <div className="box">
//         <Link to="/vehicle-registration">
//           <img src={ncl} className="card-img-top" alt="learning logo" />
//         </Link>
//         <div className="card-body">
//           <h5 className="card-title">Vehicle Registration</h5>
//           <p className="card-text">You can apply here for Vehicle Registration.</p>
//           <Link to="/vehicle-registration" className="btn btn-primary">
//             Apply Here
//           </Link>
//         </div>
//       </div>
//     </div> */}


//     <Switch>
//       <Route path="/" exact component={HpageCard} />
//       <Route path="/home" exact component={HpageCard} />
//       <Route path="/drivers-license" component={DriversLicense} />
//       <Route path="/online-test" component={OnlineTest} />
//       <Route path="/vehicle-registration" component={VehicleRegistration} />
//       <Route path="*" component={NotFound} exact/>

//     </Switch>




//     {/* <div className="container">
//       <div className="box">
//         <img src={learningLogo} className="card-img-top" alt="learning logo" />
//         <div className="card-body">
//           <h5 className="card-title">Drivers/ Learners License</h5>
//           <p className="card-text">You can apply here for drivers or learners License.</p>
//           <a href="#" className="btn btn-primary">Apply Here</a>
//         </div>
//       </div>
//       <div className="box">
//         <img src={feepay} className="card-img-top" alt="learning logo" />
//         <div className="card-body">
//           <h5 className="card-title">Online Test/ Appointment</h5>
//           <p className="card-text">You can apply here for Online Test/ Appointment.</p>
//           <a href="#" className="btn btn-primary">Apply Here</a>
//         </div>
//       </div>
//       <div className="box">
//         <img src={ncl} className="card-img-top" alt="learning logo" />
//         <div className="card-body">
//           <h5 className="card-title">Vehicle Registration</h5>
//           <p className="card-text">You can apply here for Vehicle Registration.</p>
//           <a href="#" className="btn btn-primary">Apply Here</a>
//         </div>
//       </div>
//     </div> */}


//   </main>
//   <div id="footer">
//     <Footer />
//   </div>
// </div>


