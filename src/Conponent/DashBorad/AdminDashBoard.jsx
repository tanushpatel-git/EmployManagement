import {useState} from "react";
import {Search, LogOut, Users} from "lucide-react";
import EmployeInfoCard from "./AdminDashBoardConponent/EmployeInfoCard.jsx";
import {setUserStatus} from "../../ReduxManagement/UserAcctivityManage/userStatusManagementSlice.js";
import {useDispatch} from "react-redux";

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

    const employees = [
        {name: "Rahul Sharma", category: "Frontend Developer", done: 12, pending: 3, notDone: 2},
        {name: "Anita Verma", category: "Backend Developer", done: 9, pending: 4, notDone: 1},
        {name: "Mohit Singh", category: "UI/UX Designer", done: 15, pending: 1, notDone: 0},
        {name: "Sneha Patel", category: "QA Engineer", done: 6, pending: 5, notDone: 3},
    ];

    const handleLogout = () => {
        localStorage.removeItem('loginData');
        dispatch(setUserStatus("noUser"))
    }

    const filteredEmployees = employees.filter((emp) =>
        emp.name.toLowerCase().includes(search.toLowerCase()) || emp.category.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <div className="min-h-screen bg-[#020617] text-white p-6">
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
                    <LogOut size={18}/> Logout
                </Button>
            </div>


            {/* Welcome Admin */}
            <div className="mb-10">
                <h2 className="text-3xl text-gray-300">
                        Welcome Admin,{" "}
                    <span className="text-emerald-400 font-semibold text-2xl">
                            Tanush
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
                            <p className="text-3xl font-bold text-emerald-400">{employees.length}</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredEmployees.map((emp, index) => (
                    <EmployeInfoCard
                        key={index}
                        name={emp.name}
                        category={emp.category}
                        done={emp.done}
                        pending={emp.pending}
                        notDone={emp.notDone}
                    />
                ))}
            </div>
        </div>
    );
}
