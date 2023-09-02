import React from "react";
import Styles from "./Styles.module.css";
import {IoNotificationsOutline} from "react-icons"
function Main() {
  return (
    <div className={Styles.Main_div}>
   

      <div className={Styles.profile}>profile</div>


      <div className={Styles.Main_nav}>
        <ul>
          <li>Dashboard</li>
          <li>Expense</li>
          <li>Budget</li>
          <li>Friends</li>
          <li>Todo</li>
          <li>Report</li>
         
          <li>Help</li>
        </ul>
      </div>


      <div className={Styles.footer_nav}>
        <ul>
        <li onClick={()=>{alert(`width-${window.innerWidth} || height ${window.innerHeight}`)}}>Setting</li>
          <li >Logout</li>
        </ul>
        
      </div> 


    </div>


  );
}

export default Main;
