import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnClickToUpperCase = () => {
    let nexText = text.toUpperCase();
    setText(nexText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleOnClickToClearText = (event) => {
    setText("");
    props.showAlert("Text Clear", "success");
  };
  const handleOnClickToLowerCase = (event) => {
    let nexText = text.toLowerCase();
    setText(nexText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleOnClickCopyCode = (event) => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copies to Clipboard", "success");
  };

  const handleOnClickRemoveExtraSpace = (event) => {
    let nexText = text.split(/[ ]+/);
    setText(nexText.join(" "));
    props.showAlert("Remove extra space", "success");
  };

  const handleUpdateToUpperCase = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleUpdateToUpperCase}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1"
          onClick={handleOnClickToUpperCase}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleOnClickToLowerCase}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-danger mx-1"
          onClick={handleOnClickToClearText}
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleOnClickCopyCode}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleOnClickRemoveExtraSpace}
        >
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to provide it here!/"}
        </p>
      </div>
    </>
  );
}
