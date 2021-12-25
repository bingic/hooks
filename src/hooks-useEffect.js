/* 函数写法 */
import React, { useState, useEffect } from "react";

// 引入路由
import { BrowserRouter, Routes,Route, Link } from "react-router-dom";

function Index(params) {
  useEffect((params) => {
    console.log("useEffect => index");
    // 解绑操作 卸载操作（未添加数组[]每次数据改变都会执行!）
    return (params) => {
      console.log("out,index");
    }
    // 添加数组[]，设置为空,index组件销毁执行。
  },[])
  return <h2>Index</h2>;
}
function List(params) {
  useEffect((params) => {
    console.log("useEffect => list");
  })
  return <h2>List</h2>;
}

function Example(params) {
  // let initialState = 0;
  /* 数组解构 [0]常量 [1]函数 */
  const [count, setCount] = useState(1);
  useEffect((params) => {
    // console.log("useEffect count=>", count);
    return (params) => {
      console.log('Example out');
    }
  },[]);
  return (  
    <div>
      <p>you clicked {count} times</p>
      {/* an 绑定匿名函数 */}
      <button
        onClick={(params) => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/list">关于</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default Example;

/* 类式写法 */

// import React, { Component } from "react";
// class Example extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }
//   /* 类似 onLoad */
//   componentDidMount() {
//     console.log(`componentDidMount =>you click ${this.state.count}`);
//   }
//   /* 类似onShow */
//   componentDidUpdate() {
//     console.log(`componentDidUpdate =>you click ${this.state.count}`);
//   }
//   render() {
//     return (
//       <div>
//         <p>you clicked {this.state.count} times</p>
//         <button onClick={this.addCount.bind(this)}>click me</button>
//       </div>
//     );
//   }
//   addCount() {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   }
// }

// export default Example;
