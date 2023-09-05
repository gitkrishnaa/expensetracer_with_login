import React, { useState } from 'react'
import ContextCreate from "./ContextCreate"
import { useReducer } from 'react'
function Provider(props) {


// expense data management
const ACTION ={
    ADD:"add",
    REMOVEONE:"removeone_data",
    EDIT:"Edit",
    DELETE_ALL:"delete_everything"
}
const reduceCallback=(state,action)=>{
    const temp_state={...state}
  console.log(state)
if(action.type==ACTION.ADD){
  const value= action.value.amount
    const key=action.value.key
  if(key=="all_month"){
    temp_state[`January`]=value;
    temp_state[`Fabruary`]=value;  
    temp_state[`March`]=value;
    temp_state[`April`]=value;
    temp_state[`May`]=value;
    temp_state[`June`]=value;
    temp_state[`July`]=value;
    temp_state[`Augest`]=value;
    temp_state[`September`]=value;
    temp_state[`October`]=value;
    temp_state[`Novmber`]=value;
    temp_state[`December`]=value;
    return temp_state;
  }
    
    temp_state[`${key}`]=value
    return temp_state
}
}
const [state,dispatch]=useReducer(reduceCallback,{});


 const add=(item)=>{
    dispatch({type:ACTION.ADD,value:item})
console.log("adding month budget","value=",item,state)
}

  return (
    <ContextCreate.Provider value={{add,data:state}}>

{props.children}

    </ContextCreate.Provider>
  )
}

export default Provider