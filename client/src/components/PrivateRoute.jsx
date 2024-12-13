import { Navigate } from "react-router-dom";
import { useUserRole } from "../utils/auth";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const userRole = useUserRole();
  console.log(userRole);

  if (userRole === null) {
    return <div>Loading...</div>;
  }

  if (userRole === "admin") {
    return children;
  }

  return <Navigate to="/" replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,  
};

export default PrivateRoute;
