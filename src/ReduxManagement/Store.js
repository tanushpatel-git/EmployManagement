import {configureStore} from "@reduxjs/toolkit";
import createTaskSlice from "./CreateTaskSlice.js";

const store = configureStore({
    reducer: {
        adminTaskManage:createTaskSlice
    }
});
export default store;