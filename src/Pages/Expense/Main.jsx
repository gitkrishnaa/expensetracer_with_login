import React from "react";
import Styles from "./Styles.module.css";
import { Top_nav } from "../../Components";
import { AddItemForm } from "../../ExpensePageComponent";

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
            <div className={Styles.graph}>graph</div>
          </div>
        </div>
        {/* transction */}
        <div className={Styles.div2}>
          <div className={Styles.transction_div}>transction</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
