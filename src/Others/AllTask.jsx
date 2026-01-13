import React from 'react'

const AllTask = () => {
    return (
        <div className="p-5 bg-[#1c1c1c] mt-5 rounded flex flex-col overflow-auto gap-2 m-5 max-h-[50vh]">
            <div className="bg-red-500 py-2 px-4 flex justify-between rounded items-center">
                <h3 className="font-medium text-3xl">xyz</h3>
                <h2 className="font-bold text-3xl">Make a UI Design</h2>
                <h5 className="text-2xl">Status</h5>
            </div>
            <div className="bg-green-500 py-2 px-4 flex justify-between rounded">
                <h3 className="font-medium text-3xl">xyz</h3>
                <h2 className="font-bold text-3xl">Make a UI Design</h2>
                <h5 className="text-2xl">Status</h5>
            </div>
        </div>
    )
}
export default AllTask
