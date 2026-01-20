import {useEffect, useMemo, useState} from "react";
import {CheckCircle2, Circle, ListTodo, LogOut} from "lucide-react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUserStatus} from "../../ReduxManagement/SliceManage/UserAcctivityManage/userStatusManagementSlice.js";
import TaskCard from "./EmployeeDashBoardComp/TaskCard.jsx";


function Button({children, className = "", ...props}) {
    return (
        <button
            {...props}
            className={`px-4 py-2 rounded-xl font-medium transition ${className}`}
        >
            {children}
        </button>
    );
}

export default function EmployeeDashboard() {
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState({});
    const [taskStatusChange, setTaskStatusChange] = useState(null);
    const handleLogout = () => {
        localStorage.removeItem('loginData');
        dispatch(setUserStatus("noUser"))
    }

    useEffect(() => {
        const loginUserInfo = JSON.parse(localStorage.getItem("loginData")) || {};
        const signupUserInfo = JSON.parse(localStorage.getItem("signUpData")) || [];
        const findLoger = signupUserInfo.find(user => user.email === loginUserInfo.email);
        setUserInfo(findLoger);
    },[taskStatusChange])

    const totalTasks =
        (userInfo?.task?.done.length || 0) +
        (userInfo?.task?.pending.length || 0) +
        (userInfo?.task?.failed.length || 0);

    const doneLength = userInfo?.task?.done.length;
    const pendingLength = userInfo?.task?.pending.length;
    const failedLength = userInfo?.task?.failed.length;
    const tasks = userInfo?.task?.done || [];

    const handleSetTaskChangeSatue = (value) => {
        setTaskStatusChange(value);
    }


    // const completedTasks = tasks.filter((t) => t.status === "completed");
    // const pendingTasks = tasks.filter((t) => t.status === "pending");
    // const failedTasks = tasks.filter((t) => t.status === "failed");

    return (
        <div className="min-h-screen bg-black text-white p-6">
            {/* Top Bar */}
            <div className='flex flex-col gap-3'>

                <div className="flex justify-between items-center mb-10">
                    <div className="flex items-center gap-3">
                        <div
                            className="h-11 w-11 rounded-2xl bg-emerald-500 flex items-center justify-center font-bold text-black">
                            ET
                        </div>
                        <h1 className="text-2xl font-semibold text-emerald-400">Employee Taskify</h1>
                    </div>
                    <Button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-400 flex items-center gap-2">
                        <LogOut size={18}/> Logout
                    </Button>
                </div>

                <div className="mb-5">
                    <h1 className="text-5xl font-bold text-emerald-400">
                        Welcome, {userInfo.fullname} 👋
                    </h1>
                    <p className="text-gray-400 text-sm">Here’s your task overview</p>
                </div>

            </div>


            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg border border-zinc-800">
                    <h2 className="text-gray-400">Total Tasks</h2>
                    <p className="text-4xl font-bold text-emerald-400">{totalTasks}</p>
                </div>
                <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg border border-zinc-800">
                    <h2 className="text-gray-400">Completed</h2>
                    <p className="text-4xl font-bold text-green-400">{doneLength}</p>
                </div>
                <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg border border-zinc-800">
                    <h2 className="text-gray-400">Pending</h2>
                    <p className="text-4xl font-bold text-yellow-400">{pendingLength}</p>
                </div>
                <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg border border-zinc-800">
                    <h2 className="text-gray-400">Failed</h2>
                    <p className="text-4xl font-bold text-red-400">{failedLength}</p>
                </div>
            </div>

            {/* Task List */}
            <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg border border-zinc-800">
                <div className="flex items-center gap-2 mb-6">
                    <ListTodo className="text-emerald-400"/>
                    <h2 className="text-xl font-semibold">My Tasks</h2>
                </div>

                <div className="space-y-4 overflow-auto h-[40vh]">
                    {tasks.map((task,index) => (
                        <TaskCard
                            key={index}
                            idx={index+1}
                            title={task.title}
                            taskChange={handleSetTaskChangeSatue}
                            description={task.description}
                            task={userInfo}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
