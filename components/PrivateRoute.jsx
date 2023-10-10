import React from "react";
import { useRouter } from "next/router";

const PrivateRoute = ({ children }) => {
  const router = useRouter();

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  if (user) {
    return <>{children}</>;
  }
  if (typeof window !== "undefined") {
    router.push("/login");
  }
  return null;
};

export default PrivateRoute;
