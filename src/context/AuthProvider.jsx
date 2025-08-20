import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
	const [usersData, setUsersData] = useState(null);
	useEffect(() => {
		setLocalStorage();
		const { employees } = getLocalStorage();

		setUsersData(employees);
	}, []);
	return (
		<div>
			<AuthContext.Provider value={[usersData, setUsersData]}>
				{children}
			</AuthContext.Provider>
		</div>
	);
}
