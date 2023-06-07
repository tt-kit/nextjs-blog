import React, { useState, useEffect, useRef } from "react";

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const currentIndexRef = useRef(0);
  const displayTextRef = useRef("");

  useEffect(() => {
    currentIndexRef.current = 0;
    displayTextRef.current = "";
  }, [text]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndexRef.current < text.length) {
        displayTextRef.current += text[currentIndexRef.current];
        setDisplayText(displayTextRef.current);
        currentIndexRef.current += 1;
      } else {
        clearInterval(intervalId);
        setShowCursor(false);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [text]);

  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndexRef.current === text.length) {
      setShowCursor(false);
    } else {
      const cursorIntervalId = setInterval(() => {
        setShowCursor((prevShowCursor) => !prevShowCursor);
      }, 500);

      return () => clearInterval(cursorIntervalId);
    }
  }, [currentIndexRef.current, text.length]);

  return (
    <span>
      {displayText}
      {showCursor && <span className="cursor">|</span>}
    </span>
  );
};

export default TypingEffect;
