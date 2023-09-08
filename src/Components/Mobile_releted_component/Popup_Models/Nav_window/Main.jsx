import React from "react";
import Styles from "./Styles.module.css";
import {Link} from "react-router-dom"
function Main(props) {
  return (
    <div className={Styles.Main_div}>
   
{props.children}



    </div>


  );
}

export default Main;
