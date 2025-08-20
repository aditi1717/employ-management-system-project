import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

export default function CreateTask() {
	const [userData, setUserData] = useContext(AuthContext);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState("");
	const [assignTo, setAssignTo] = useState("");
	const [category, setCategory] = useState("");
	const [newTask, setNewTask] = useState({});
	const submitHandler = (e) => {
		e.preventDefault();
		setNewTask({
			title,
			description,
			date,
			category,
			active: false,
			newTask: true,
			failed: false,
			completed: false,
		});
		const data = userData;
		console.log(data);

		data.forEach((employee) => {
			if (employee.firstName.toLowerCase() == assignTo.toLowerCase()) {
				employee.tasks.push(newTask);
				employee.taskSummary.newTasks = employee.taskSummary.newTasks + 1;
			}
		});
		console.log(data);

		setUserData(data);
		setTitle("");
		setDescription("");
		setCategory("");
		setAssignTo("");
		setDate("");
	};
	return (
		<div className="p-5 bg-[#1C1C1C] mt-7 rounded">
			<form
				onSubmit={(e) => {
					submitHandler(e);
				}}
				className="
				flex flex-wrap items-start justify-between w-full "
			>
				<div className="w-1/2">
					<div>
						<h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
						<input
							onChange={(e) => {
								setTitle(e.target.value);
							}}
							className="text-white placeholder:text-gray-400 text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4"
							type="text"
							placeholder="Make a UI design"
							value={title}
						/>
					</div>
					<div>
						<h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
						<input
							onChange={(e) => {
								setDate(e.target.value);
							}}
							className="text-white  text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4"
							type="date"
							value={date}
						/>
					</div>
					<div>
						<h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
						<input
							onChange={(e) => {
								setAssignTo(e.target.value);
							}}
							className="text-white placeholder:text-gray-400 text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4"
							type="text"
							placeholder="Employee Name"
							value={assignTo}
						/>
					</div>
					<div>
						<h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
						<input
							onChange={(e) => {
								setCategory(e.target.value);
							}}
							className="text-white placeholder:text-gray-400 text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 "
							type="text"
							placeholder="design,dev,etc"
							value={category}
						/>
					</div>
				</div>

				<div className="w-2/5 flex flex-col items-start">
					<h3 className=" text-sm text-gray-300 mb-0.5">Description</h3>
					<textarea
						onChange={(e) => {
							setDescription(e.target.value);
						}}
						value={description}
						className="text-white w-full h-44 text-sm py-2 px-4 rounded outline-none border-[1px] border-gray-400"
					></textarea>
					<button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
						Create Task
					</button>
				</div>
			</form>
		</div>
	);
}
