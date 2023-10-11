import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import GroupChatHistoryMessage from "./GroupChatHistoryMessage";

const GroupChatHistory = ({ groupChatId }) => {
  const [messages, setMessages] = useState([]);
  const groupChatHistoryRef = collection(db, "groupchatsHistory");

  useEffect(() => {
    if (groupChatId) {
      const q = query(
        groupChatHistoryRef,
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
    }
  }, [groupChatId]);

  return (
    <div className="group-chat-history">
      {messages.map((message, index) => (
        <GroupChatHistoryMessage
          key={index}
          message={message}
        />
      ))}
    </div>
  );
};

export default GroupChatHistory;
