import React from 'react'
import Header from "../Others/Header.jsx";
import CreateTask from "../Others/CreateTask.jsx";
import AllTask from "../Others/AllTask.jsx";

const AdminDashBoard = () => {
    return (
        <div className="min-h-screen bg-black text-white p-6">
            <Header name={"Admin DashBoard"} />
            <div className="flex flex-col justify-center">
                <CreateTask/>
                <h2 className="text-center text-4xl">All Task List</h2>
                <AllTask/>
            </div>
        </div>
    )
}
export default AdminDashBoard
