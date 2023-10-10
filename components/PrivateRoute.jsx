import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase"; // Replace with your Firebase auth setup

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authenticatedUser) => {
      if (authenticatedUser) {
        setUser(authenticatedUser);
      } else {
        setUser(null);
        if (typeof window !== "undefined") {
          router.push("/login");
        }
      }
    });

    // Clean up the observer when the component unmounts
    return () => unsubscribe();
  }, [router]);

  if (user) {
    return <>{children}</>;
  } else {
    // Redirect to login page if the user is not logged in
    if (typeof window !== "undefined") {
      router.push("/loginPage");
    }
    return null;
  }
};

export default PrivateRoute;
