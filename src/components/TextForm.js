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
    navigator.clipboard.writeText(text);
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
              backgroundColor: props.mode === "dark" ? "#b3b3b3" : "white",
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
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleOnClickToUpperCase}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleOnClickToLowerCase}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-1 my-1"
          onClick={handleOnClickToClearText}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleOnClickCopyCode}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
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
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
