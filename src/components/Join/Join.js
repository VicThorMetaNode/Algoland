import React, { useState } from "react";

//Import router
import { Link } from "react-router-dom";
import io from "socket.io-client";

//Import CCS
import "./Join.css";

const socket = io.connect("http://localhost:5000");

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
          <Link
            onClick={joinRoom}
            to={`/chat?username=${username}&room=${room}`}
          >
            <button className="button mt-20" type="submit">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Join;
