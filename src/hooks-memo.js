import React, { useState, useMemo } from "react";

function Example(params) {
  const [hong, setHong] = useState("red");
  const [ling, setLing] = useState("Ling");

  return (
    <>
      <button
        onClick={(params) => {
          setHong(new Date().getTime());
        }}
      >
        red
      </button>
      <button
        onClick={(params) => {
          setLing(new Date().getTime() + "Ling");
        }}
      >
        Ling
      </button>
      <ChildComponent name={hong}>{ling}</ChildComponent>
    </>
  );
}

function ChildComponent({ name, children }) {
  function changeHong(params) {
    console.log("changeHong == come");
    return name + "Hong come";
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const actionHong = useMemo((params) => changeHong(name), [name]);

  return (
    <>
      <div>{actionHong}</div>
      <div>{children}</div>
    </>
  );
}

export default Example;
