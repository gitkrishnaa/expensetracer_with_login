import React from "react";
import Styles from "./Styles.module.css";
import { Top_nav } from "../../Components";
import { AddItemForm,Transaction_component } from "../../ExpensePageComponent";
import { ExpenseContextProvider } from "../../Context";

function Main() {
  return (
   
    <div className={Styles.Main_div}>
      <Top_nav Page_name={"Friends Expenses"} />
      {/* <AddItemForm/> */}

      {/* form and graph */}
      <div className={Styles.div}>
        <div className={Styles.div1}>
          {/* form and small graph */}
          <div className={Styles.div1_1}>
            <div className={Styles.input_form_div}><AddItemForm/></div>
            {/* overview of left budget,total expeses, */}
            <div className={Styles.OverView_div}>
              <span>Transction</span>
            </div>
          </div>
          <div className={Styles.div1_2}>
            <div className={Styles.graph}>
              
              <span>graph</span>
            </div>
          </div>
        </div>
        {/* transction */}
        <div className={Styles.div2}>
       
          <div className={Styles.transction_div}>
          <span>"  record</span>
          <Transaction_component/>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Main;
