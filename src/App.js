import "./App.css";
import Aboutt from "./components/Aboutt";
import Navbar from "./components/Navbar";

// import TextForm from "./components/TextForm";


function App() {
  return (
    <>
      <Navbar />

      <div className="container my-4">
        {/* <TextForm heading="Enter the text to analyze below" /> */}
    <Aboutt/> 
      </div>
    </>
  );
}

export default App;
