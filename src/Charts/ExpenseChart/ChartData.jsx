import React from "react";
import { DataManage1ContextCreate } from "../../Data_Manage";

import { useContext } from "react";
import { ChartDataColor20 } from "../Colors/ChartDataColor20";
function ChartData() {
    const DataContext = useContext(
        DataManage1ContextCreate
    ).Category_Month_Amount_expense;
    console.log(DataContext, "DataContext");
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
