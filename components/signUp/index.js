import React, { useState } from "react";
const axios = require("axios");
import { urlPath } from "../../config";
import Router from "next/router";

function MyApp() {
  const [email, setEmail] = useState("");
  const [emailFLag, setEmailFLag] = useState(false);
  const [name, setName] = useState("");
  const [nameFlag, setNameFlag] = useState(false);
  const [passwordFLag, setPasswordFLag] = useState(false);
  const [password, setPassword] = useState("");
  const [viewPass, setViewPass] = useState(false);
  let router = Router.router;
  const submit = (event) => {
    event.preventDefault();

    let flag = false;
    if (!email) {
      setEmailFLag(true);
      flag = true;
    }
    if (!password) {
      setPasswordFLag(true);
      flag = true;
    }
    if (flag) {
      return;
    }

    axios
      .post(
        urlPath + "/signup",
        {
          name,
          email,
          password,
        },
        {
          "Content-Type": "application/json",
          Authorization: "JWT fefege...",
        }
      )
      .then(function (res) {
        localStorage.setItem(
          "user",
          JSON.stringify({ email: res.data.response.user.email })
        );
      })
      .catch(function (error) {
        console.log(error);
      });
    Router.push("/login");
  };
  return (
    <div className="h-screen bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p
            tabIndex={0}
            role="heading"
            aria-label="Login to your account"
            className="text-2xl font-extrabold leading-6 text-gray-800"
          >
            Aready have an account
          </p>
          <a href="/login">
            <p className="text-sm mt-4 font-medium leading-none text-gray-500">
              Dont have account?{" "}
              <span
                tabIndex={0}
                role="link"
                aria-label="Sign up here"
                className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
              >
                {" "}
                Log in here
              </span>
            </p>
          </a>
          <form id="loginForm" onSubmit={submit}>
            <div className="mt-12 w-full px-8 sm:px-0 lg:px-0">
              <div className="flex flex-col mt-5">
                <lable className="text-sm font-medium leading-none text-gray-800">
                  Name
                </lable>
                <input
                  id="email2"
                  className={
                    "bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" +
                    (nameFlag ? "border border-red-800" : "")
                  }
                  type="text"
                  onChange={(event) => {
                    setName(event.target.value);
                    setNameFlag(false);
                  }}
                />
                {nameFlag && (
                  <p className="pt-2 h-4 text-red-800 text-xs">Required*</p>
                )}
              </div>
              <div className="flex flex-col mt-5">
                <lable className="text-sm font-medium leading-none text-gray-800">
                  Email
                </lable>
                <input
                  id="email2"
                  className={
                    "bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" +
                    (emailFLag ? "border border-red-800" : "")
                  }
                  type="text"
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setEmailFLag(false);
                  }}
                />
                {emailFLag && (
                  <p className="pt-2 h-4 text-red-800 text-xs">Required*</p>
                )}
              </div>

              <div className="flex flex-col mt-5">
                <label
                  htmlFor="password"
                  className="text-sm font-medium leading-none text-gray-800 mb-2"
                >
                  Password
                </label>
                <div className="relative pb-2">
                  <div
                    onClick={() => {
                      setViewPass(!viewPass);
                    }}
                    className="absolute inset-0 m-auto mr-4 w-5 h-5 text-gray-100 hover:text-gray-300 cursor-pointer"
                  >
                    {viewPass ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-eye"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={12} cy={12} r={2} />
                        <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                        <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-eye-off"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="3" y1="3" x2="21" y2="21" />
                        <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                        <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />
                      </svg>
                    )}
                  </div>
                  <input
                    type={viewPass ? "text" : "password"}
                    id="password"
                    className={
                      "bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" +
                      (passwordFLag
                        ? "border border-red-800"
                        : "border-trasnparent")
                    }
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setPasswordFLag(false);
                    }}
                  />
                </div>
                {passwordFLag && (
                  <p className="pt-1 h-4 text-red-800 text-xs">Required*</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <button
                id="btnlog"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
                login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
