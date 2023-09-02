import React from 'react'
import Styles from "./Styles.module.css";
import {IoMdAddCircleOutline} from "react-icons/io"
function Main(props) {
  return (
    <div className={Styles.Main_div}>
    <button className={Styles.full_btn1}><span><IoMdAddCircleOutline/></span> {props.btn_name}</button>
    </div>
  )
}


export default Main