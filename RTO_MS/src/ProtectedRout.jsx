import { Route,Redirect } from "react-router-dom";
import userDashboard from "./UserComponents/UserDashboard";
import Signin from "./MajorComponents/HomePage/LoginFunctionality/Signin";
import LearnerLicenseApplicationForm from "./ExtraPages/LearnerLicenseApplicationForm";
import PermanentLicense from "./Pages/PermanentLicense";
import NotFound from "./NotFound";
import { jwtDecode } from "jwt-decode";
import UserDashboard from "./UserComponents/UserDashboard";

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
                ) : (
                  <NotFound />
                )}
              </Route>
            );
          } 
    }
    else {
        return <Redirect to="/signin" />;
      }
    // console.log("path is : "+props.path);
    // console.log("token is :"+decodedToken);
    // console.log("role is :"+decodedToken.role);
    
    
    
}

    


export default ProtectedRoute;