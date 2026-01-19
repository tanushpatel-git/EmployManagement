import {createSlice} from "@reduxjs/toolkit";

const userStatusManagementSlice = createSlice({
    name: "userStatusManagementSlice",
    initialState: {
        stateUpdate:'',
        userStatus:'',
    },
    reducers: {
        setUserStatus: (state, action) => {
            state.stateUpdate = action.payload;
        },
        setUserStatusSuccess: (state, action) => {
            state.userStatus = action.payload;
        }
    }
});
export default userStatusManagementSlice.reducer;
export const {setUserStatus,setUserStatusSuccess} = userStatusManagementSlice.actions;