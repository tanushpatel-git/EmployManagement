import React from 'react'

const Header = ({name}) => {
    return (
        <div className="mb-8 flex justify-between">
            <h1 className="text-5xl font-bold text-zinc-400 mt-1">
                Welcome, <span className="text-emerald-400 font-semibold">{name}</span>
            </h1>
            <button className="bg-red-700 hover:bg-red-600 text-white text-2xl rounded-4xl p-2">LogOut</button>
        </div>
    )
}
export default Header
