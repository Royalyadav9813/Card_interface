import react, { useState, useEffect } from "react";
import Card from "./Card.jsx";
import "./Input.css";

export default function Input() {
  const [message, setMessage] = useState("");
  const [content, setContent] = useState("");
  const [Pmessage, setPMessage] = useState("");
  const [Pcontent, setPContent] = useState("");

  function handleClick() {
    setPMessage(message);
    setPContent(content);
  }

  return (
    <div className="container">
      <label htmlFor="message" className="input">
        Enter Message
      </label>
      <input
        id="message"
        type="text"
        className="input"
        onChange={(e) => setMessage(e.target.value)}
      />
      <label htmlFor="content" className="input">
        {" "}
        Enter Content
      </label>
      <input
        id="content"
        type="text"
        className="input"
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleClick} className="input">
        {" "}
        generate{" "}
      </button>

      <Card message={Pmessage} content={Pcontent} />
    </div>
  );
}
