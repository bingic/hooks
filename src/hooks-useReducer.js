/* reducer */
/* 
//状态 控制状态方法
function countReducer(state, action) {
  switch (action) {
    case "add":
      return state + 1;
    case "sub":
      return state - 1;

    default:
       return state;
  }
}
 */

import React, { useReducer } from "react";

function init(initialCount) {
  return { count: 6 };
}

function reducer(state, action) {
  console.log("state===", state);
  switch (action.type) {
    case "add":
      return {count: state.count + 1}
    case "sub":
      return {count: state.count - 1}

    case "reset":
      return init(action.payload);
    default:
      throw new Error();
  }
}

export default function ReducerDemo({initialCount}) {
  //  const [state, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  return (
    <div>
      <h2>num:{state.count}</h2>

      <button
        onClick={() => {
          dispatch({ type: "reset", payload: initialCount });
        }}
      >
        
      </button>

      <button
        onClick={() => {
          dispatch({ type: "add" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "sub" });
        }}
      >
        -
      </button>
    </div>
  );
}
