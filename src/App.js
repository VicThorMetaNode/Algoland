import React from "react";

//we may better used Redux instead but let's keep it simple
import { Routes, Route } from "react-router";

//Import Layout Component
import Layout from "./components/Layout";

//import routes
import Homepage from "./components/Homepage";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/ChatTest";

import "./scss/style.scss";

/* First time the user visit the page, will be redirected to Join & pass login data then will be redirected to Chat  */
/* Once we have the data, passed through query strings, we render the chat component */
const App = () => {
  return (
    <>
      <Layout>
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/join" element={<Join />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </div>
      </Layout>
    </>
  );
};

export default App;
