import Link from "next/link";

import React, { useState, useEffect } from "react";
import DarkModButton from "./DarkModButton";
import { FaComments, FaPowerOff } from "react-icons/fa";
import { getAuth, signOut } from "firebase/auth";
import { app } from "@/firebase";

const Header = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <header className="h-[62px]">
      <nav className="bg-white min-w-max dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/HomePage" className="flex gap-2 items-center">
            <FaComments className="text-3xl" />
            <h1 className=" text-xl">Chat App</h1>
          </a>
          <div className=" hidden sm:flex sm:gap-2 ">
            {user ? (
              <>
                <div>img</div>
                <div>{user.email}</div>
              </>
            ) : null}
          </div>
          <div className="flex gap-2 md:order-2">
            <DarkModButton />
            <div className=" sm:hidden flex">
              {user ? (
                <>
                  <div>img</div>
                </>
              ) : null}
            </div>
            {user ? (
              <button
                className="bg-gray-800 flex dark:bg-gray-50 hover:bg-gray-600 gap-2 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-2 py-1 text-sm items-center md:text-sm rounded-lg "
                onClick={() => signOut(auth)}
              >
                <FaPowerOff />
              </button>
            ) : null}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
