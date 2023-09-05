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
    const temp_state=[...state]
  console.log(state)
if(action.type==ACTION.ADD){
    const value= action.value
    temp_state.push(value)
    return temp_state
}
}
const [state,dispatch]=useReducer(reduceCallback,[]);


 const addExpense=(item)=>{
    dispatch({type:ACTION.ADD,value:item})

}

  return (
    <ContextCreate.Provider value={{addExpense,data:state}}>

{props.children}

    </ContextCreate.Provider>
  )
}

export default Provider