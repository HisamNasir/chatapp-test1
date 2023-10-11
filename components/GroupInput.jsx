import React, { useState } from "react";

const GroupInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text) {
      onSend(text);
      setText("");
    }
  };

  return (
    <div className="group-input">
      <input
        type="text"
        placeholder="Type a message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default GroupInput;
