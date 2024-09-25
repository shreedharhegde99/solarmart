import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
const initLoginData = { email: "", password: "" };

export default function UserAuth() {
	const [userData, setUserData] = useState<typeof initLoginData>(initLoginData);
	const [errorState, setErrorState] = useState({ error: false, type: "", message: "" });

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
	};

	const validateData = () => {
		const { email, password } = userData;
		if (!email || !email.includes("@")) {
			setErrorState({ ...errorState, error: true, type: "email", message: "Please enter a valid Email" });
		} else if (!password) {
			setErrorState({ ...errorState, error: true, type: "password", message: "Please enter password" });
		} else {
			setErrorState({ ...errorState, error: false, message: "" });
		}
	};

	const displayErrorMessage = (field: "email" | "password") => {
		if (errorState.type === field) return <span className="text-red-500">{errorState.message}</span>;
	};

	const handleLogin = (e: FormEvent) => {
		e.preventDefault();
		validateData();
	};
	return (
		<div className="mt-2 flex lg:h-full lg:items-center">
			<div className="mx-auto border p-4 lg:w-1/4">
				<form onSubmit={handleLogin}>
					<h4 className="text-center text-lg">Sign In</h4>
					<div className="mt-2 grid gap-2">
						<label htmlFor="email">Email Address:</label>
						<input
							type="email"
							className="h-10 rounded-sm border border-gray-500 p-2 outline-gray-700"
							name="email"
							value={userData.email}
							onChange={handleInputChange}
						/>
						{errorState.error && displayErrorMessage("email")}
					</div>
					<div className="mt-6 grid gap-2">
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							className="h-10 rounded-sm border border-gray-500 p-2 outline-gray-700"
							name="password"
							value={userData.password}
							onChange={handleInputChange}
						/>
						{errorState.error && displayErrorMessage("password")}
					</div>
					<div className="mt-4 text-center">
						<button type="submit" className="w-full bg-green-800 p-2 text-white hover:bg-amber-300">
							SIGN IN
						</button>
					</div>
				</form>
				<span>
					New Customer? <Link to="/signup">Create Account</Link>
				</span>
			</div>
		</div>
	);
}
