import React from 'react'
import Styles from "./Styles.module.css";
import {MdOutlineDeleteForever,MdOutlineModeOfTravel} from "react-icons/md"
import {FcInfo} from "react-icons/fc"
import {FcMoneyTransfer} from "react-icons/fc" //invest
import {MdOutlineFastfood} from "react-icons/md"  // food
// import {LiaCalendarDaySolid} from "react-icons/li" //month
import {FcCancel} from "react-icons/fc" //unwanted
import { useState } from 'react';
import { Monthly_payContextCreate } from '../../Context';
import { useContext } from 'react';

function Main(props) {
const Monthly_payContext=useContext(Monthly_payContextCreate);
const pay_by_month_payment_update=Monthly_payContext.pay_by_month_payment_update;

const Monthly_pay_current_month_handler=(e)=>{
  // alert(e.target.id.slice(22))
  const index=e.target.id.slice(22)
  const currentMonth=new Date().getMonth()
  pay_by_month_payment_update(index,currentMonth)
}

  console.log("Montly pay page section")
  console.log(props,"Montly pay")
  return (
 
    

    <div className={Styles.Main_div}>
 
  {/* {props.data.Expense_Name} */}
  <div className={Styles.div1}>
  <div> {props.data.Montly_pay_Receiver} </div>
{/* <div> {props.data.Montly_pay_Details} </div> */}
<div> {props.data.Montly_pay_Amount} </div>

<div > 
  {props.paid?<div>paid</div>:<div><button onClick={Monthly_pay_current_month_handler} id={"monthly_payment_button"+props.id}>Pay</button></div>}
    </div>
  </div>

    </div>
  )
}

export default Main