import React,{useContext} from "react";

import { ColorContext } from './color';

export default function ShowArea(params) {
   const {color} = useContext(ColorContext)

  return <div style={{ color }}>字体颜色:{color}</div>;

}
