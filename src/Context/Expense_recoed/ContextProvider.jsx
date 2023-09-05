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
    ADD_FAKE_DATA:"delete_everything"
}
const reduceCallback=(state,action)=>{
    const temp_state=[...state]
  console.log(state)
if(action.type==ACTION.ADD){
    const value= action.value
    temp_state.push(value)
    return temp_state
}
// adding fake data
if(action.type==ACTION.ADD_FAKE_DATA){
  const fake_data_array=action.value
  return fake_data_array;
}
}
const [state,dispatch]=useReducer(reduceCallback,[]);


 const addExpense=(item)=>{
    dispatch({type:ACTION.ADD,value:item})

}
const largeFake_data=(Fakedata_array)=>{
  dispatch({type:ACTION.ADD_FAKE_DATA,value:Fakedata_array})

}
  return (
    <ContextCreate.Provider value={{addExpense,largeFake_data,data:state}}>

{props.children}

    </ContextCreate.Provider>
  )
}

export default Provider