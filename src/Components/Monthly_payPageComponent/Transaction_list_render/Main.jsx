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
  // const [icon, setIcon]=useState();
  const Icon=()=>{
    switch (props.data.Expense_Category) {
      case "Food":
        // alert("match")
        return <><MdOutlineFastfood/></>
        break;
        case "Travel":
          return <MdOutlineModeOfTravel/>
        break;
        case "Invest":
          return <FcMoneyTransfer/>
        break;
        case "Monthly":
          return <MdOutlineFastfood/>
        break;
        case "UnNececsary":
            return <FcCancel/>
           
        break;
      default:return <span>n</span>
        break;
    }
  }
  return (


    <div className={Styles.Main_div}>
  {/* {props.data.Expense_Name} */}
  <div className={Styles.div1}>
  <div><Icon value={props.data.Expense_Category}/>  {props.data.Expense_Category} </div>
<div> {props.data.Expense_Name} </div>
<div> {props.data.Expense_Amount} </div>

<div > <FcInfo/> <span style={{color:"red"}}><MdOutlineDeleteForever/></span></div>
  </div>

    </div>
  )
}

export default Main