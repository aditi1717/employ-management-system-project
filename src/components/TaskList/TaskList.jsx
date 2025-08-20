import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

export default function TaskList({ data }) {
	return (
		<div
			id="tasklist"
			className="text-white overflow-x-auto mt-10 h-[55%] py-5 w-full  flex items-center justify-start gap-5 flex-nowrap"
		>
			{data.tasks.map((task, index) => {
				// console.log(task);

				if (task.active) {
					return <AcceptTask key={index} data={task} />;
				}
				if (task.newTask) {
					return <NewTask key={index} data={task} />;
				}
				if (task.completed) {
					return <CompleteTask key={index} data={task} />;
				}
				if (task.failed) {
					return <FailedTask key={index} data={task} />;
				}
			})}

			{/* <AcceptTask />
			<NewTask />
			<CompleteTask />
			<FailedTask /> */}
		</div>
	);
}
