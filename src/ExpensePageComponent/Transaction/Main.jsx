import React from 'react'
import Styles from "./Styles.module.css";
import { Transaction_list_render } from '..';
import { ExpenseContextCreate } from '../../Context';
import { useContext } from 'react';

function Main() {
  const ExpenseContext=useContext(ExpenseContextCreate);

  return (
    <div className={Styles.Main_div}>
      <button>load More</button>
  {ExpenseContext.data.map((e,n)=>{
  return n<20?<Transaction_list_render data={e}/>:console.log()})}

    </div>
  )
}

export default Main