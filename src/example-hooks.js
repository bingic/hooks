import React, { useState } from "react";

function Example(params) {
  // let initialState = 0;
  /* 数组解构 [0]常量 [1]函数 */
  const [count, setCount] = useState(1);

  return (

    <div>
      <p>you clicked {count} times</p>
      {/* an 绑定匿名函数 */}
      <button onClick={(params) => {
        setCount(count+1)
      }}>click me</button>an
    </div>
  );
}
export default Example;
