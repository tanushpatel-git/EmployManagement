import React from "react";

const CreateTask = () => {
    return (
        <div className=" bg-zinc-950 flex items-center justify-center p-6">
            <div className="w-7xl">
                <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 shadow-xl p-8">
                    <h2 className="text-3xl font-semibold text-white mb-8">
                        Create New Task
                    </h2>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div className="space-y-5">
                            {/* Task Title */}
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-zinc-400">Task Title</label>
                                <input
                                    type="text"
                                    placeholder="Enter task title"
                                    className="bg-black/70 border border-zinc-700 rounded-xl px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>

                            {/* Assign To */}
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-zinc-400">Assign To</label>
                                <input
                                    type="text"
                                    placeholder="Employee name"
                                    className="bg-black/70 border border-zinc-700 rounded-xl px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>

                            {/* Date */}
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-zinc-400">Assign Date</label>
                                <input
                                    type="date"
                                    className="bg-black/70 border border-zinc-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>

                            {/* Priority */}
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-zinc-400">Priority</label>
                                <select className="bg-black/70 border border-zinc-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                                    <option>High</option>
                                    <option>Medium</option>
                                    <option>Low</option>
                                </select>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col h-full w-full">
                            {/* Description */}
                            <div className="flex flex-col gap-1 flex-1">
                                <label className="text-sm text-zinc-400">Task Description</label>
                                <textarea
                                    rows={10}
                                    placeholder="Describe the task in detail"
                                    className="bg-black/70 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                                />
                            </div>

                            {/* Action */}
                            <div className="mt-6 flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-emerald-400 hover:bg-emerald-600 text-black font-semibold px-8 py-3 rounded-xl w-full transition"
                                >
                                    Create Task
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
);
};

export default CreateTask;