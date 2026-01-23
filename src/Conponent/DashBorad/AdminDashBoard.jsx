import { useEffect, useState} from "react";
import {Search, LogOut, Users} from "lucide-react";
import EmployeInfoCard from "./AdminDashBoardConponent/EmployeInfoCard.jsx";
import {setUserStatus} from "../../ReduxManagement/SliceManage/UserAcctivityManage/userStatusManagementSlice.js";
import {useDispatch, useSelector} from "react-redux";
import { X } from "lucide-react";
import  {updateUserTaskStatus} from "../../ReduxManagement/SliceManage/UserAcctivityManage/userTaskAssignId.js";
import TaskDetail from "./AdminDashBoardConponent/TaskDetail.jsx";

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

function Card({children, className = ""}) {
    return (
        <div className={`rounded-2xl shadow-lg ${className}`}>
            {children}
        </div>
    );
}

function Input({className = "", ...props}) {
    return (
        <input
            {...props}
            className={`w-full px-4 py-2 rounded-xl outline-none ${className}`}
        />
    );
}

export default function AdminDashBoard() {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const [taskManage, setTaskManage] = useState({
        id:1,
        title:"",
        taskStatus:"pending",
        description:"",
    });
    const [toggle, setToggle] = useState(false);
    const [toggleView, setToggleView] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [allTaskIs, setAllTaskIs] = useState([]);
    const taskClickId = useSelector(state=>state.userTaskAssignId);

    useEffect(() => {
        const signUpData = JSON.parse(localStorage.getItem("signUpData")) || [];
        setEmployees(signUpData);
    },[]);

    const handleLogout = () => {
        localStorage.removeItem('loginData');
        dispatch(setUserStatus("noUser"));
    }

    const filteredEmployees = employees.filter((emp) =>
        emp.username?.toLowerCase().includes(search.toLowerCase()) || emp.category?.toLowerCase().includes(search.toLowerCase()),
    );

    const handleToggleBtn = (id) => {
        setToggle(!toggle);
        dispatch(updateUserTaskStatus(id));
    }

    const handleToggleBtnForViewTask = (id) => {
        setToggleView(!toggleView);
        const findUser = employees.find((employee) => employee.id === id);
        setAllTaskIs([...findUser.task.pending,...findUser.task.done]);
        dispatch(updateUserTaskStatus(id));
    }

    const handleDeleteBtn = (id,status) => {
        const findUser = employees.find((employee) => employee.id === taskClickId.id);
        if(status === "pending") {
            let taskFilter = findUser.task.pending.filter((employee) => employee.id !== id);
            const updation = employees.map(employee => {
                if(employee.id === taskClickId.id){
                    return {
                        ...employee,
                        task:{
                            ...employee.task,
                            pending:taskFilter,
                        }
                    }
                }
            });
            localStorage.setItem("signUpData", JSON.stringify(updation));
            setEmployees(updation);
            const currentUser = updation.find(e => e.id === taskClickId.id);
            setAllTaskIs([
                ...currentUser.task.pending,
                ...currentUser.task.done,
            ]);
        }else{
            let taskFilter = findUser.task.done.filter((employee) => employee.id !== id);
            const updationForComplete = employees.map(employee => {
                if(employee.id === taskClickId.id){
                    return {
                        ...employee,
                        task:{
                            ...employee.task,
                            done:taskFilter,
                        }
                    }
                }
            });
            localStorage.setItem("signUpData", JSON.stringify(updationForComplete));
            setEmployees(updationForComplete);
            const currentUser = updationForComplete.find(e => e.id === taskClickId.id);
            setAllTaskIs([
                ...currentUser.task.pending,
                ...currentUser.task.done
            ]);
        }

    }

    const handleTaskSubmit = (e) => {
        e.preventDefault();
        const updateArray = employees.map(employee => {
            if (employee.id === taskClickId.id) {
                setTaskManage({...taskManage, id: taskManage.id+1});
                return {
                    ...employee,
                    task: {
                        ...employee.task,
                        pending: [...(employee.task?.pending || []),taskManage],
                    }
                };
            }
            return employee;
        });
        localStorage.setItem("signUpData", JSON.stringify(updateArray));
        setToggle(!toggle);
        setEmployees(updateArray);
    }

    return (
        <div className="min-h-screen bg-[#020617] text-white p-6 relative">
                {/* Header */}
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
                        <LogOut size={22}/> Logout
                    </Button>
                </div>


                {/* Welcome Admin */}
                <div className="mb-10">
                    <h2 className="text-3xl text-gray-300">
                        Welcome Admin,{" "}
                        <span className="text-emerald-400 font-semibold text-4xl">
                            Tanx
                    </span>
                    </h2>
                </div>


                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <Card className="bg-[#0f172a] border border-emerald-500/30 p-6">
                        <div className="flex items-center gap-4">
                            <Users size={34} className="text-emerald-400"/>
                            <div>
                                <p className="text-gray-400 text-sm">Total Employees</p>
                                <p className="text-3xl font-bold text-emerald-400">{employees?.length || 0}</p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Search */}
                <div className="mb-8 flex items-center gap-3">
                    <Search className="text-emerald-400"/>
                    <Input
                        placeholder="Search employee by name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-[#0f172a] border border-emerald-500/30 text-white"
                    />
                </div>

                {/* Employee Cards */}
                <div className="grid grid-cols-1 overflow-auto md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredEmployees.length===0?
                        <div className="flex items-center justify-center w-[100vw] h-[45vh] gap-4">
                            <h3 className="text-6xl text-gray-500 font-bold">Their are no employee found in employee taskyi.</h3>
                        </div>:
                        filteredEmployees.map((emp, index) => (
                            <EmployeInfoCard
                                value={employees}
                                key={index}
                                idx={emp.id}
                                name={emp.username}
                                category={emp.category}
                                assignTask={()=>{handleToggleBtn(emp.id)}}
                                viewTask={()=>{handleToggleBtnForViewTask(emp.id)}}
                            />
                        ))}
                </div>
                <div className={`${toggle?'fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md':''}`}>
                    {toggle &&
                        <div className="rounded-2xl w-[60vw] h-[60vh] gap-4 absolute top-[20vh] left-[20vw]">
                            <div className="w-full h-full max-w-5xl bg-black rounded-2xl shadow-lg border border-gray-500 flex flex-col">
                                {/* Header */}
                                <div className="rounded-t-2xl bg-emerald-600 px-6 py-4 flex items-center justify-between">
                                    <div>
                                        <h2 className="text-xl font-semibold text-white">Create New Task</h2>
                                        <p className="text-sm text-emerald-100">Enter task details below</p>
                                    </div>

                                    {/* Close Icon */}
                                    <button
                                        onClick={()=>{handleToggleBtn()}}
                                        className="text-white hover:text-gray-200 transition"
                                        aria-label="Close"
                                    >
                                        <X size={35} />
                                    </button>
                                </div>

                                {/* Form */}
                                <form className="px-6 py-5 space-y-4 flex-1 overflow-auto">
                                    {/* Title */}
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-1">
                                            Task Title
                                        </label>
                                        <input
                                            required={true}
                                            value={taskManage.title}
                                            onChange={(e) => {setTaskManage({...taskManage, title:e.target.value})}}
                                            type="text"
                                            placeholder="Enter task title"
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                        />
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-1">
                                            Task Description
                                        </label>
                                        <textarea
                                            required={true}
                                            value={taskManage.description}
                                            onChange={(e) => {setTaskManage({...taskManage, description:e.target.value})}}
                                            rows="4"
                                            placeholder="Enter task description"
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                        />
                                    </div>

                                    {/* Button */}
                                    <div className="pt-2">
                                        <button
                                            onClick={handleTaskSubmit}
                                            type="submit"
                                            className="w-full rounded-xl bg-emerald-600 py-2.5 text-white font-medium shadow-md hover:bg-emerald-700 transition-colors"
                                        >
                                            Add Task
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    }
                    {toggleView &&
                        <div className="rounded-2xl w-[60vw] h-[60vh] absolute top-[20vh] left-[20vw]">
                            <div className="w-full h-full max-w-5xl bg-black rounded-2xl shadow-lg border border-gray-500 flex flex-col">
                                {/* Header */}
                                <div className="rounded-t-2xl bg-yellow-600 px-6 py-4 flex items-center justify-between">
                                    <div>
                                        <h2 className="text-xl font-semibold text-white">View Task</h2>
                                        <p className="text-sm text-emerald-100">All Task Here.</p>
                                    </div>

                                    {/* Close Icon */}
                                    <button
                                        onClick={()=>setToggleView(!toggleView)}
                                        className="text-white hover:text-gray-200 transition"
                                        aria-label="Close"
                                    >
                                        <X size={35} />
                                    </button>
                                </div>

                                {allTaskIs.length === 0 ? <h1 className="h-full w-full text-gray-500 text-6xl flex text-center items-center justify-center">There is no Task Assign </h1> : allTaskIs.map((element,index) => (
                                    <TaskDetail
                                        key={index}
                                        title={element.title}
                                        description={element.description}
                                        status={element.taskStatus}
                                        deleteBtn={()=>handleDeleteBtn(element.id,element.taskStatus)}
                                    />
                                ))}
                            </div>
                        </div>
                    }
                </div>
        </div>
    );
}
