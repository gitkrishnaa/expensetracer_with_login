import React from 'react'
import Styles from "./Styles.module.css";
import {MdOutlineDeleteForever,MdOutlineModeOfTravel} from "react-icons/md"
import {FcInfo} from "react-icons/fc"
import {FcMoneyTransfer} from "react-icons/fc" //invest
import {MdOutlineFastfood} from "react-icons/md"  // food
// import {LiaCalendarDaySolid} from "react-icons/li" //month
import {FcCancel} from "react-icons/fc" //unwanted
import { useState } from 'react';
// const Icon=(props)=>{
//   switch (props.value) {
//     case "Food":
//       alert("match")
//       return <><MdOutlineFastfood/>s</>
//       break;
//       case "Travel":
//         return <MdOutlineModeOfTravel/>
//       break;
//       case "Invest":
//         return <FcMoneyTransfer/>
//       break;
//       case "Monthly":
//         return <MdOutlineFastfood/>
//       break;
//       case "UnNecesary":
//         case "Monthly":
//           return <FcCancel/>
         
//       break;
//     default:return <p>n</p>
//       break;
//   }
// }
function Main(props) {
  console.log("Montly pay page section")
  console.log(props,"Montly pay")
  return (
    // Montly_pay_Amount
   
    // Montly_pay_Date
  
    // Montly_pay_Details
  
    // Montly_pay_Receiver
    

    <div className={Styles.Main_div}>
  {/* {props.data.Expense_Name} */}
  <div className={Styles.div1}>
  <div> {props.data.Montly_pay_Receiver} </div>
{/* <div> {props.data.Montly_pay_Details} </div> */}
<div> {props.data.Montly_pay_Amount} </div>

<div > <FcInfo/> <span style={{color:"red"}}><MdOutlineDeleteForever/></span></div>
  </div>

    </div>
  )
}

export default Main