import React from "react";
import Styles from "./Styles.module.css";
import { Top_nav } from "../../Components";
import {Transaction_component } from "../../ExpensePageComponent";
import { ExpenseContextProvider } from "../../Context";
import { DataManage1ContextCreate } from "../../Data_Manage";
import { useContext } from "react";

function Main() {
const DataManage1Context=useContext(DataManage1ContextCreate)
console.log(DataManage1Context,"dashboard")
  return (
   
    <div className={Styles.Main_div}>
      <Top_nav Page_name={"Dashoard"} />
      {/* <AddItemForm/> */}

      {/* form and graph */}
      <div className={Styles.div}>
        <div className={Styles.div1}>
          {/* form and small graph */}
          <div className={Styles.div1_1}>
            <div className={Styles.input_form_div}></div>
            {/* montly pay list */}
            <div className={Styles.OverView_div}>
              <span>oveview</span>
             <button onClick={
DataManage1Context.check}>data manage</button>

<button onClick={
DataManage1Context.feed_expense_data}>feedexpense data</button>
            </div>
          </div>
          <div className={Styles.div1_2}>
            <div className={Styles.graph}>graph</div>
          </div>
        </div>
        {/* transction */}
        <div className={Styles.div2}>
          <div className={Styles.transction_div}>
          <Transaction_component/>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Main;
