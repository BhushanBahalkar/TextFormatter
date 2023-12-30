import "./App.css";
// import Aboutt from "./components/Aboutt";
import Navbar from "./components/Navbar";

import TextForm from "./components/TextForm";
import React, { useState } from 'react';

 

function App() {
    const [mode, setMode]  = useState('dark'); 

    const toggleMode = ()=>{
       if(mode === 'light'){
        setMode ('dark');
       }
       else{
        setMode ('light');
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
