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

 
  return (


    <div className={Styles.Main_div}>
  {/* {props.data.Expense_Name} */}
  <div className={Styles.div1}>
  <div>   
  <div>  {props.data.month} </div>
  <div> Expenses </div>
  </div>
<div>
<div> {props.data.amount} </div>
<div> {Math.floor(Math.random()*10000)} </div>
 </div>


<div >  <span style={{color:"red"}}><MdOutlineDeleteForever/></span></div>
  </div>

    </div>
  )
}

export default Main