import React from "react";

export default function TaskListNumbers() {
	return (
		<div className="mt-10 flex justify-between gap-5 ">
			<div className=" w-[45%] bg-red-400 py-6 px-9 rounded-xl">
				<h2 className="text-3xl">0</h2>
				<h3 className="text-xl font-medium">New Task</h3>
			</div>
			<div className=" w-[45%] bg-blue-400 py-6 px-9 rounded-xl">
				<h2 className="text-3xl">0</h2>
				<h3 className="text-xl font-medium">New Task</h3>
			</div>
			<div className=" w-[45%] bg-green-400 py-6 px-9 rounded-xl">
				<h2 className="text-3xl">0</h2>
				<h3 className="text-xl font-medium">New Task</h3>
			</div>
			<div className=" w-[45%] bg-yellow-400 py-6 px-9 rounded-xl">
				<h2 className="text-3xl">0</h2>
				<h3 className="text-xl font-medium">New Task</h3>
			</div>
		</div>
	);
}
