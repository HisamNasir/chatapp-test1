import React, { useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = async () => {
    try{
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err){
      console.error(err);
      const errorCode = err.code;
      const errorMessage = err.message;

    }
  };



  return (
    <Layout>
      <div className=" flex p-10 flex-col h-full justify-center items-center min-w-max loginContainer">
        <div
          className="bg-slate-200 dark:bg-slate-900 p-5 text-sm w-full max-w-lg rounded-xl space-y-4"
          // onSubmit={}
        >
          <h1 className=" text-lg font-bold">Login</h1>
          <div className=" space-y-1">
            <div className=" text-base">Email</div>
            <div>
              <input
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                type="password"
                value={password}
                placeholder="Password"
                className=" focus:outline focus:outline-1 focus:outline-slate-500 rounded-md p-2 w-full"
              />
            </div>
          </div>

          <div>
            <p className=" text-slate-500">
              Dont have an account{" "}
              <Link
                href="/signupPage"
                className=" hover:text-black transition-colors delay-75"
              >
                Signup
              </Link>
            </p>
          </div>
          <div>

            <button onClick={userLogin} className="w-full rounded-md p-2 text-center bg-slate-600 text-white hover:bg-slate-700 duration-500 transition-colors">
              Login
            </button>
          </div>
        </div>
      </div>

    </Layout>

  );
};

export default LoginPage;
