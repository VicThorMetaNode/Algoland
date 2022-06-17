import React, { useState } from "react";

//Import router
// import { Link } from "react-router-dom";
import Chat from "../Chat/ChatTest";
import io from "socket.io-client";

//Import CCS
import "./Join.css";
const ENDPOINT = "http://localhost:5000";

const socket = io.connect(ENDPOINT);

const Join = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", username, room);
    }
  };

  // (e) => (!username || !room ? e.preventDefault() : null)

  return (
    <section className="join-section">
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="join-title">Jump In</h1>
          <input
            placeholder="username"
            className="joinInput"
            type="text"
            onChange={(event) => setUsername(event.target.value)}
          />{" "}
          {/*we use event.target.value to store the data input*/}
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
          {/*we use event.target.value to store the data input*/}
          {/* <Link to={`/chat?username=${username}?room=${room}&socket=${socket}`}> */}
          <button onClick={joinRoom} className="button mt-20">
            Sign In
          </button>
          {/* </Link> */}
        </div>
        <Chat socket={socket} username={username} room={room} />
      </div>
    </section>
  );
};

export default Join;
