import React, { useContext } from "react";

import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat w-full ">
      <div className="chatInfo ">
        <span className="p-8 h-[72px] bg-gray-900 bg-opacity-50  relative flex items-center text-2xl">
        {data.user?.displayName || data.chat?.name}
        </span>
      </div>
      <div className=" flex flex-col  ">
        <div className="  overflow-y-scroll h-[74%]">
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
