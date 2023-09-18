import React from "react";
import Styles from "./Styles.module.css";
import {Link} from "react-router-dom"
function Main() {
  return (
    <div className={Styles.Main_div}>
   

      <div className={Styles.profile}></div>

        <ul>
        <li onClick={()=>{alert(`width-${window.innerWidth} || height ${window.innerHeight}`)}}>Setting</li>
          <li >Logout</li>
        </ul>
        
      


    </div>


  );
}

export default Main;
