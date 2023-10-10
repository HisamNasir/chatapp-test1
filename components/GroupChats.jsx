import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { ChatContext } from "../context/ChatContext";
import { FaLayerGroup } from "react-icons/fa";

const GroupChats = () => {
  const [groupChats, setGroupChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const q = query(
      collection(db, "chats"),
      where("participants", "array-contains", currentUser.uid)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const chats = [];
      querySnapshot.forEach((doc) => {
        const chatData = doc.data();
        const participants = chatData.participants || [];
        const firstParticipant = participants[0] || {};

        chats.push({
          id: doc.id,
          name: chatData.name || "",
          participants,
          lastMessage: chatData.lastMessage || null,
          photoURL: firstParticipant.photoURL || "",
        });
      });
      setGroupChats(chats);
    });

    return () => {
      unsubscribe();
    };
  }, [currentUser.uid]);

  const handleSelect = (chat) => {
    // Set the selected chat and user in the ChatContext
    dispatch({
      type: "SET_SELECTED_CHAT",
      payload: { chat, user: currentUser },
    });
  };

  return (
    <div className="group-chats mt-[1px]">
      <div className="chats h-full">
        {groupChats.map((chat) => (
          <div
            className="userChat bg-slate-600 text-white  flex gap-4 p-2 border-b-[1px] border-slate-500 hover:bg-slate-700 hover:text-white cursor-pointer items-center"
            key={chat.id}
            onClick={() => handleSelect(chat)}
          >
           <div className="h-16 text-amber-600 flex items-center mx-2 text-3xl">
              <FaLayerGroup/>
            </div>
            <div className="userChatInfo">
              <span className="font-semibold">{chat.name}</span>
              <p className="">{chat.lastMessage?.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupChats;
