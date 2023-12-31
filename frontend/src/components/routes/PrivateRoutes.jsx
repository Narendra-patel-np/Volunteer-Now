import React from "react";
// import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
// import { auth } from "../pages/login";

const PrivateRoute = ({ children }) => {
  let token = localStorage.getItem("token");
  return <div>{token ? children : <Navigate to="/login" />}</div>;
};

export default PrivateRoute;
