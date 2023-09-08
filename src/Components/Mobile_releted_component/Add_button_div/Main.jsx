import React from "react";
import Styles from "./Styles.module.css";
import {Link} from "react-router-dom"
import { AddItemForm } from "../../../ExpensePageComponent";

function Main() {
  return (
    <div className={Styles.Main_div}>
   

      <div className={Styles.profile}>profile</div>



      <div className={Styles.footer_nav}>
    <AddItemForm/>
        
      </div> 


    </div>


  );
}

export default Main;
