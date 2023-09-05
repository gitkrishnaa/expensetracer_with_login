import React, { useContext, useState } from 'react'
import ContextCreate from "./ContextCreate"
import { Monthly_payContextCreate } from '../../Context'
import { ExpenseContextCreate } from '../../Context'
import { BudgetContextCreate } from '../../Context'
import fakeData from "../data"
import { useReducer } from 'react'
function Provider(props) {

const Expense=useContext(ExpenseContextCreate);
const budget=useContext(BudgetContextCreate);
const Monthly_Pay=useContext(Monthly_payContextCreate);
const check=()=>{
alert("check data management")
console.log(Expense.data)
console.log(budget.data)
console.log(Monthly_Pay.data)
console.log(fakeData)
}
 
// fake data in expense
const feed_expense_data=()=>{
  Expense.largeFake_data(fakeData)
  console.log(Expense,budget,Monthly_Pay)
}



  return (
    <ContextCreate.Provider value={{check,feed_expense_data}}>

{props.children}

    </ContextCreate.Provider>
  )
}

export default Provider