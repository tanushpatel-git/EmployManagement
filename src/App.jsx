import React, {useEffect} from 'react'
import SignupPage from "./Conponent/AuthCompo/SignupPage.jsx";
import LoginPage from "./Conponent/AuthCompo/LoginPage.jsx";
import {Routes,Route} from "react-router-dom";
import {setLocalStorage} from "./AdminData/AdminDataSetup.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setUserStatusSuccess} from "./ReduxManagement/SliceManage/UserAcctivityManage/userStatusManagementSlice.js";
import AuthCheck from "./Authentication/AuthCheck.jsx";

const App = () => {
    const {stateUpdate, userStatus} = useSelector(state => state.userStatus);
    const dispatch = useDispatch();
    const loginData = JSON.parse(localStorage.getItem("loginData")) || []
    const adminData = JSON.parse(localStorage.getItem("adminData"));
    useEffect(() => {
        if (!localStorage.getItem("adminData")) {
            setLocalStorage();
        }
    },[])
    useEffect(()=>{
        if(loginData.email === adminData.email){
            if(adminData.password === adminData.password){
                dispatch(setUserStatusSuccess("admin"));
            }else{
                alert("passwords don't match");
            }
        }else{
            dispatch(setUserStatusSuccess("employee"));
        }
    },[stateUpdate, userStatus])
    return (
        <div>
            <Routes>
                <Route path="/" element={<AuthCheck><LoginPage /></AuthCheck>} />
                <Route path="/signUp" element={<AuthCheck><SignupPage /></AuthCheck>}/>
            </Routes>
        </div>
    )
}
export default App

// import React from 'react'
// import AdminDashBoard from "./Conponent/DashBorad/AdminDashBoard.jsx";
//
// const App = () => {
//     return (
//         <div>
//             <AdminDashBoard/>
//         </div>
//     )
// }
// export default App
