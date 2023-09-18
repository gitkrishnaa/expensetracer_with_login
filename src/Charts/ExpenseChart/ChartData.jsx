import React from "react";
import { DataManage1ContextCreate } from "../../Data_Manage";

import { useContext } from "react";
import { ChartDataColor20 } from "../Colors/ChartDataColor20";
function ChartData() {
const data_contextCreate=useContext(DataManage1ContextCreate)

console.log(data_contextCreate.month_wise_category_Expense_data(2023,6), "DataContext1 data");
    const DataContext = useContext(
        DataManage1ContextCreate
    ).Category_Month_Amount_expense;
    // console.log(DataContext,data_contextCreate, "DataContext1");

    const finalChart_data = {
        labels: DataContext.map((data) => data.Expense_Category),
        datasets: [
            {
                label: "expense data",
                data: DataContext.map((data) => data.Expense_Amount),
                backgroundColor: ChartDataColor20,
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    };
    return finalChart_data;
}

export default ChartData;
