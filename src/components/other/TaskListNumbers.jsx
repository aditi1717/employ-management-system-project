import React from "react";

export default function TaskListNumbers({ data }) {
	return (
		<div className="mt-10 flex justify-between gap-5 text-white">
			<div className=" w-[45%] bg-red-400 py-6 px-9 rounded-xl ">
				<h2 className="text-3xl">{data.taskSummary.activeTasks}</h2>
				<h3 className="text-xl font-medium">Active Task</h3>
			</div>
			<div className=" w-[45%] bg-blue-400 py-6 px-9 rounded-xl">
				<h2 className="text-3xl">{data.taskSummary.completedTasks}</h2>
				<h3 className="text-xl font-medium">Completed Task</h3>
			</div>
			<div className=" w-[45%] bg-yellow-400 py-6 px-9 rounded-xl text-black">
				<h2 className="text-3xl">{data.taskSummary.failedTasks}</h2>
				<h3 className="text-xl font-medium">Failed Task</h3>
			</div>
			<div className=" w-[45%] bg-green-400 py-6 px-9 rounded-xl">
				<h2 className="text-3xl">{data.taskSummary.newTasks}</h2>
				<h3 className="text-xl font-medium">New Task</h3>
			</div>
		</div>
	);
}
