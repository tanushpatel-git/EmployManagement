import React from 'react'

const TaskList = ({taskHeading,AssignDate,priority,status}) => {
    return (<div>
        {/* Task Item */}
        <li className="flex items-center justify-between bg-black rounded-xl p-4">
            <div className="flex flex-col gap-1">
                <span className="font-medium">{taskHeading}</span>
                <span className="text-xs text-zinc-400">Assigned: {AssignDate}</span>
            </div>

            <div className="flex items-center gap-4">
               <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400">
                  {status}
               </span>
                <span className="px-3 py-1 rounded-full text-xs bg-red-500/20 text-red-400">
                   {priority}
                </span>
            </div>
        </li>
    </div>)
}
export default TaskList
