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
        document.body.style.backgroundColor = '#212529';
       }
       else{
        setMode ('light');
        document.body.style.backgroundColor = 'white';
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
