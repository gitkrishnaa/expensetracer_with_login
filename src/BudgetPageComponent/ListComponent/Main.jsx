import React from 'react'
import Styles from "./Styles.module.css";
import { List_render } from '..';
import { BudgetContextCreate } from '../../Context';
import { useContext } from 'react';

function Main() {
  const BudgetContext=useContext(BudgetContextCreate);

const dataObj=BudgetContext.data;
  const dataArray=Object.keys(BudgetContext.data)
  return (
    <div className={Styles.Main_div}>
  {dataArray.map(e=><List_render data={{month:e,amount:dataObj[`${e}`]}}/>)}

    </div>
  )
}

export default Main