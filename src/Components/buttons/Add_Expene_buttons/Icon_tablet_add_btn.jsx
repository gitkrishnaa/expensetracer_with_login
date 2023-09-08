import React from 'react'
import Styles from "./Styles.module.css";
import {IoMdAddCircleOutline} from "react-icons/io";

function TabetView(props) {
  // +
  return (
    <button className={Styles.icon_btn}><span><IoMdAddCircleOutline/></span></button>
  )
}


export default TabetView