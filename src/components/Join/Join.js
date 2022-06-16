import React, { useState} from 'react'

//Import router
import { Link } from "react-router-dom"

//Import CCS
import './Join.css'



const Join = () => {
const [name, setName] = useState('');
const [room, setRoom] = useState('');

  return (      
   <section className='join-section'>
     <div className='joinOuterContainer'>
       <div className='joinInnerContainer'>
         <h1 className='join-title'>Jump In</h1>
         <div> <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></div> {/*we use event.target.value to store the data input*/}
         <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} /></div>{/*we use event.target.value to store the data input*/}
       
         <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
         <button className='button mt-20'type='submit'>Sign In</button>
         </Link>
       </div>
     </div>
   </section>  
  )
}

export default Join;