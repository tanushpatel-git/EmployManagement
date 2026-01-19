import {createSlice} from "@reduxjs/toolkit";

const SignUpManagementSlice = createSlice({
    name: "signUpManagement",
    initialState: {
        id:1,
        username: "",
        fullname: "",
        email: "",
        password: "",
        category: "",
        status:"employee",
        task:{
            pending:[],
            done:[],
            failed:[],
        }
    },
    reducers: {
        onSubmitChange:(state) => {
            state.id = (state.id + 1);
        },
        onChangeEmail: (state, action) => {
            state.email = action.payload;
        },
        onChangeUsername: (state, action) => {
            state.username = action.payload;
        },
        onChangePassword: (state, action) => {
            state.password = action.payload;
        },
        onChangeCategory: (state, action) => {
            state.category = action.payload;
        },
        onChangeFullname: (state, action) => {
            state.fullname = action.payload;
        }
    }
});
export default SignUpManagementSlice.reducer;
export const {onChangeEmail,onChangeFullname,onChangeCategory,onChangePassword,onChangeUsername,onSubmitChange} = SignUpManagementSlice.actions;