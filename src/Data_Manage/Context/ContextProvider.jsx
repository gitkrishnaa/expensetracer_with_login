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
    console.log(change_Data_format_to_year_and_month_wise());
    month_wise_category_Expense_data(2023, 1);
  };

  // fake data in expense
  const feed_expense_data = () => {
    Expense.largeFake_data(fakeData);
    console.log(Expense, budget, Monthly_Pay);
  };

  function change_Data_format_to_year_and_month_wise() {
    const dataArr = Expense.data;
    // if no data then dont do anything
    if (dataArr.length == 0) {
      console.log(
        change_Data_format_to_year_and_month_wise,
        "since no data so returned empty object{}"
      );
      return {};
    }
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
    console.log(
      "this is function which convert expense context data convert to {year:{month:[{},{},{}]} function from-data manage context"
    );
    console.log(newArrData_format, "newArrData_format");
    console.log("this function return data {year:{month:[{},{},{}]}");
    return newArrData_format;
  }
  // const convert_Data_format_to_year_and_month_wise_data_as_argument = (
  //   dataArr
  // ) => {
  //   const newArrData_format = {};
  //   for (let i = 0; i < dataArr.length; i++) {
  //     const data = dataArr[i];
  //     const month = new Date(data.Expense_Date).getMonth() + 1;
  //     const year = new Date(data.Expense_Date).getFullYear();
  //     if (newArrData_format[`${year}`] == undefined) {
  //       newArrData_format[`${year}`] = {};
  //     }
  //     if (newArrData_format[`${year}`][`${month}`] == undefined) {
  //       newArrData_format[`${year}`][`${month}`] = [];
  //     }
  //     newArrData_format[`${year}`][`${month}`].push(data);
  //   }
  //   console.log(
  //     "this is function which convert expense context data convert to {year:{month:[{},{},{}]} function from-data manage context"
  //   );
  //   console.log(newArrData_format);
  //   console.log(
  //     "this function take data as argument[{},{}] return data {year:{month:[{},{},{}]}"
  //   );
  //   return newArrData_format;
  // };

  function month_wise_category_Expense_data(year, month) {
    console.log("month_wise_category_Expense_data........working");
    
    const data = change_Data_format_to_year_and_month_wise();
    if (data[`${year}`] == undefined) {
      console.log(
        "month_wise_category_Expense_data",
        month_wise_category_Expense_data
      );
      console.log("since no year data  so returned [] ");
      console.log(data, "data");
      return [];
    }else if(data[`${year}`][`${month}`]==undefined){
      console.log("since no year month data  so returned [] ");

      return [];
    }
     else {
      const tem_obj_year=data[`${year}`]

      const month_data = tem_obj_year[`${month}`];
      const temp_obj = {};
      const temp_map = new Map();
      // Expense_Amount: 790,
      // Expense_Category: "UnNececsary",
      // Expense_Date: "2023-9-13",
      // Expense_Details: "xtimg,tvexs,eeywb,ccukk,desqh,mgdal",
      // Expense_Name: "ugvwsh"
      //getting unique category
      console.log(typeof(data),data[`${year}`][`${9}`],tem_obj_year[`${9}`],year,month,"data", month_data, data, "jh");
      month_data.map((e) => {
        temp_obj[`${e.Expense_Category}`] = 0;

        if (temp_map.get(e.Expense_Category) == undefined) {
          console.log(undefined);
          temp_map.set(e.Expense_Category, e.Expense_Amount);
        } else {
          let amount = temp_map.get(e.Expense_Category);
          amount += e.Expense_Amount;
          temp_map.set(e.Expense_Category, amount);
        }
      });
      //converting map in to array

      const final_data = Array.from(
        temp_map,
        ([Expense_Category, Expense_Amount]) => ({
          Expense_Category,
          Expense_Amount,
        })
      );

      console.log(
        "#MESSAGE from developer->Main Data to see to understand   and file location -/DatMangae>Context"
      );

      console.log(`month_data`, month_data, `year-${year} month-${month}`);
      console.log(`final_data`, final_data);
      return final_data;
    }

    console.log(data, "month_wise_category_data");
  }
  // month_wise_category_Expense_data(2023, 9);
  return (
    <ContextCreate.Provider
      value={{
        check,
        Category_Month_Amount_expense: month_wise_category_Expense_data(
          2023,
          9
        ),
        month_wise_category_Expense_data,
        feed_expense_data,
      }}
    >
      {props.children}
    </ContextCreate.Provider>
  );
}

export default Provider;
