import {configureStore} from "@reduxjs/toolkit";
import SignUpManagementSlice from "./SliceManage/AuthManagement/SignUpManagementSlice.js";
import LoginManagement from "./SliceManage/AuthManagement/LoginManagementSlice.js";
import UserStatusManagementSlice from "./UserAcctivityManage/userStatusManagementSlice.js";

const store = configureStore({
    reducer: {
        signUpManage:SignUpManagementSlice,
        loginManage: LoginManagement,
        userStatus: UserStatusManagementSlice
    }
});
export default store;