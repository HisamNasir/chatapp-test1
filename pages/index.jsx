// Import the action creators 'incremented' and 'decremented' from the 'counterSlice'.


// Import the 'Head' component from 'next/head' to set document head metadata.
import Head from "next/head";

// Import 'useDispatch' and 'useSelector' hooks from 'react-redux' to interact with the Redux store.

import HomePage from "./HomePage";
import SignupPage from "./SignupPage";

// Define your main application component.
export default function Home() {

  return (
    <>
      {/* Set document head metadata */}
      <Head>
        <title>Chat</title>
      </Head>

      <main>
        {/* Display the current counter value */}
          <SignupPage/>

      </main>
    </>
  );
}
