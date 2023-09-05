import React from 'react'
import Styles from "./Styles.module.css";
import { Transaction_list_render } from '..';
import { ExpenseContextCreate } from '../../Context';
import { useContext } from 'react';

function Main() {
  const ExpenseContext=useContext(ExpenseContextCreate);

  return (
    <div className={Styles.Main_div}>
  {ExpenseContext.data.map(e=><Transaction_list_render data={e}/>)}

    </div>
  )
}

export default Main