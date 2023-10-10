
import Head from "next/head";


import HomePage from "./HomePage";
import SignupPage from "./SignupPage";
import PrivateRoute from "@/components/PrivateRoute";

export default function Home() {

  return (
    <>
      {/* Set document head metadata */}
      <Head>
        <title>Chat</title>
      </Head>

      <main>
         <PrivateRoute>
          <HomePage/>

         </PrivateRoute>

      </main>
    </>
  );
}
