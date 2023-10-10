import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

import Home from "./home";
import Login from "./login";
import Register from "./register";

function App() {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
  }, [currentUser, router]);

  return (
    <>
      <main id="__next">{currentUser ? <Home /> : null}</main>
    </>
  );
}

export default App;
