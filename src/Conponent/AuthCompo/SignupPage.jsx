import {motion} from "framer-motion";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    onChangeCategory,
    onChangeEmail,
    onChangeFullname,
    onChangePassword,
    onChangeUsername
} from "../../ReduxManagement/SignUpManagementSlice.js";

export default function SignupPage() {
    const dispatch = useDispatch();
    const state = useSelector(state=>state.adminTaskManage);
    const {fullname, username, email, password, category} = useSelector(state => state.adminTaskManage);

    const [errors, setErrors] = useState({});

    // REGEX PATTERNS
    const usernameRegex = /^[a-zA-Z0-9_.]{3,20}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!usernameRegex.test(username)) {
            newErrors.username = "Username must be 3–20 chars (letters, numbers, _ .)";
        }

        if (!emailRegex.test(email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!passwordRegex.test(password)) {
            newErrors.password =
                "Password must be at least 5 characters long and contain numeric values and don't contain symbols";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form Submitted:", state);
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-neutral-900 text-white px-4">
            <motion.div
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                className="w-full max-w-md rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl p-8 shadow-2xl"
            >
                <h1 className="text-3xl font-semibold text-center mb-2">Create Account</h1>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    {/* Username */}
                    <div>
                        <label className="block text-sm mb-1 text-white/70">Username</label>
                        <input
                            required
                            name="username"
                            value={username}
                            onChange={(e) => dispatch(onChangeUsername(e.target.value))}
                            className="w-full rounded-xl bg-black border border-white/15 px-4 py-3 text-sm"
                        />
                        {errors.username && (
                            <p className="text-red-400 text-xs mt-1">{errors.username}</p>
                        )}
                    </div>

                    {/* Full Name */}
                    <div>
                        <label className="block text-sm mb-1 text-white/70">Full Name</label>
                        <input
                            required
                            name="fullname"
                            value={fullname}
                            onChange={(e) => dispatch(onChangeFullname(e.target.value))}
                            className="w-full rounded-xl bg-black border border-white/15 px-4 py-3 text-sm"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm mb-1 text-white/70">Email</label>
                        <input
                            required
                            name="email"
                            value={email}
                            onChange={(e) => dispatch(onChangeEmail(e.target.value))}
                            className="w-full rounded-xl bg-black border border-white/15 px-4 py-3 text-sm"
                        />
                        {errors.email && (
                            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                        )}
                    </div>

                    {/*category*/}
                    <div><label className="block text-sm mb-1 text-white/70">Category</label> <select
                        required
                        onChange={(e) => dispatch(onChangeCategory(e.target.value))}
                        className="w-full rounded-xl bg-black border border-white/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                        <option value={category}>Select your role</option>
                        <option>Software Engineer</option>
                        <option>Frontend Developer</option>
                        <option>Backend Developer</option>
                        <option>Full Stack Developer</option>
                        <option>UI Designer</option>
                        <option>UX Designer</option>
                        <option>Other</option>
                    </select></div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm mb-1 text-white/70">Password</label>
                        <input
                            required
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => dispatch(onChangePassword(e.target.value))}
                            className="w-full rounded-xl bg-black border border-white/15 px-4 py-3 text-sm"
                        />
                        {errors.password && (
                            <p className="text-red-400 text-xs mt-1">{errors.password}</p>
                        )}
                    </div>

                    <motion.button
                        whileHover={{scale: 1.03}}
                        whileTap={{scale: 0.97}}
                        type="submit"
                        className="w-full mt-4 rounded-xl bg-emerald-500 text-black font-semibold py-3"
                    >
                        Sign Up
                    </motion.button>
                    <p className="text-center text-sm text-white/60 mt-6"> Already have an account?{" "} <a href="#" className="text-emerald-400 hover:underline"> Login </a> </p>
                </form>
            </motion.div>
        </div>
    );
}
