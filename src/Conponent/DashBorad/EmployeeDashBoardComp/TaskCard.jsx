import React from "react";
import { CheckCircle2, Circle } from "lucide-react";

const TaskCard = ({ title, description, task, taskChange, userInfoProps }) => {

    const handleMarkDone = () => {
        const signUpData = JSON.parse(localStorage.getItem("signUpData")) || [];

        const userIndex = signUpData.findIndex(
            u => u.id === userInfoProps.id
        );
        if (userIndex === -1) return;

        const {
            pending: oldPending = [],
            done: oldDone = []
        } = userInfoProps.task;

        let pending = oldPending.filter(t => t.id !== task.id);
        let done = oldDone.filter(t => t.id !== task.id);

        let updatedTask;

        if (task.taskStatus === "completed") {
            updatedTask = { ...task, taskStatus: "pending" };
            pending.push(updatedTask);
        } else {
            updatedTask = { ...task, taskStatus: "completed" };
            done.push(updatedTask);
        }

        const updatedUser = {
            ...userInfoProps,
            task: {
                pending,
                done
            }
        };

        signUpData[userIndex] = updatedUser;
        localStorage.setItem("signUpData", JSON.stringify(signUpData));

        taskChange(updatedUser);
    };

    return (
        <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition">
            <div>
                <h2 className="text-lg font-semibold">
                    {title ? title : "No Title Assigned"}
                </h2>
                <p className="text-gray-400 text-sm">
                    {description ? description : "No description assigned"}
                </p>
            </div>

            <button
                onClick={handleMarkDone}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition
                ${
                    task.taskStatus === "completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                }`}
            >
                {task.taskStatus === "completed" ? (
                    <>
                        <CheckCircle2 size={18} /> Done
                    </>
                ) : (
                    <>
                        <Circle size={18} /> Mark Done
                    </>
                )}
            </button>
        </div>
    );
};

export default TaskCard;
