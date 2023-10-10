import React, { useEffect, useState } from "react";
import { decremented, incremented } from "@/src/store/features/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import Layout from "@/components/Layout";
import { getAuth, signOut } from "firebase/auth";
import { app } from "@/firebase";

export default function HomePage() {
  // Use 'useSelector' to select the 'counter' state from the Redux store.
  const { value } = useSelector((state) => state.counter);

  // Use 'useDispatch' to get access to the Redux store's 'dispatch' function.
  const dispatch = useDispatch();
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
    <Layout>
      <div className="">
        <div className=" text-center">
          {" "}
          {user ? (
            <>
              <div>{user.email}</div>
            </>
          ) : null}
        </div>
        <h1 className="text-xl lg:text-6xl text-center py-10 uppercase tracking-[2px]">
          Hello {value}
        </h1>
        <div className="flex justify-center gap-x-8 items-center">
          {/* Button to increment the counter value, also using bg silver on this button which is declared into tailwind config */}

          <button
            onClick={() => dispatch(incremented())}
            className="bg-silver text-white px-12 py-2 text-2xl rounded-lg"
          >
            +
          </button>
          {/* Button to decrement the counter value */}
          <button
            onClick={() => dispatch(decremented())}
            className="bg-black text-white px-12 py-2 text-2xl rounded-lg"
          >
            -
          </button>
        </div>
      </div>
    </Layout>
  );
}
