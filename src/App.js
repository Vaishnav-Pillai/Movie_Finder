import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import Movies from './Components/Movies';
import { useState } from 'react';



const App =()=> {
  
  const [movi, setMovi] = useState("")

  const [progress, setProgress] = useState(0)

    return (
      <div style={{margin: '0px 0px', marginTop: '0px'}}>
        <Navbar setMovi={setMovi}/>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <div className="ui container">
          <Movies setProgress={setProgress} movi={movi}/>
        </div>
        {/* {console.log(movi)} */}
      </div>
    )
}

export default App
