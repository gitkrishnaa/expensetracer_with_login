import React from 'react'
import Styles from "./Styles.module.css";
import { Transaction_Monthly_pay_list_render } from '..';
import { Monthly_payContextCreate } from '../../Context';
import { useContext } from 'react';

function Main() {
  const Monthly_payContext=useContext(Monthly_payContextCreate);
const current_month=new Date().getMonth();

  return (
    // true- alreadu paid
    // false mot paid
    //if pay_by_month[currenmont]==undefined means not paid,if paid, it will updated to "8":true"
    <div className={Styles.Main_div}>
            <span>current month</span>
      {/* n,id is array sequence */}
  {Monthly_payContext.data.map((e,n)=>{
    // {console.log(e.payment_by_month[`${current_month}`],"check e")}
    {console.log(" from /tranction_monthly_pay")}
  return e.payment_by_month[`${current_month}`]==undefined?<Transaction_Monthly_pay_list_render paid={false} id={n}  data={e}/>:
  <Transaction_Monthly_pay_list_render paid={true} data={e}/>
  // console("already paid")
  
  })}

    </div>
  )
}

export default Main