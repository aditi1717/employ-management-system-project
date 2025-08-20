import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage } from "./utils/localStorage";

function App() {
	const [user, setUser] = useState(null);
	const [loggedInUserData, setLoggedInUserData] = useState(null);
	const [usersData, setUsersData] = useContext(AuthContext);
	useEffect(() => {
		const loggedInUser = localStorage.getItem("loggedInUser");
		if (loggedInUser) {
			const userData = JSON.parse(loggedInUser);
			setUser(userData.role);
			setLoggedInUserData(userData.data);
			// console.log(userData);
		}
	}, []);

	const handleLogin = (email, password) => {
		if (email == "admin@gmail.com" && password == "123") {
			setUser("admin");
			localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
		} else if (usersData) {
			const employee = usersData.find(
				(e) => e.email == email && password == e.password
			);
			if (employee) {
				setUser("employee");
				setLoggedInUserData(employee);
				localStorage.setItem(
					"loggedInUser",
					JSON.stringify({ role: "employee", data: employee })
				);
			}
		} else {
			alert("invalid credentials");
		}
	};

	return (
		<>
			{!user ? <Login handleLogin={handleLogin} /> : ""}
			{user == "admin" ? (
				<AdminDashboard changeUser={setUser} />
			) : user == "employee" ? (
				<EmployeeDashboard data={loggedInUserData} changeUser={setUser} />
			) : null}
			{/* <EmployeeDashboard /> */}
			{/* <AdminDashboard /> */}
		</>
	);
}

export default App;
