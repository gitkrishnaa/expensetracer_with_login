// src/components/PieChart.js
import React from "react";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart({ chartData }) {




  return (
    <div className="chart-container">
      
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
              text: "Users Gained between 2016-2020"
            }
          }
        }}
      />
    </div>
  );
}
export default DoughnutChart;