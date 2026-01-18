import React from 'react'

function Card({children, className = ""}) {
    return (
        <div className={`rounded-2xl shadow-lg ${className}`}>
            {children}
        </div>
    );
}


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


const EmployeInfoCard = ({name,category,pending,done,notDone}) => {
    return (
        <Card
            className="bg-[#0f172a] border border-emerald-500/20 hover:border-emerald-500 transition p-6"
        >
            <h2 className="text-xl font-semibold text-emerald-400">{name}</h2>
            <p className="text-sm text-gray-400 mb-5">{category}</p>

            <div className="flex justify-between text-sm mb-6">
                <span className="text-green-400">Done: {done}</span>
                <span className="text-yellow-400">Pending: {pending}</span>
                <span className="text-red-400">Not Done: {notDone}</span>
            </div>

            <Button className="w-full bg-emerald-500 text-black hover:bg-emerald-400">
                Assign Task
            </Button>
        </Card>
    )
}
export default EmployeInfoCard
