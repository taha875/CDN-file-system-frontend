import React from "react";
export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-3xl">WELCOME </h1>
      <h1 className="text-xl mt-4">Proceed to Login or Sign-up</h1>
      <div className="flex items-center justify-center gap-5 mt-12">
        <a href="/login">
          <button className="px-6 py-2 bg-indigo-600 text-white focus:outline-none rounded-md">
            Login
          </button>
        </a>
        <a href="/signUp">
          <button className="px-6 py-2 bg-indigo-600 text-white focus:outline-none rounded-md">
            Sign Up
          </button>
        </a>
      </div>
    </div>
  );
}
