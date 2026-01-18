import {createSlice} from "@reduxjs/toolkit";

const LoginManagementSlice = createSlice({
    name: "Login",
    initialState: {
        email: "",
        password: "",
    },
    reducers: {
        onChangeEmailInLoginPage: (state, action) => {
            state.email = action.payload;
        },
        onChangePasswordInLoginPage: (state, action) => {
            state.password = action.payload;
        }
    }
});
export default LoginManagementSlice.reducer;
export const {onChangeEmailInLoginPage,onChangePasswordInLoginPage} = LoginManagementSlice.actions;