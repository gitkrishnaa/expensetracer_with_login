import React, { useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend ,CategoryScale} from "chart.js";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import PieChart from './PieChart';

// import { CategoryScale } from "chart.js";
const Data = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555
  },
  {
    id: 6,
    year: 2020,
    userGain: 45000,
    userLost: 234
  }
];
Chart.register(CategoryScale);
function MonthExpenseChart() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
 
  return (
    <div className="App123" >
      {/* <p>Using Chart.js in React</p> */}
      <PieChart chartData={chartData} />
    </div>
  );
}

export default MonthExpenseChart

