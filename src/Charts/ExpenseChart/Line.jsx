// src/components/PieChart.js
import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {




  return (
    <div className="chart-container">
      
      <Line
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
export default LineChart;