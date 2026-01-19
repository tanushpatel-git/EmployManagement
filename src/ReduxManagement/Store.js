import {configureStore} from "@reduxjs/toolkit";
import SignUpManagementSlice from "./SliceManage/AuthManagement/SignUpManagementSlice.js";
import LoginManagement from "./SliceManage/AuthManagement/LoginManagementSlice.js";
import UserStatusManagementSlice from "./SliceManage/UserAcctivityManage/userStatusManagementSlice.js";
import userTaskAssignId from "./SliceManage/UserAcctivityManage/userTaskAssignId.js";

const store = configureStore({
    reducer: {
        signUpManage:SignUpManagementSlice,
        loginManage: LoginManagement,
        userStatus: UserStatusManagementSlice,
        userTaskAssignId:userTaskAssignId,
    }
});
export default store;