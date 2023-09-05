import React, { useState } from 'react'
import ContextCreate from "./ContextCreate"
import { useReducer } from 'react'
function Provider(props) {


// expense data management
const ACTION ={
    ADD:"add",
    REMOVEONE:"removeone_data",
    EDIT:"Edit",
    DELETE_ALL:"delete_everything",
    MONTHLY_PAYMENT_UPDATE:"pay_by_month_payment_update"
}
const reduceCallback=(state,action)=>{
    const temp_state=[...state]
  console.log(state,"montly pay previous data")
if(action.type==ACTION.ADD){
    const value= action.value
    temp_state.push(value)
    return temp_state
}

if(action.type==ACTION.MONTHLY_PAYMENT_UPDATE){
  const index= action.index;
  const month=action.month;
  temp_state[index].payment_by_month[`${month}`]="paid";

  alert( `${temp_state[index].Montly_pay_Receiver} od current month updated to paid`);
  console.log(temp_state,"state from /monthly context" )
  return temp_state;
}

}
const [state,dispatch]=useReducer(reduceCallback,[]);


 const addData=(item)=>{
    dispatch({type:ACTION.ADD,value:item})

}
const Fetch=(item)=>{
  dispatch({type:ACTION.ADD,value:item})

}
const pay_by_month_payment_update=(index,month1)=>{
  dispatch({type:ACTION.MONTHLY_PAYMENT_UPDATE,index:index,month:month1})
  alert("okdsd")

}
  return (
    <ContextCreate.Provider value={{addData,pay_by_month_payment_update,data:state}}>

{props.children}

    </ContextCreate.Provider>
  )
}

export default Provider