import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";
import { collection, doc, addDoc } from "firebase/firestore";
import Input from "./Input";
import Messages from "./Messages";

const GroupChat = ({ groupChatId }) => {
  const { currentUser } = useContext(AuthContext);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Load group chat messages from groupchatsHistory collection
    const groupChatRef = collection(db, "groupchatsHistory", groupChatId);
    // Define a query to order messages by timestamp
    const q = query(groupChatRef, orderBy("timestamp"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const chatMessages = [];
      querySnapshot.forEach((doc) => {
        chatMessages.push(doc.data());
      });
      setMessages(chatMessages);
    });

    return () => unsubscribe();
  }, [groupChatId]);

  const handleSend = async () => {
    if (text) {
      const groupChatRef = collection(db, "groupchatsHistory", groupChatId);
      await addDoc(groupChatRef, {
        text,
        senderId: currentUser.uid,
        timestamp: new Date(),
      });
      setText("");
    }
  };

  return (
    <div className="group-chat">
      <div className="group-chat-header">
        <h2>Group Chat Name</h2>
      </div>
      <Messages messages={messages} />
      <Input text={text} onTextChange={setText} onSend={handleSend} />
    </div>
  );
};

export default GroupChat;
