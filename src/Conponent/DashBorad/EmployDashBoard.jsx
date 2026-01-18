import {useState} from "react";
import {CheckCircle2, Circle, ListTodo, LogOut} from "lucide-react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUserStatus} from "../../ReduxManagement/UserAcctivityManage/userStatusManagementSlice.js";


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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const employeeName = "John Doe"; // replace with dynamic name from auth
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Submit Weekly Report",
            description: "Prepare and submit the weekly progress report to the manager.",
            status: "failed",
        },
        {
            id: 2,
            title: "Client Meeting",
            description: "Attend the client meeting and note down requirements.",
            status: "completed",
        },
        {
            id: 3,
            title: "Update Dashboard UI",
            description: "Improve UI/UX of the employee dashboard using Tailwind.",
            status: "pending",
        },
    ]);

    const handleLogout = () => {
        localStorage.removeItem('loginData');
        dispatch(setUserStatus("noUser"))
    }

    const toggleStatus = (id) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id
                    ? {
                        ...task,
                        status: task.status === "completed" ? "pending" : "completed",
                    }
                    : task
            )
        );
    };

    const completedTasks = tasks.filter((t) => t.status === "completed");
    const pendingTasks = tasks.filter((t) => t.status === "pending");
    const failedTasks = tasks.filter((t) => t.status === "failed");

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
                        Welcome, {employeeName} 👋
                    </h1>
                    <p className="text-gray-400 text-sm">Here’s your task overview</p>
                </div>

            </div>


            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg border border-zinc-800">
                    <h2 className="text-gray-400">Total Tasks</h2>
                    <p className="text-4xl font-bold text-emerald-400">{tasks.length}</p>
                </div>
                <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg border border-zinc-800">
                    <h2 className="text-gray-400">Completed</h2>
                    <p className="text-4xl font-bold text-green-400">{completedTasks.length}</p>
                </div>
                <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg border border-zinc-800">
                    <h2 className="text-gray-400">Pending</h2>
                    <p className="text-4xl font-bold text-yellow-400">{pendingTasks.length}</p>
                </div>
                <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg border border-zinc-800">
                    <h2 className="text-gray-400">Failed</h2>
                    <p className="text-4xl font-bold text-red-400">{failedTasks.length}</p>
                </div>
            </div>

            {/* Task List */}
            <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg border border-zinc-800">
                <div className="flex items-center gap-2 mb-6">
                    <ListTodo className="text-emerald-400"/>
                    <h2 className="text-xl font-semibold">My Tasks</h2>
                </div>

                <div className="space-y-4">
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            className="flex items-start justify-between gap-4 p-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition"
                        >
                            <div>
                                <h3 className="text-lg font-semibold">
                                    {task.title}
                                </h3>
                                <p className="text-gray-400 text-sm">{task.description}</p>
                            </div>

                            <button
                                onClick={() => toggleStatus(task.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition 
                  ${
                                    task.status === "completed"
                                        ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                                        : "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30"
                                }`}
                            >
                                {task.status === "completed" ? (
                                    <>
                                        <CheckCircle2 size={18}/> Done
                                    </>
                                ) : (
                                    <>
                                        <Circle size={18}/> Mark Done
                                    </>
                                )}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
