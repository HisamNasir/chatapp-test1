import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";
import { query, collection, where, onSnapshot } from "firebase/firestore";
import GroupChat from "./GroupChat";

const GroupSection = () => {
  const { currentUser } = useContext(AuthContext);
  const [groupChats, setGroupChats] = useState([]);
  const [selectedGroupChat, setSelectedGroupChat] = useState(null);

  useEffect(() => {
    const groupChatsRef = collection(db, "GroupChats");
    const q = query(collection(db, "GroupChats"), where("participants", "array-contains", currentUser.uid));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const chats = [];
      querySnapshot.forEach((doc) => {
        const chatData = doc.data();
        chats.push({ id: doc.id, name: chatData.name });
      });
      setGroupChats(chats);
    });

    return () => unsubscribe();
  }, [currentUser.uid]);

  const handleSelectGroupChat = (groupChatId) => {
    setSelectedGroupChat(groupChatId);
  };

  return (
    <div className="group-section">
      <div className="group-chats">
        {groupChats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => handleSelectGroupChat(chat.id)}
          >
            {chat.name}
          </div>
        ))}
      </div>
      {selectedGroupChat && <GroupChat groupChatId={selectedGroupChat} />}
    </div>
  );
};

export default GroupSection;
