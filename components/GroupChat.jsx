import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";
import {
  collection,
  doc,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import GroupMessages from "./GroupMessages";
import GroupInput from "./GroupInput";

const GroupChat = ({ groupChatId }) => {
  const { currentUser } = useContext(AuthContext);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const groupChatRef = doc(db, "groupChats", groupChatId);

  useEffect(() => {
    if (!groupChatId) return;

    const q = query(
      collection(groupChatRef, "messages"),
      orderBy("timestamp")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const chatMessages = [];
      querySnapshot.forEach((doc) => {
        chatMessages.push(doc.data());
      });
      setMessages(chatMessages);
    });

    return () => unsubscribe();
  }, [groupChatId]);

  const handleSend = async (text) => {
    if (text) {
      if (groupChatId) {
        const newMessageRef = await addDoc(
          collection(groupChatRef, "messages"),
          {
            text,
            senderId: currentUser.uid,
            timestamp: new Date(),
          }
        );
      }
    }
  };

  return (
    <div className="group-chat">
      <div className="group-chat-header">
        <h2>Group Chat Name</h2>
      </div>
      <GroupMessages messages={messages} />
      <GroupInput onSend={handleSend} />
    </div>
  );
};

export default GroupChat;
