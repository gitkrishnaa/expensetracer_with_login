import React from "react";
import Styles from "./Styles.module.css";
import { Top_nav } from "../../Components";
import { AddItemForm,Transaction_component } from "../../ExpensePageComponent";
import { ExpenseContextProvider } from "../../Context";
import { ExpenseMonthChart } from "../../Charts";
import MonthExpenseChart from "../../Charts/ExpenseChart/MonthExpenseChart";

function Main() {
  return (
   
    <div className={Styles.Main_div}>
      <Top_nav Page_name={"Expenses"} />
      {/* <AddItemForm/> */}

      {/* form and graph */}
      <div className={Styles.div}>
        <div className={Styles.div1}>
          {/* form and small graph */}
          <div className={Styles.div1_1}>
            <div className={Styles.input_form_div}><AddItemForm/></div>
            {/* overview of left budget,total expeses, */}
            <div className={Styles.OverView_div}>OverView</div>
          </div>
          <div className={Styles.div1_2}>
            <div className={Styles.graph}>
{/* <span>chart</span> */}
{/* <MonthExpenseChart/> */}

            </div>
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
