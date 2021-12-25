import React, { useState } from "react";

function Example2(params) {
  const [age] = useState(18);
  const [sex] = useState("0");
  const [work] = useState("it");
  return (
    <div>
      <p>年龄:{age}</p>
      <p>性别:{sex}</p>
      <p>工作:{work}</p>
    </div>
  );
}

export default Example2;
