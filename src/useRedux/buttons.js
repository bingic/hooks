import React, { useContext } from "react";
import { ColorContext, UPDATE_COLOR } from "./color";

export default function Buttons() {
  /* 调用dispatch */
  console.log('调用dispatch', useContext(ColorContext));
  const { dispatch } = useContext(ColorContext);
  return (
    <div>
      <button
        onClick={(params) => {
          dispatch({
            type: UPDATE_COLOR,
            color: "red",
          });
        }}
      >
        red
      </button>
      <button
        onClick={(params) => {
          dispatch({
            type: UPDATE_COLOR,
            color: "yellow",
          });
        }}
      >
        yellow
      </button>
      <button
        onClick={(params) => {
          dispatch({
            type: UPDATE_COLOR,
            color: "green",
          });
        }}
      >
        green
      </button>
    </div>
  );
}
