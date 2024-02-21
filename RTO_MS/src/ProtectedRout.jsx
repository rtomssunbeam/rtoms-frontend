import { Route,Redirect } from "react-router-dom";
import userDashboard from "./UserComponents/UserDashboard";
import Signin from "./MajorComponents/HomePage/LoginFunctionality/Signin";
import LearnerLicenseApplicationForm from "./ExtraPages/LearnerLicenseApplicationForm";
import PermanentLicense from "./Pages/PermanentLicense";
import MyApplicationsList from "./UserComponents/options/GetMyApplications";
import NotFound from "./NotFound";
import { jwtDecode } from "jwt-decode";
import UserDashboard from "./UserComponents/UserDashboard";
import GetELearningLicense from "./UserComponents/options/GetELearningLicense";
import McqTest from "./UserComponents/options/McqTest/McqTest";
import FindMyVehicles from "./UserComponents/options/FindMyVehicles";

function ProtectedRoute(props) 
{


    var token = window.sessionStorage.getItem("loginToken")
    if(token!=null)
    {
        const decodedToken = jwtDecode(token);
        if ( decodedToken.role == "USER") {
            return (
              <Route path={props.path} exact={props.exact}>
                {props.path === "/LearnerLicenseApplicationForm" ? (
                  <LearnerLicenseApplicationForm />
                ) : props.path === "/PermanentLicense" ? (
                  <PermanentLicense />
                ): props.path === "/MyApplicationsList" ? (
                  <MyApplicationsList />
                ): props.path === "/McqTest/:applicationId" ? (
                  <McqTest />
                ) : props.path === "/GetELearningLicense/:applicationId" ? (
                  <GetELearningLicense />
                ): props.path === "/GetEPermanentLicense/:applicationId" ? (
                  <GetELearningLicense />
                ): props.path === "/FindMyVehicles/:userId" ? (
                  <FindMyVehicles />
                ): (
                  <NotFound />
                )}
              </Route>
            );
          } 
    }
    else {
        return <Redirect to="/signin" />;
      }
    
    
    
}

    


export default ProtectedRoute;