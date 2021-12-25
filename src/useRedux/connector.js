/* 链接器 */

import React from "react";
import Buttons from "./buttons";
import { Color } from "./color";
import ShowArea from "./showArea";

export default function Connector(params) {
  return (
    <Color>
      <ShowArea />
      <Buttons />
    </Color>
  );
}
