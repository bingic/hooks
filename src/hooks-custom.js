import React, { useState, useEffect, useCallback } from "react";

function useWinSize(params) {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  }, []);

  useEffect(() => {
    /* 窗口监听事件 */
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize]);

  return size;
}

export default  function ExampleUse(params) {
  const size = useWinSize();
  return (
    <div>
      页面:{size.width}*{size.height}
    </div>
  );
}
