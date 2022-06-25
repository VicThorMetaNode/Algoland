import React, { useEffect, useState } from "react";

function ChatTest({ socket, username, room }) {
  //track current message
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  //send message w/ socket emit and use async to wait for respond
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
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
      // whenever this event is listening, it will setMessageList state to be equal to any list it was before but at the end (...list) it adds the new message that just be sent
    }
  };

  //receive message w/ socket emit
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h1>Live Chat</h1>
      </div>
      <div className="chat-body">
        {messageList.map((messageContent) => {
          return (
            <div
              className="message"
              id={username === messageContent.author ? "you" : "other"}
            >
              <div>
                <div className="message-content">
                  <p key="message">{messageContent.message}</p>
                </div>
                <div className="message-meta">
                  <p key="time" id="time">
                    {messageContent.time}
                  </p>
                  <p key="author" id="author">
                    {messageContent.author}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="AlgoNode message"
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default ChatTest;
