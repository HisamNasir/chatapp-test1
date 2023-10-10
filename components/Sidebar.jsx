import React, { useState } from "react";
import Navbar from "./Layout";
import Search from "./Search";
import Chats from "./Chats";
import GroupChats from "./GroupChats";

const Sidebar = () => {
  const [selectedTab, setSelectedTab] = useState("chats");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="sidebar  overflow-y-scroll min-w-[400px] h-[100%]">
      <div className="tabs grid grid-flow-col divide-x-[1px] text-center">
        <div
          className={`tab ${
            selectedTab === "chats" ? "active" : ""
          }  p-2 cursor-pointer font-semibold `}
          onClick={() => handleTabClick("chats")}
        >
          Chats
        </div>
        <div
          className={`tab ${
            selectedTab === "groupChats" ? "active" : ""
          }  p-2 cursor-pointer  font-semibold `}
          onClick={() => handleTabClick("groupChats")}
        >
          Group Chats
        </div>
      </div>
      {selectedTab === "chats" ? <Search /> : null}
      <div className="">
        {selectedTab === "chats" ? <Chats /> : <GroupChats />}
      </div>
    </div>
  );
};

export default Sidebar;
