import React, { useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    try{
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err){
      console.error(err);
    }
  };

  return (
    <Layout>
      <div className=" flex min-w-max flex-col h-full justify-center items-center registerContainer">
        <div className="bg-slate-200 dark:bg-slate-900  p-5 text-sm w-full max-w-lg rounded-xl space-y-4">
          <h1 className=" text-lg font-bold">Sign Up</h1>

          <div className=" space-y-1">
            <div className=" text-base">First Name</div>
            <div>
              <input
                required
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                value={firstName}
                placeholder="First Name"
                className=" focus:outline focus:outline-1 focus:outline-slate-500 rounded-md p-2 w-full"
              />
            </div>
          </div>
          <div className=" space-y-1">
            <div className=" text-base">Last Name</div>
            <div>
              <input
                required
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                value={lastName}
                placeholder="Last Name"
                className=" focus:outline focus:outline-1 focus:outline-slate-500 rounded-md p-2 w-full"
              />
            </div>
          </div>
          <div className=" space-y-1">
            <div className=" text-base">Email</div>
            <div>
              <input
                required
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
                placeholder="Email"
                className=" focus:outline focus:outline-1 focus:outline-slate-500 rounded-md p-2 w-full"
              />
            </div>
          </div>
          <div className=" space-y-1">
            <div className=" text-base">Password</div>
            <div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                value={password}
                placeholder="Password"
                className=" focus:outline focus:outline-1 focus:outline-slate-500 rounded-md p-2 w-full"
              />
            </div>
          </div>
          <div>
            <p className=" text-slate-500">
              Already have an account?{" "}
              <Link
                href="/LoginPage"
                className=" hover:text-black transition-colors delay-75"
              >
                Login
              </Link>
            </p>
          </div>
          <div>
            <button
              onClick={registerUser}
              className=" w-full rounded-md p-2 text-center bg-slate-600 text-white hover:bg-slate-700 duration-500 transition-colors"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignupPage;
