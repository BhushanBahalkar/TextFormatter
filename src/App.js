import "./App.css";
// import Aboutt from "./components/About";
import Navbar from "./components/Navbar";

import TextForm from "./components/TextForm";
import React, { useState } from 'react';


 

function App() {
    const [mode, setMode]  = useState('light'); 

    const toggleMode = ()=>{
       if(mode === 'light'){
        setMode ('dark');  
        document.body.style.backgroundColor = '#2F1B41'; //Main Body BG in Darkmode
       }
       else{
        setMode ('light');
        document.body.style.backgroundColor = '#C4DFDF'; //Main Body BG in Lightmode
       }
    }

  return (
    <>
      <Navbar title="TextFormatter" mode={mode} toggleMode={toggleMode}/>

      <div className="container my-4">
        <TextForm heading="Enter the text to analyze below" />
    {/* <Aboutt/>  */}
      </div>
    </>
  );
}

export default App;
