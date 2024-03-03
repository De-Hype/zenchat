"use client";
import Link from "next/link";
import { useState } from "react";
import { SiZendesk } from "react-icons/si";

type Props = {};
const page = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const HandleLogin = (e: any) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex  py-3 px-4 items-center justify-center flex-col gap-2 w-1/2 tab:w-3/4 ">
        <SiZendesk className="text-5xl" />
        <form onSubmit={HandleLogin} className="flex flex-col w-full gap-2">
          <input
            type="text"
            name="email"
            onChange={(e: any) => setEmail(e.target.value)}
            className="text-sm outline-none rounded-xl border px-3 py-2"
            placeholder="Email Address"
            id=""
          />
          <input
            type="password"
            name="password"
            onChange={(e: any) => setPassword(e.target.value)}
            className="text-sm outline-none rounded-xl border px-3 py-2"
            placeholder="Password"
            id=""
          />
          <input
            type="submit"
            value="Log In"
            className="cursor-pointer text-sm outline-none py-2 text-white bg-blue-500 transition hover:bg-blue-300 rounded-xl"
            onClick={(e: any) => HandleLogin(e)}
          />
        </form>
        <div className="flex gap-3 pt-5 flex-col w-full">
          <button
            className="text-sm outline-none cursor-pointer py-2 bg-blue-500 rounded-xl text-white hover:bg-blue-300 transition"
            type="button"
          >
            Log in with Google
          </button>
          <button
            className="text-sm outline-none cursor-pointer py-2 bg-black rounded-xl text-white hover:bg-slate-700 transition"
            type="button"
          >
            Log in with Github
          </button>
        </div>
        <h3 className="">
          <span>Don't have an account?</span>
          <Link
            className="text-blue-500 transition hover:text-red-500"
            href="/register"
          >
            register
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default page;
