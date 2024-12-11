import { Navigate } from "react-router-dom";
import { getUserRole } from "../utils/auth";

const PrivateRoute = ({ children }) => {
  const userRole = getUserRole();
console.log(userRole)
  
  if (userRole === "admin") {
    return children;
  }

  return <Navigate to="/" replace />;
};

export default PrivateRoute;
