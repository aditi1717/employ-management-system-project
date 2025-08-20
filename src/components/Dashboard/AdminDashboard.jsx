import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

export default function AdminDashboard({ changeUser }) {
	return (
		<div className="h-screen w-full p-7">
			<Header changeUser={changeUser} />
			<CreateTask />
			<AllTask />
		</div>
	);
}
