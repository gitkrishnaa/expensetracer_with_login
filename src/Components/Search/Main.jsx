import React from 'react'
import Styles from "./Styles.module.css";
import {IoMdSearch} from "react-icons/io"
import { useState } from 'react';
import { useRef } from 'react';
function Main() {
  const input=useRef();
//  console.log(input.current)
  const [serchicon,setSeachicon]=useState();

const sizehandler=()=>{
console.log("hello")
}

  return (
    <div className={Styles.Main_div}>
  <input ref={input} type="text"  placeholder={`Search`} onClick={sizehandler} onLoad={sizehandler}/>

    </div>
  )
}

export default Main