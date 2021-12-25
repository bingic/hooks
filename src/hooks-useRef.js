/* red特性  1：获取dom值，2：保存变量 */
import React, { useRef, useState, useEffect } from "react";

export default function Example(params) {
  const inputEl = useRef(null);
  const clickButton = (params) => {
    inputEl.current.value = "hello";
    console.log("inputEl=>", inputEl);
  };

  const onChangText = (e) => {
    setText(e.target.value);
  };

  const [text, setText] = useState("hooks");

  const textRef = useRef();

  /* effect 生命周期 */
  useEffect(() => {
    textRef.current = text;
    console.log("textRef.current:", textRef.current);
    return () => {
    //   cleanup;
    };
  }, [text]);

  return (
    <>
      <input ref={inputEl} type="text"></input>
      <button onClick={clickButton}>live</button>
      <br />
      <br />
      <input value={text} onChange={onChangText}></input>
    </>
  );
}
