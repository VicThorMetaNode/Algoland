import React, { useEffect, useState } from "react";

function ChatTest({ socket, username, room }) {
  //track current message
  const [currentMessage, setCurrentMessage] = useState("");
  //send message w/ socket emit
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
    }
  };

  //receive message w/ socket emit
  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
    });
  }, [socket]);

  return (
    <div>
      <div>
        <h1>Live Chat</h1>
      </div>
      <div>
        <input
          type="text"
          value={currentMessage}
          placeholder="Algolab message"
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default ChatTest;



// AVEC SOCKET IO POUR CHAT SUR AUTRE PAGE !!!!

import React, { useEffect, useState } from "react";
import io from "socket.io-client";
//define endpoint
const ENDPOINT = "http://localhost:5000";

const ChatTest = ({ socket, username, room }) => {
  //track current message
  const [currentMessage, setCurrentMessage] = useState("");
  //send message w/ socket emit
  const sendMessage = async () => {
    const socket = io(ENDPOINT);
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
    }
  };

  //receive message w/ socket emit
  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.on("receive_message", (data) => {
      console.log(data);
    });
  }, [socket]);

  return (
    <section>
      <div>
        <h1>Live Chat</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Algolab message"
          onChange={(event) => setCurrentMessage(event.target.value)}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </section>
  );
};

export default ChatTest;
