/* 父子组件传值 */ // useReducer 解决状态共享，类似redux

import React, { useState, createContext, useContext } from "react";

/* 创建 上下文 数据 */
const countText = createContext();

function Counter(params) {
  /* 子组件useContext接收 countText的值 */
  let count = useContext(countText);
  return <h2>{count}</h2>;
}

function Example(params) {
  const [count, setCount] = useState(1);

  return (
    <div>
      <p>you clicked {count} times</p>
      <button
        onClick={(params) => {
          setCount(count + 1);
        }}
      >
        click me
      </button>

      <countText.Provider value={count}>
        {/* 父子传递上下文 */}
        <Counter />
      </countText.Provider>
    </div>
  );
}
export default Example;
