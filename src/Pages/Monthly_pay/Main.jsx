import React from "react";
import Styles from "./Styles.module.css";
import { Top_nav } from "../../Components";
import { AddItemForm,Transaction_component ,Monthly_pay_List_component,Transaction_Monthly_pay_component} from "../../Monthly_payPageComponent";
import { ExpenseContextProvider } from "../../Context";

function Main() {
  return (
   
    <div className={Styles.Main_div}>
      <Top_nav Page_name={"Monthly Pay"} />
      {/* <AddItemForm/> */}

      {/* form and graph */}
      <div className={Styles.div}>
        <div className={Styles.div1}>
          {/* form and small graph */}
          <div className={Styles.div1_1}>
            <div className={Styles.input_form_div}><AddItemForm/></div>
            {/* montly pay list */}
            <div className={Styles.OverView_div}>
              <span>oveview</span>
              <Monthly_pay_List_component/> 
            </div>
          </div>
          <div className={Styles.div1_2}>
            <div className={Styles.graph}>graph</div>
          </div>
        </div>
        {/* transction */}
        <div className={Styles.div2}>
          <div className={Styles.transction_div}>
         <Transaction_Monthly_pay_component/>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Main;
