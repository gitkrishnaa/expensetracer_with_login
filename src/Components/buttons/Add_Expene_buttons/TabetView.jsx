import React from 'react'
import Styles from "./Styles.module.css";
import {IoMdAddCircleOutline} from "react-icons/io";

function TabetView(props) {
  return (
    <button className={Styles.full_btn1}><span><IoMdAddCircleOutline/></span> Add</button>
  )
}


export default TabetView