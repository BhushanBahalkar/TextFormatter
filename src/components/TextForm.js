import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const Upclick = () => {
    console.log("UPPERCASE was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const Lowclick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const Capitalsentenceclick = () => {
    console.log("CapitalSentence was clicked" + text);
    let newText = text
      .split("\n") // Split the text into paragraphs
      .map((paragraph) => {
        // Capitalize the first word of each paragraph
        return paragraph.charAt(0).toUpperCase() + paragraph.slice(1);
      })
      .join("\n");
    setText(newText);
  };

  const CapitalWordclick = () => {
    console.log("Capitalwords was clicked" + text);
    let newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
  };

  const ExtraSpaces = () => {
    console.log("Extra Spaces Removed" + text);
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
  };

  const Copytoclipboard = () => {
    let text = document.getElementById("myBox");
    console.log("Text copied to clip board" + text);
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleOnchange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <label htmlFor="myBox" />
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "gray", // Change "white" to "gray"
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnchange}
            rows="8"
            placeholder="Enter Your Text Here"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2 my-1" onClick={Upclick}>
          Convert to UPPERCASE
        </button>

        <button className="btn btn-primary mx-2 my-1" onClick={Lowclick}>
          Convert to lowercase
        </button>

        <button
          className="btn btn-primary mx-2 my-1"
          onClick={Capitalsentenceclick}
        >
          Convert to Capitalize sentence
        </button>

        <button
          className="btn btn-primary mx-2 my-1"
          onClick={CapitalWordclick}
        >
          Convert to Capitalize Words
        </button>

        <button className="btn btn-primary mx-2 my-1" onClick={ExtraSpaces}>
          Remove Extra Spaces
        </button>

        <button className="btn btn-primary mx-2 my-1" onClick={Copytoclipboard}>
          Copy to Clipboard
        </button>
      </div>

      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {" "}
          {text.split(" ").length} Words, {text.length} Characters
        </p>
        <p> {0.008 * text.split(" ").length} Minutes Read </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
