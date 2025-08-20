const employees = [
	{
		id: 1,
		firstName: "Amit",
		email: "employee1@example.com",
		password: "123",
		tasks: [
			{
				title: "Fix login bug",
				description:
					"Resolve the issue where users can’t log in with correct credentials.",
				date: "2025-08-20",
				category: "Development",
				active: true,
				newTask: false,
				completed: false,
				failed: false,
			},
			{
				title: "Write unit tests",
				description: "Add Jest unit tests for authentication module.",
				date: "2025-08-22",
				category: "Testing",
				active: false,
				newTask: false,
				completed: true,
				failed: false,
			},
			{
				title: "Team meeting",
				description: "Weekly standup with project team.",
				date: "2025-08-21",
				category: "Meeting",
				active: false,
				newTask: false,
				completed: false,
				failed: true,
			},
		],
		taskSummary: {
			activeTasks: 1,
			newTasks: 0,
			completedTasks: 1,
			failedTasks: 1,
		},
	},
	{
		id: 2,
		firstName: "Priya",
		email: "employee2@example.com",
		password: "123",
		tasks: [
			{
				title: "Database schema update",
				description: "Update schema to support new user profile fields.",
				date: "2025-08-23",
				category: "Database",
				active: false,
				newTask: true,
				completed: false,
				failed: false,
			},
			{
				title: "Optimize API",
				description: "Improve response time for GET /users API.",
				date: "2025-08-25",
				category: "Backend",
				active: false,
				newTask: false,
				completed: true,
				failed: false,
			},
			{
				title: "Prepare report",
				description: "Monthly performance analytics report.",
				date: "2025-08-24",
				category: "Documentation",
				active: false,
				newTask: false,
				completed: false,
				failed: true,
			},
		],
		taskSummary: {
			activeTasks: 0,
			newTasks: 1,
			completedTasks: 1,
			failedTasks: 1,
		},
	},
	{
		id: 3,
		firstName: "Rahul",
		email: "employee3@example.com",
		password: "123",
		tasks: [
			{
				title: "UI bug fixes",
				description: "Fix spacing and alignment issues on dashboard page.",
				date: "2025-08-20",
				category: "Frontend",
				active: true,
				newTask: false,
				completed: false,
				failed: false,
			},
			{
				title: "Update color scheme",
				description: "Apply new branding colors to all components.",
				date: "2025-08-23",
				category: "Design",
				active: false,
				newTask: false,
				completed: true,
				failed: false,
			},
		],
		taskSummary: {
			activeTasks: 1,
			newTasks: 0,
			completedTasks: 1,
			failedTasks: 0,
		},
	},
	{
		id: 4,
		firstName: "Sneha",
		email: "employee4@example.com",
		password: "123",
		tasks: [
			{
				title: "Research competitors",
				description: "Analyze competitors’ feature sets.",
				date: "2025-08-19",
				category: "Research",
				active: false,
				newTask: false,
				completed: true,
				failed: false,
			},
			{
				title: "Fix notification bug",
				description: "Notifications not appearing on mobile.",
				date: "2025-08-21",
				category: "Frontend",
				active: false,
				newTask: true,
				completed: false,
				failed: false,
			},
		],
		taskSummary: {
			activeTasks: 0,
			newTasks: 1,
			completedTasks: 1,
			failedTasks: 0,
		},
	},
	{
		id: 5,
		firstName: "Arjun",
		email: "employee5@example.com",
		password: "123",
		tasks: [
			{
				title: "Security audit",
				description: "Perform vulnerability assessment.",
				date: "2025-08-26",
				category: "Security",
				active: true,
				newTask: false,
				completed: false,
				failed: false,
			},
			{
				title: "Deploy new version",
				description: "Deploy v2.1 to staging environment.",
				date: "2025-08-27",
				category: "Deployment",
				active: false,
				newTask: false,
				completed: true,
				failed: false,
			},
			{
				title: "Fix email templates",
				description: "Correct broken links in password reset emails.",
				date: "2025-08-22",
				category: "Bug Fixing",
				active: false,
				newTask: false,
				completed: false,
				failed: true,
			},
		],
		taskSummary: {
			activeTasks: 1,
			newTasks: 0,
			completedTasks: 1,
			failedTasks: 1,
		},
	},
];

const admin = [
	{
		id: 1,
		firstName: "Kavita",
		email: "admin@example.com",
		password: "123",
	},
];

export const setLocalStorage = () => {
	localStorage.setItem("employees", JSON.stringify(employees));
	localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
	const employees = JSON.parse(localStorage.getItem("employees"));
	const admin = JSON.parse(localStorage.getItem("admin"));
	// console.log(employees);

	// console.log(JSON.parse(data));
	return { employees, admin };
};
