import { Route } from "react-router-dom";
import userDashboard from "./UserComponents/Dashboard";
import Login from "./Login";

function ProtectedRoute(props) 
{
    var token = window.sessionStorage.getItem("loginToken")
    if(token!==null && token!==undefined)
    {
        return  <Route path={props.path} exact 
                       component={props.component}/> 
    }
    else
    {
         return <Login/>
    }
}

export default ProtectedRoute;