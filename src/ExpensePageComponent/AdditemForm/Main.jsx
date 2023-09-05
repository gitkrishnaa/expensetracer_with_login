import React from 'react'
import Styles from "./Styles.module.css";
import { useEffect } from 'react';
import { ExpenseContextCreate } from '../../Context/index';
import { useContext } from 'react';
import { useRef } from 'react';

function Main() {
const ExpenseName_ref=useRef()
const Expense_Amount_ref=useRef()
const Expense_Date_ref=useRef()
const Expense_Details_ref=useRef()
const Expense_Category_ref=useRef()
const ExpenseContext=useContext(ExpenseContextCreate);
console.log(ExpenseContext,"hgjh")
// function method from expense context
const {addExpense}=ExpenseContext

//set current date when date fileld load
  function getDate(){
    var today = new Date();
    document.getElementById("date").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
}
// getDate() - directly call gives error
useEffect(()=>{
 getDate()
},[])

const Add_data_Handler=()=>{
  const dataObj={
    Expense_Name:ExpenseName_ref.current.value,
    Expense_Amount:Expense_Amount_ref.current.value,
    Expense_Date:Expense_Date_ref.current.value,
    Expense_Details:Expense_Details_ref.current.value,
    Expense_Category:Expense_Category_ref.current.value,
  }
  addExpense(dataObj)
}

  return (
    <div className={Styles.Main_div}>
      <div className={Styles.div1}>
      <div><input ref={ExpenseName_ref} type="text" placeholder='Expense Name'/></div>
      <div><input ref={Expense_Amount_ref} type="number"  placeholder='Amount' /></div>
      <div><input ref={Expense_Date_ref} type="date" id="date"  placeholder='date'  /></div>
      <div><input ref={Expense_Details_ref} type="text" placeholder='Details' /></div>
     <div><select ref={Expense_Category_ref} name="category" id="category">
  <option value="Food">Food</option>
  <option value="Travel">Travel</option>
  <option value="Invest">Invest</option>
  <option value="Monthly">Monthly</option>
  <option value="Other">Other</option>
  <option value="UnNececsary">UnNececsary</option>
</select>
      </div>
      </div>
  {/* button */}
      
        <div className={Styles.btn_div}>
          <button>Reset</button>
          <button onClick={Add_data_Handler}>Add</button>
        </div>
       
      
    </div>
  )
}

export default Main