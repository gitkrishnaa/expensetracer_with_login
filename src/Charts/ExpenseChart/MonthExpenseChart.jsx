import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend ,CategoryScale} from "chart.js";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import PieChart from './PieChart';

import { DataManage1ContextCreate } from '../../Data_Manage';
import { useContext } from 'react';
import ChartData from './ChartData';
import ModelDataFake from './ModelDataFake';
import { useRef } from 'react';
import BarChart from './Bar';
import LineChart from './Line';
import DoughnutChart from './Donought';

// import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);
function MonthExpenseChart() {
  const Finaldata=ChartData();
  const [chartDataState, setChartDataState] = useState(Finaldata);
  console.log(Finaldata,"chart data without state")
  console.log(chartDataState,"chart data with state")
  // useEffect(()=>{setChartDataState(ChartData)})
 //logic or way
 //how to update chart,
//  so when user click on add button , this function will trigger,so chart_upDate_handler is also set in add button ,in input component click handler 

const [changeChartType,setChangeChartType]=useState("BAR")

const select_ref=useRef()
const ChangeChartType_function=({n})=>{
if(n=="PIE"){
  // alert("if pie")
return <PieChart chartData={Finaldata}/>
}
if(n=="LINE"){
  
return <LineChart chartData={Finaldata}/>
}
if(n=="DONOUGHT"){
  
return <DoughnutChart chartData={Finaldata}/>
}
if(n=="BAR"){
  
return <BarChart chartData={Finaldata}/>
  }
  else{
    <BarChart chartData={Finaldata}/>
  }
}

const ChartSelectHandler=(e)=>{
  const value_of_select=select_ref.current.value;
alert(e.target.value,"value")
setChangeChartType(e.target.value);
}
  return (
    <div className="App" style={{width:"70%"}} ref={select_ref}>
      <select name="chart" id="" onChange={ChartSelectHandler} >
<option  value="PIE">Pie chart</option>
<option  value="BAR">Bar chart</option>
<option  value="DONOUGHT">Donought chart</option>
<option  value="LINE">Line chart</option>
      </select>
      {/* <p>Using Chart.js in React</p> */}
      {/* <LineChart chartData={Finaldata} /> */}
      {<ChangeChartType_function n={changeChartType}/>}
  
    </div>
  );
}

export default MonthExpenseChart