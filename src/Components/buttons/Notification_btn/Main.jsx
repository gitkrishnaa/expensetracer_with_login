import React from 'react'
import Styles from "./Styles.module.css";
import { MdNotificationsNone } from "react-icons/md";
function Main() {
  return (
    <div className={Styles.icons_button}>
        <button className={Styles.icons_button}><MdNotificationsNone /></button>
        </div>
  )
}

export default Main