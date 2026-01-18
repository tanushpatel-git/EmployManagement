import React from 'react'
import {useSelector} from "react-redux";
import AdminDashBoard from "../Conponent/DashBorad/AdminDashBoard.jsx";
import EmployDashBoard from "../Conponent/DashBorad/EmployDashBoard.jsx";

const AuthCheck = ({children}) => {
    const loginData = JSON.parse(localStorage.getItem("loginData"));
    const {userStatus} = useSelector(state=>state.userStatus);
    if (loginData ) {
        if(userStatus === "admin") return <AdminDashBoard/>
        else return <EmployDashBoard/>
    }
    return children
}
export default AuthCheck
