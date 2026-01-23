import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {onChangeEmailInLoginPage, onChangePasswordInLoginPage} from "../../ReduxManagement/SliceManage/AuthManagement/LoginManagementSlice.js";
import {Link,useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
    setUserStatus,
} from "../../ReduxManagement/SliceManage/UserAcctivityManage/userStatusManagementSlice.js";

export default function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const swal = withReactContent(Swal);
    const state = useSelector(state => state.loginManage);
    const { email, password } = useSelector(state => state.loginManage);
    const signUpData = JSON.parse(localStorage.getItem("signUpData")) || [];
    const adminData = JSON.parse(localStorage.getItem("adminData"));

    const [errors, setErrors] = useState({});

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const formValidation = () => {
        let newErrors = {};

        if (!emailRegex.test(email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!passwordRegex.test(password)) {
            newErrors.password =
                "Password must be at least 8 characters and contain letters & numbers";
        }

        setErrors(newErrors);
        return newErrors;
    }

    const userValidationCheck = () => {
        let status = false;
        signUpData.forEach((item) => {
            if(item.email === email) {
                if (item.password === password) {
                    status = true;
                }
            }
        })
        if(adminData.email === email) {
            if(adminData.password === password) {
                status = true;
            }
        }
        return status;
    }

    const ifNotUserFound = () => {
        swal.fire({
            icon: "warning",
            title: "You are not allowed for login!",
            confirmButtonText: "Cool"
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorStatus = formValidation()
        if (Object.keys(errorStatus).length === 0) {
            const status = userValidationCheck();
            if (status) {
                dispatch(setUserStatus(email));
                localStorage.setItem("loginData", JSON.stringify(state));
                dispatch(onChangeEmailInLoginPage(""));
                dispatch(onChangePasswordInLoginPage(""));
                navigate("/");
            }else{
                ifNotUserFound()
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-neutral-900 text-white px-4">

            {/* Project Name - Top Left */}
            <div className="absolute top-6 left-6">
                <h1 className="text-5xl font-bold text-emerald-400 tracking-wide">
                    Employee Taskyi
                </h1>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl p-8 shadow-2xl"
            >

                <h1 className="text-3xl font-semibold text-center mb-2">
                    Welcome Back
                </h1>
                <p className="text-center text-sm text-white/60 mb-6">
                    Login to your account
                </p>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm mb-1 text-white/70">
                            Email
                        </label>
                        <input
                            required
                            type="email"
                            value={email}
                            onChange={(e) => dispatch(onChangeEmailInLoginPage(e.target.value))}
                            className="w-full rounded-xl bg-black border border-white/15 px-4 py-3 text-sm"
                        />
                        {errors.email && (
                            <p className="text-red-400 text-xs mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm mb-1 text-white/70">
                            Password
                        </label>
                        <input
                            required
                            type="password"
                            value={password}
                            onChange={(e) => dispatch(onChangePasswordInLoginPage(e.target.value))}
                            className="w-full rounded-xl bg-black border border-white/15 px-4 py-3 text-sm"
                        />
                        {errors.password && (
                            <p className="text-red-400 text-xs mt-1">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="w-full mt-4 rounded-xl bg-emerald-500 text-black font-semibold py-3"
                    >
                        Login
                    </motion.button>

                    <p className="text-center text-sm text-white/60 mt-6">
                        Don’t have an account?{" "}
                        <Link to="/signUp" className="text-emerald-400 hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </motion.div>
        </div>
    );
}
