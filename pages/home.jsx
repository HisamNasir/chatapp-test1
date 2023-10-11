import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import { GroupSection } from "../components/GroupSection"; // Make sure you import the GroupSection component
import Layout from "@/components/Layout";

const Home = () => {
  const [selectedGroupChat, setSelectedGroupChat] = useState(null);

  return (
    <Layout>
      <div className="h-full">
        <div className="fixed w-full"></div>
        <div className="flex h-full">
          <Sidebar setSelectedGroupChat={setSelectedGroupChat} />
          {selectedGroupChat ? (
            <GroupSection groupChatId={selectedGroupChat} />
          ) : (
            <Chat />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
