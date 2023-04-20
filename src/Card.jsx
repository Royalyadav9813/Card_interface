import { useState, useEffect, useRef } from "react";
import "./Card.css";

export default function Card({ message, content }) {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  useEffect(() => {
    if (message === "Success!") {
      ref.current.classList.add("green");
      ref2.current.classList.add("g");
      ref3.current.classList.add("gr");
      ref4.current.classList.add("gre");
    } else if (message === "Error!") {
      ref.current.classList.add("red");
      ref2.current.classList.add("r");
      ref3.current.classList.add("re");
      ref4.current.classList.add("ree");
    }
  }, [message]);

  return (
    <div ref={ref} className="card">
      <div className="cover">
        <div ref={ref3} className="message">
          {message}
        </div>
        <div className="line" ref={ref4}></div>
        <div className="content">{content}</div>
        <div className="tabs">
          <div className="tab1">continue shopping</div>
          <div ref={ref2} className="tab2">
            {message === "Success!" ? (
              <div className="success">Print Receipt</div>
            ) : (
              <div className="wrong">Try once again</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
