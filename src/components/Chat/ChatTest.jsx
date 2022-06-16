import React from "react";
import io from "socket.io-client";
//define endpoint
const ENDPOINT = "localhost:5000";
const socket = io(ENDPOINT);

const ChatTest = () => {
  return <div>ChatTest</div>;
};

export default ChatTest;
