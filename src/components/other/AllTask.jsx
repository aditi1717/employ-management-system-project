import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export default function AllTask() {
	const [usersData, setUsersData] = useContext(AuthContext);

	return (
		<div className="bg-[#1C1C1C] p-5 mt-5 rounded h-60 ">
			<div className="py-2 px-4 bg-red-400 flex justify-between rounded-2xl mb-2">
				<h2 className="w-1/5 text-lg font-medium">Employee Name</h2>
				<h3 className="w-1/5 text-lg font-medium">New Task</h3>
				<h5 className="w-1/5 text-lg font-medium">Active Task</h5>
				<h5 className="w-1/5 text-lg font-medium">Completed</h5>
				<h5 className="w-1/5 text-lg font-medium">Failed</h5>
			</div>
			<div className="overflow-auto">
				{usersData.map((employee) => {
					return (
						<div
							key={employee.id}
							className="py-2 px-4  flex justify-between rounded-2xl mb-2  border border-white"
						>
							<h2 className="w-1/5 text-lg font-medium text-white">
								{employee.firstName}
							</h2>
							<h3 className="w-1/5 text-lg font-medium text-blue-600">
								{employee.taskSummary.newTasks}
							</h3>
							<h5 className="w-1/5 text-lg font-medium text-yellow-400">
								{employee.taskSummary.activeTasks}
							</h5>
							<h5 className="w-1/5 text-lg font-medium text-white">
								{employee.taskSummary.completedTasks}
							</h5>
							<h5 className="w-1/5 text-lg font-medium text-red-600">
								{employee.taskSummary.failedTasks}
							</h5>
						</div>
					);
				})}
			</div>
		</div>
	);
}
