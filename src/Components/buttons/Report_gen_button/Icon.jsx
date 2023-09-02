import React from 'react'
import Styles from "./Styles.module.css";
import {HiOutlineDocumentReport} from "react-icons/hi"
function Main(props) {
  return (
    <div className={Styles.Main_div}>
       <button className={Styles.icon_btn}><span><HiOutlineDocumentReport/> </span></button>
    </div>
  )
}


export default Main