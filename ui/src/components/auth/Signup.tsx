import { ChangeEvent, FormEvent, useRef, useState } from "react";
const initUserData = {
	name: "",
	email: "",
	password: "",
	confirm_password: "",
};

export default function Signup() {
	const [signupData, setSignupData] = useState<typeof initUserData>(initUserData);
	const [errorState, setErrorState] = useState({ error: false, type: "", message: "" });
	const formref = useRef() as any;

	const handleInputchange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setSignupData({ ...signupData, [name]: value });
	};

	const validateData = () => {
		const { name, email, confirm_password, password } = signupData;
		if (!name) {
			setErrorState({ ...errorState, error: true, type: "name", message: "Name is required" });
		} else if (!email || !email.includes("@")) {
			setErrorState({ ...errorState, error: true, type: "email", message: "Please enter a valid Email" });
		} else if (!password) {
			setErrorState({ ...errorState, error: true, type: "password", message: "Password is required" });
		} else if (!confirm_password || password !== confirm_password) {
			setErrorState({ ...errorState, error: true, type: "confirm_password", message: "Passwords are not matching" });
		} else {
			setErrorState({ ...errorState, error: false, type: "", message: "" });
		}
	};

	// const signupUser = (data: typeof initUserData) => {};

	const handleSignup = (e: FormEvent) => {
		e.preventDefault();
		validateData();
		// signupUser(signupData);
		formref?.current?.reset();
	};

	const inputErrorMsg = (field: "name" | "email" | "password" | "confirm_password") => {
		const { type, message } = errorState;
		if (field === type) {
			return <span className="text-sm font-medium text-red-500">{message}</span>;
		}
	};

	return (
		<div className="mx-auto mt-2 border p-4 lg:w-1/2 xl:w-1/4">
			<form ref={formref} onSubmit={handleSignup}>
				<h4 className="text-center text-lg">Create Account</h4>
				<div className="mt-2 grid gap-2">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						maxLength={30}
						className="h-10 rounded-sm border border-gray-500 p-2 outline-gray-700"
						name="name"
						value={signupData.name}
						onChange={handleInputchange}
					/>
					{errorState.error && inputErrorMsg("name")}
				</div>
				<div className="mt-2 grid gap-2">
					<label htmlFor="email">Email Address:</label>
					<input
						type="email"
						className="h-10 rounded-sm border border-gray-500 p-2 outline-gray-700"
						name="email"
						value={signupData.email}
						onChange={handleInputchange}
					/>
					{errorState.error && inputErrorMsg("email")}
				</div>
				<div className="mt-6 grid gap-2">
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						className="h-10 rounded-sm border border-gray-500 p-2 outline-gray-700"
						name="password"
						value={signupData.password}
						onChange={handleInputchange}
					/>
					{errorState.error && inputErrorMsg("password")}
				</div>
				<div className="mt-6 grid gap-2">
					<label htmlFor="password">Confirm Password:</label>
					<input
						type="password"
						className="h-10 rounded-sm border border-gray-500 p-2 outline-gray-700"
						name="confirm_password"
						value={signupData.confirm_password}
						onChange={handleInputchange}
					/>
					{errorState.error && inputErrorMsg("confirm_password")}
				</div>
				<div className="mt-4 text-center">
					<button type="submit" className="w-full bg-green-800 p-2 text-white hover:bg-amber-300">
						CREATE ACCOUNT
					</button>
				</div>
			</form>
		</div>
	);
}
