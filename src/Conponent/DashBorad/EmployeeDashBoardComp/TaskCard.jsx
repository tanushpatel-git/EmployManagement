import React, {useEffect, useState} from 'react'
import {CheckCircle2, Circle} from "lucide-react";

const TaskCard = ({title,description,task,idx,taskChange}) => {
    const [toggleClick, setToggleClick] = useState(false);
    useEffect(() => {
            let signUpData = JSON.parse(localStorage.getItem("signUpData")) || [];
            let tempInfo = task.task.pending;
            let clickedItem = tempInfo.find(ele => ele.id === idx);
        if(toggleClick){
            if (!clickedItem) return;
            let updatedPending = tempInfo.filter(ele => ele.id !== idx);
            let oldDone = task.task.done || [];
            signUpData[task.id - 1] = {
                ...task,
                task: {
                    ...task.task,
                    pending: updatedPending,
                    done: [...oldDone,clickedItem]
                }
            };

            localStorage.setItem("signUpData", JSON.stringify(signUpData));
            taskChange(signUpData);
        }else{
            // code pending..

        }
    },[toggleClick,task]);

    return (
        <div
            className="flex items-start justify-between gap-4 p-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition"
        >
            <div>
                <h3 className="text-lg font-semibold">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm">{description}</p>
            </div>

            <button
                onClick={() => setToggleClick(!toggleClick)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition 
                  ${
                    task.taskStatus === "completed"
                        ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                        : "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30"
                }`}
            >
                {task.taskStatus === "completed" ? (
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
    )
}
export default TaskCard
