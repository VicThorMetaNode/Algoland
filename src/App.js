import React from 'react'

//we may better used Redux instead but let's keep it simple
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

//import routes
import Join from './components/Join'
import Chat from './components/Chat'




import './index.css'

/* First time the user visit the page, will be redirected to Join & pass login data then will be redirected to Chat  */
/* Once we have the data, passed through query strings, we render the chat component */
const App = () => {
    return(
        
      <Router>
        <Routes>
        <Route exact path="/" element={<Join />}></Route>
        <Route path="/chat" element={<Chat />}> </Route>
        </Routes>
      </Router>
      
    );}
  

export default App;