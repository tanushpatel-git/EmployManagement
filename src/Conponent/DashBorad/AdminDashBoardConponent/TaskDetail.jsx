import React from 'react'

const TaskDetail = ({title,description,deleteBtn,status}) => {
    return (
        <div className="flex flex-col items-center rounded-2xl mt-2 ">
            <div className=" h-[10vh] flex justify-between w-[97%] bg-gray-500 rounded-2xl">
                <div className='flex flex-col'>
                    <h1 className="text-xl font-bold m-2 ">{title || "No Title is Assign"} ({status})</h1>
                    <p className="text-lg text-emerald-100 ml-2">{description || "No description is Assign"}</p>
                </div>
                <button
                    onClick={deleteBtn}
                    className="bg-red-700 text-white p-2 h-[7vh] w-[8vw] m-3 text-2xl rounded-4xl hover:bg-red-600 active:scale-95">Delete</button>
            </div>
        </div>
    )
}
export default TaskDetail
