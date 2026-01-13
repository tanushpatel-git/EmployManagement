import React, {useState} from "react";

export default function Login() {

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })
    const handleChange = e => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }
    const handleLogin = e => {
        e.preventDefault();
        setLoginData({
            email: "",
            password: "",
        })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            {/* Card */}
            <div className="w-full max-w-md bg-zinc-900 rounded-2xl shadow-xl border border-emerald-500/20 p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-emerald-400">Welcome Back</h1>
                    <p className="text-sm text-zinc-400 mt-2">
                        Sign in to continue
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-1">
                            Email
                        </label>
                        <input
                            name="email"
                            required
                            value={loginData.email}
                            onChange={(e)=>handleChange(e)}
                            type="email"
                            placeholder="you@example.com"
                            className="w-full rounded-xl bg-black border border-zinc-700 px-4 py-2 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-1">
                            Password
                        </label>
                        <input
                            required
                            name="password"
                            value={loginData.password}
                            onChange={(e)=>handleChange(e)}
                            type="password"
                            placeholder="••••••••"
                            className="w-full rounded-xl bg-black border border-zinc-700 px-4 py-2 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                    </div>

                    {/* Options */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 text-zinc-400">
                            <input
                                type="checkbox"
                                className="accent-emerald-500"
                            />
                            Remember me
                        </label>
                        <a
                            href="#"
                            className="text-red-400 hover:text-red-500 transition"
                        >
                            Forgot password?
                        </a>
                    </div>

                    {/* Button */}
                    <button
                        onClick={e=>handleLogin(e)}
                        type="submit"
                        className="w-full rounded-xl bg-emerald-500 py-2.5 font-semibold text-black hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/30"
                    >
                        Login
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-sm text-zinc-400 mt-6">
                    Don’t have an account?{" "}
                    <a
                        href="#"
                        className="text-red-400 hover:text-red-500 transition"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}
