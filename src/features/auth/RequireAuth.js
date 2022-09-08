import { useLocation , Navigate , Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";
import React from 'react'
import { GenerateNewAccessCode } from "../client/ClientSlice";

const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
};
const RequireAuth = () => {
    const token=useSelector(selectCurrentToken);
    const location=useLocation();

    const decodedJwt = parseJwt(token);
    return (
        token && decodedJwt?.exp * 1000 > Date.now() 
            ? <Outlet /> 
        : <>
            {localStorage.removeItem("user")}
            <Navigate to="/login" state={{ from: location }} replace />
        </> 
    )
}

export default RequireAuth