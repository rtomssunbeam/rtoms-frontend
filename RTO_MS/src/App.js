import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

import {
  BrowserRouter as Router, Routes, Route,
  Switch,
  Link,
} from "react-router-dom";

import Header from './Components/Header';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
// import MyCarousel from './Components/MyCarousel';


import HpageCard from './HpageCard';
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
import PermanentLicense from './Pages/PermanentLicense';
import OtpVerification from './Pages/OtpVerification';
import Terms from './FooterPages/Terms';
import Concern from './FooterPages/Concern';
import FAQ from './FooterPages/FAQ';
import Feedback from './FooterPages/Feedback';

// import Stepper from './Components/Stepper1';
// import Aboutus from './Pages/Aboutus';


function App() {
  return (
    <div className="App">
      <div id="header">
        <Header />
      </div>
      <div id="navbar">
        <Navbar />
      </div>
      <main className="App-body">
        {/* <div id="MyCarousel">
          <MyCarousel />
        </div> */}
        <div>
          <Switch>
            <Route path="/" exact component={HpageCard} />
            <Route path="/home" exact component={HpageCard} />
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
            <Route path="/PermanentLicense" exact component={PermanentLicense} />
            <Route path="/Terms" exact component={Terms} />
            <Route path="/Concern" exact component={Concern} />
            <Route path="/FAQ" exact component={FAQ} />
            <Route path="/Feedback" exact component={Feedback} />

            <Route path="/Stepper" exact component={Stepper} />
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
      <div id="footer" className="footer">
        <Footer />
      </div>
    </div>

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


