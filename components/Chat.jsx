import React, { useContext } from "react";

import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat w-full ">
      <div className="chatInfo ">
        <span className="p-8 h-[72px]  relative flex items-center text-2xl">
          {data.user?.displayName}
        </span>
      </div>
      <div className=" flex flex-col ">
        <div className="  overflow-y-scroll h-[74vh]">
          <Messages />
        </div>
        <div className="flex items-end w-full ">
          <Input />
        </div>
      </div>
    </div>
  );
};

export default Chat;
