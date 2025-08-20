import { useState } from "react";

export default function Header(props) {
	// console.log(data);
	// const [userName, setUserName] = useState("");
	// if (!data) {
	// 	setUserName("Admin");
	// } else {
	// 	setUserName(data.firstName);
	// }
	const logOutUser = () => {
		localStorage.setItem("loggedInUser", "");
		props.changeUser("");

		// window.location.reload();
	};
	return (
		<div className="flex justify-between items-end">
			<h1 className="text-2xl font-medium text-white">
				Hello <br />
				<span className="text-3xl font-semibold">Admin 👋</span>
			</h1>
			<button
				onClick={logOutUser}
				className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm "
			>
				Log Out
			</button>
		</div>
	);
}
