import "../styles/globals.css";
import { AuthContextProvider } from "../context/AuthContext";
import { ChatContextProvider } from "../context/ChatContext";
import { GroupChatContextProvider } from "../context/GroupChatContext"; // Import the GroupChatContextProvider
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ThemeProvider attribute="class">
    <AuthContextProvider>
      <ChatContextProvider>
        <GroupChatContextProvider> 
          <Component {...pageProps} />
        </GroupChatContextProvider>
      </ChatContextProvider>
    </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
