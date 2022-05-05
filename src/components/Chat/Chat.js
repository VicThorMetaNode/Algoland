import React, { useState, useEffect } from 'react'

//import Queries
import queryString from 'query-string'

//import socket client
import io from "socket.io-client"

//Import CCS
import './Chat.css'



let socket;


const Chat = ({ location }) => { // Location is from React Router and can be used as prop
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  //define endpoint
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
  //at the beginning if want to check what data we got back from react router we can also
  //const data = queryString.parse(location.search);
  //console.log(location.search);
  //console.log(data)
  const { name, room } = queryString.parse(location.search); //location.search gives us URL back from React Router: querystring.parse() method is used to parse a URL query string into an object that contains the key and pair values of the query URL

    socket = io(ENDPOINT);
  
    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, (error) => { // socket.emit convention: see doc: 1st pass a message then name and room
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]); //using an array here specified to useEffect to change every time ones of these values change 
  
  return (
    <h1>Chat</h1>
  );
}

export default Chat;