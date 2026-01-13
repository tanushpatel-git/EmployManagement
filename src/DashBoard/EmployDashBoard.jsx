import React from "react";
import {CheckCircle, XCircle, Clock, ListChecks} from "lucide-react";
import Header from "../Others/Header.jsx";
import TaskList from "../Others/TaskList.jsx";

export default function EmployDashboard() {
    const employee = {
        name: "John Doe", tasks: {
            new: 5, accepted: 8, pending: 3, failed: 2,
        },
    };

    return (<div className="min-h-screen bg-black text-white p-6">
        {/* Header */}
        <Header name={employee.name} />
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* New Tasks */}
            <div className="rounded-2xl bg-zinc-900 border border-yellow-500/30 p-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-sm text-zinc-400">New Tasks</h2>
                    <ListChecks className="text-yellow-400"/>
                </div>
                <p className="text-4xl font-bold text-yellow-400 mt-4">
                    {employee.tasks.new}
                </p>
            </div>

            {/* Accepted Tasks */}
            <div className="rounded-2xl bg-zinc-900 border border-green-500/30 p-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-sm text-zinc-400">Accepted</h2>
                    <CheckCircle className="text-green-400"/>
                </div>
                <p className="text-4xl font-bold text-green-400 mt-4">
                    {employee.tasks.accepted}
                </p>
            </div>

            {/* Pending Tasks */}
            <div className="rounded-2xl bg-zinc-900 border border-white/20 p-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-sm text-zinc-400">Pending</h2>
                    <Clock className="text-white"/>
                </div>
                <p className="text-4xl font-bold text-white mt-4">
                    {employee.tasks.pending}
                </p>
            </div>

            {/* Failed Tasks */}
            <div className="rounded-2xl bg-zinc-900 border border-red-500/30 p-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-sm text-zinc-400">Failed</h2>
                    <XCircle className="text-red-400"/>
                </div>
                <p className="text-4xl font-bold text-red-400 mt-4">
                    {employee.tasks.failed}
                </p>
            </div>
        </div>

        {/* Task Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Task List */}
            <div className="rounded-2xl bg-zinc-900 p-6 border border-zinc-700">
                <h2 className="text-xl font-semibold mb-4">Task List</h2>

                <ul className="space-y-4">
                    <TaskList
                        taskHeading={"Design Login Page"}
                        AssignDate={"12-03-2004"}
                        priority={"Low"}
                        status={"Accepted"}
                    />
                </ul>
            </div>


            {/* Summary */}
            <div className="rounded-2xl bg-zinc-900 p-6 border border-zinc-700 max-h-screen">
                <h2 className="text-xl font-semibold mb-4">Task Summary</h2>
                <div className="space-y-4">
                    <p className="flex justify-between">
                        <span className="text-zinc-400">Total Tasks</span>
                        <span
                            className="font-semibold">{Object.values(employee.tasks).reduce((a, b) => a + b, 0)}</span>
                    </p>
                    <p className="flex justify-between text-green-400">
                        <span>Completed</span>
                        <span>{employee.tasks.accepted}</span>
                    </p>
                    <p className="flex justify-between text-yellow-400">
                        <span>New Tasks</span>
                        <span>{employee.tasks.new}</span>
                    </p>
                    <p className="flex justify-between text-white">
                        <span>Pending</span>
                        <span>{employee.tasks.pending}</span>
                    </p>
                    <p className="flex justify-between text-red-400">
                        <span>Failed</span>
                        <span>{employee.tasks.failed}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>);
}
