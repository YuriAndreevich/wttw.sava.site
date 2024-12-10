import React from "react";
import { Navigate } from "react-router-dom";
import { getUserRole } from "../utils/auth";

const PrivateRoute = ({ children }) => {
  const userRole = getUserRole();

  if (userRole === "admin") {
    return children; // Разрешаем доступ
  }

  return <Navigate to="/" replace />;
};

export default PrivateRoute;
