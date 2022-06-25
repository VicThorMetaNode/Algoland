import React, { useState } from "react";

//Import router
// import { Link } from "react-router-dom";
import Chat from "../Chat/ChatTest";
import io from "socket.io-client";

const ENDPOINT = "http://localhost:5000";

const socket = io.connect(ENDPOINT);

const Join = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", username, room);
      setShowChat(true);
    }
  };

  return (
    <>
      <div className="Join">
        {!showChat ? (
          <div className="joinChatContainer">
            <h3 className="join-title">Jump In</h3>
            <input
              placeholder="username"
              className="placeholder-join"
              type="text"
              onChange={(event) => setUsername(event.target.value)}
            />{" "}
            {/*we use event.target.value to store the data input*/}
            <input
              placeholder="room"
              className="placeholder-join"
              type="text"
              onChange={(event) => setRoom(event.target.value)}
            />
            {/*we use event.target.value to store the data input*/}
            <button onClick={joinRoom} className="btn-join">
              Join Your Room
            </button>
          </div>
        ) : (
          <Chat socket={socket} username={username} room={room} />
        )}
      </div>
    </>
  );
};

export default Join;
