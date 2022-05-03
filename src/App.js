import React from 'react'

//import routes
import Join from './components/Join'
import Chat from './components/Chat'

//we may better used Redux instead but let's keep it simple
import  { BrowserRouter as Router, Route} from 'react-router-dom'


import './index.css'

/* First time the user visit the page, will be redirected to Join & pass login data then will be redirected to Chat  */
/* Once we have the data, passed through query strings, we render the chat component */
const App = () => (

<Router>
    <Route path="/" exact component={Join} /> 
    <Route path="/chat" component={Chat} /> 
</Router>


);

export default App;