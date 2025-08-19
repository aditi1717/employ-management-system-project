import { useState } from "react";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		console.log("Email is ", email);
		console.log("Password is ", password);

		setEmail("");
		setPassword("");
	};
	return (
		<div className="flex justify-center items-center h-screen w-screen">
			<div className="border-2 border-emerald-600 p-20 rounded-xl">
				<form
					onSubmit={(e) => {
						submitHandler(e);
					}}
					className="  flex flex-col justify-center items-center"
				>
					<input
						className=" placeholder:text-gray-400 outline-none border-2 border-emerald-600 py-3 px-5 text-xl rounded-full"
						type="email"
						placeholder="Enter your email"
						value={email}
						required
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<input
						className="mt-3  placeholder:text-gray-400 outline-none border-2 border-emerald-600 py-3 px-5 text-xl rounded-full"
						type="password"
						placeholder="Enter your password"
						value={password}
						required
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
					<button className="mt-5  bg-emerald-600 hover:bg-emerald-700 w-full py-3 px-5 text-xl rounded-full">
						Log in
					</button>
				</form>
			</div>
		</div>
	);
}
