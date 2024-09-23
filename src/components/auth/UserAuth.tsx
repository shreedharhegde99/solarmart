import { FormEvent } from "react";
import { Link } from "react-router-dom";

export default function UserAuth() {
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    console.log("DEBUG", "hello world. Once again!");
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
            />
          </div>
          <div className="mt-6 grid gap-2">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="h-10 rounded-sm border border-gray-500 p-2 outline-gray-700"
            />
          </div>
          <div className="mt-4 text-center">
            <button
              type="submit"
              className="w-full bg-green-800 p-2 text-white hover:bg-amber-300"
            >
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
