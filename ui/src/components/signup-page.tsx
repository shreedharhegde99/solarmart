import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignupPage() {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const toggleConfirmPasswordVisibility = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};

	return (
		<div className="container mx-auto flex min-h-screen items-center justify-center px-4">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle className="text-center text-2xl font-bold">Create an Account</CardTitle>
					<CardDescription className="text-center">Sign up to start shopping for solar products</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="name">Name</Label>
								<Input id="name" placeholder="Enter your name" required />
							</div>
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input id="email" type="email" placeholder="Enter your email" required />
							</div>
							<div className="space-y-2">
								<Label htmlFor="password">Password</Label>
								<div className="relative">
									<Input
										id="password"
										type={showPassword ? "text" : "password"}
										placeholder="Enter your password"
										required
									/>
									<Button
										type="button"
										variant="ghost"
										size="icon"
										className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
										onClick={togglePasswordVisibility}
									>
										{showPassword ? (
											<EyeOff className="h-4 w-4 text-gray-500" />
										) : (
											<Eye className="h-4 w-4 text-gray-500" />
										)}
										<span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
									</Button>
								</div>
							</div>
							<div className="space-y-2">
								<Label htmlFor="confirmPassword">Confirm Password</Label>
								<div className="relative">
									<Input
										id="confirmPassword"
										type={showConfirmPassword ? "text" : "password"}
										placeholder="Confirm your password"
										required
									/>
									<Button
										type="button"
										variant="ghost"
										size="icon"
										className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
										onClick={toggleConfirmPasswordVisibility}
									>
										{showConfirmPassword ? (
											<EyeOff className="h-4 w-4 text-gray-500" />
										) : (
											<Eye className="h-4 w-4 text-gray-500" />
										)}
										<span className="sr-only">{showConfirmPassword ? "Hide password" : "Show password"}</span>
									</Button>
								</div>
							</div>
						</div>
						<Button className="mt-6 w-full" type="submit">
							Sign Up
						</Button>
					</form>
				</CardContent>
				<CardFooter>
					<p className="w-full text-center text-sm">
						Already have an account?{""}
						<Link to="/login" className="text-neutral-900 hover:underline dark:text-neutral-50">
							Sign in
						</Link>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
}
