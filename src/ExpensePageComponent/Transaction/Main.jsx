import React, { useState } from 'react'
import Styles from "./Styles.module.css";
import { Transaction_list_render } from '..';
import { ExpenseContextCreate } from '../../Context';
import { useContext } from 'react';

function Main() {
  const ExpenseContext=useContext(ExpenseContextCreate);
const MainData=ExpenseContext.data;
// const [arr,setArr]=useState(0);

// const newrenderDataArray=[];
// let j=0;
// for(let i=(arr*20);i<((arr+1)*20);i++){
//   newrenderDataArray[j]=MainData[i];
//   j++;
// }

// const paginate_increase=()=>{
//   // if((MainData.length/20)<(arr+2)){
//   //   alert("last page, it cant increase more");
//   //   return;
//   // }
 
//   setArr(a=>a+1)
//   console.log(arr)
//   console.log(newrenderDataArray)
// }
// const paginate_decrease=()=>{
//   if(arr==0){
//     alert("its zero, it cant decrease more");
//     return
//   }
//   setArr(a=>a-1)
//   console.log(arr)
//   console.log(newrenderDataArray)
// }
  return (
    <div className={Styles.Main_div}>
  {MainData.map((e,n)=>{
  return <Transaction_list_render data={e}/>})}

    </div>
  )
}

export default Main