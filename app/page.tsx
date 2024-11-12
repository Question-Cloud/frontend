"use client";

import React, { useEffect, useState } from "react";

const TypingText = () => {
  const content = "수능 기출문제와 자작문제를 모두 만나보세요!";
  const [text, setText] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setText((prev) => [...prev, content[index]]);
      setIndex((prev) => prev + 1);

      if (index >= content.length) {
        setText([]);
        setIndex(0);
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, [index, content]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="relative inline-block text-[50px] whitespace-pre-wrap left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      {text.map((char, idx) => (
        <span key={idx}>{char === "\n" ? <br /> : char}</span>
      ))}
      {showCursor && <span className="inline-block w-[3px] h-[45px] bg-black animate-blink" />}
    </div>
  );
};

export default function MainPage() {
  return (
    <div className="w-screen h-[calc(100vh-260px)] bg-sky ">
      <TypingText />
    </div>
  );
}
