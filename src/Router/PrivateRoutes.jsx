import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import PropTypes from 'prop-types'; // ES6
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

    const { user,loading, } = useContext(AuthContext);
    const location= useLocation();
    console.log(location)

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }


    if (user) {
        return children
    }
    return <Navigate to={"/login"}></Navigate>
};
PrivateRoutes.propTypes = {
    children: PropTypes.node,
}
export default PrivateRoutes;