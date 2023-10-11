import React from "react";

const GroupMessages = ({ messages }) => {
  return (
    <div className="group-messages">
      {messages.map((message, index) => (
        <div key={index} className="group-message">
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
};

export default GroupMessages;
