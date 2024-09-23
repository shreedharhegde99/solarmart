import { FormEvent } from "react";

export default function Signup() {
  const handleSignup = (e: FormEvent) => {};
  return (
    <div className="mx-auto mt-2 border p-4 lg:w-1/4">
      <form onSubmit={handleSignup}>
        <h4 className="text-center text-lg">Create Account</h4>
        <div className="mt-2 grid gap-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            maxLength={30}
            className="h-10 rounded-sm border border-gray-500 p-2 outline-gray-700"
          />
        </div>
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
        <div className="mt-6 grid gap-2">
          <label htmlFor="password">Confirm Password:</label>
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
            CREATE ACCOUNT
          </button>
        </div>
      </form>
    </div>
  );
}
