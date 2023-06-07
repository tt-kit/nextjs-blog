import { useState } from "react";
import TypingEffect from "./TypingEffect";

export default function Demo() {
  const [text, setText] = useState("AHKKKJKJJJKKK");
  const onChangeText = () => {
    setText("8888888888");
  };
  return (
    <div>
      demo
      <p>
        <TypingEffect text={text} />
      </p>
      <button onClick={onChangeText}>改变文字</button>
    </div>
  );
}
