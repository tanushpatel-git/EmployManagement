import {configureStore} from "@reduxjs/toolkit";
import SignUpManagementSlice from "./SignUpManagementSlice.js";

const store = configureStore({
    reducer: {
        adminTaskManage:SignUpManagementSlice
    }
});
export default store;