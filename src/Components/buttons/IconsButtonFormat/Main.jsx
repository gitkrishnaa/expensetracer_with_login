import React from 'react'
import Styles from "./Styles.module.css";
import { MdNotificationsNone } from "react-icons/md";
function Main(props) {
  return (
    // it need only icon that it render
    <div className={Styles.icons_button}>
        <button className={Styles.icons_button} style={{width:`${props.width}`,height:`${props.height}`}}>

{props.children}

        </button>
        </div>
  )
}

export default Main