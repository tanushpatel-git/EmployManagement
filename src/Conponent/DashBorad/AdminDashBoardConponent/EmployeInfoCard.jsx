import React, {useEffect, useState} from 'react'

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


const EmployeInfoCard = ({value,assignTask,idx}) => {
    const [employCard, setEmployeeCard] = useState([]);
    useEffect(()=>{
        const signUpData = JSON.parse(localStorage.getItem("signUpData")) || [];
        const employeCard = signUpData.find((employee) => employee.id === idx);
        setEmployeeCard(employeCard);
    },[value])
    return (
        <Card
            className="bg-[#0f172a] border border-emerald-500/20 hover:border-emerald-500 transition p-6"
        >
            <h2 className="text-xl font-semibold text-emerald-400">{employCard?.username}</h2>
            <p className="text-sm text-gray-400 mb-5">{employCard?.category}</p>

            <div className="flex justify-between text-sm mb-6">
                <span className="text-green-400">Done: {employCard?.task?.done.length || 0}</span>
                <span className="text-yellow-400">Pending: {employCard?.task?.pending.length || 0}</span>
            </div>

            <Button
                onClick={assignTask}
                className="w-full bg-emerald-500 text-black hover:bg-emerald-400">
                Assign Task
            </Button>
        </Card>
    )
}
export default EmployeInfoCard
