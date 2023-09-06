import React, { useContext, useState } from "react";
import ContextCreate from "./ContextCreate";
import { Monthly_payContextCreate } from "../../Context";
import { ExpenseContextCreate } from "../../Context";
import { BudgetContextCreate } from "../../Context";
import fakeData from "../data";
import { useReducer } from "react";
function Provider(props) {
  const Expense = useContext(ExpenseContextCreate);
  const budget = useContext(BudgetContextCreate);
  const Monthly_Pay = useContext(Monthly_payContextCreate);
  const check = () => {
    console.log(new Date(fakeData[207].Expense_Date).getMonth());
    console.log(new Date(fakeData[207].Expense_Date));

    // const xyz=new Date('2023-8-2')
   console.log(change_Data_format_to_year_and_month_wise())
  };

  // fake data in expense
  const feed_expense_data = () => {
    Expense.largeFake_data(fakeData);
    console.log(Expense, budget, Monthly_Pay);
  };

  function change_Data_format_to_year_and_month_wise  ()  {
    const dataArr=Expense.data;
    const newArrData_format = {};
    for (let i = 0; i < dataArr.length; i++) {
      const data = dataArr[i];
      const month = new Date(data.Expense_Date).getMonth() + 1;
      const year = new Date(data.Expense_Date).getFullYear();
      if (newArrData_format[`${year}`] == undefined) {
        newArrData_format[`${year}`] = {};
      }
      if (newArrData_format[`${year}`][`${month}`] == undefined) {
        newArrData_format[`${year}`][`${month}`] = [];
      }
      newArrData_format[`${year}`][`${month}`].push(data);
    }
console.log("this is function which convert expense context data convert to {year:{month:[{},{},{}]} function from-data manage context")
    console.log(newArrData_format)
    console.log("this function return data {year:{month:[{},{},{}]}");
return newArrData_format;
  };
  const convert_Data_format_to_year_and_month_wise_data_as_argument = (dataArr) => {
    const newArrData_format = {};
    for (let i = 0; i < dataArr.length; i++) {
      const data = dataArr[i];
      const month = new Date(data.Expense_Date).getMonth() + 1;
      const year = new Date(data.Expense_Date).getFullYear();
      if (newArrData_format[`${year}`] == undefined) {
        newArrData_format[`${year}`] = {};
      }
      if (newArrData_format[`${year}`][`${month}`] == undefined) {
        newArrData_format[`${year}`][`${month}`] = [];
      }
      newArrData_format[`${year}`][`${month}`].push(data);
    }
    console.log("this is function which convert expense context data convert to {year:{month:[{},{},{}]} function from-data manage context")
    console.log(newArrData_format)
    console.log("this function take data as argument[{},{}] return data {year:{month:[{},{},{}]}");
    return newArrData_format;
  };

  return (
    <ContextCreate.Provider value={{ check, feed_expense_data }}>
      {props.children}
    </ContextCreate.Provider>
  );
}

export default Provider;
