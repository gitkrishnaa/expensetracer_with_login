import React from 'react'
import Styles from "./Styles.module.css";
import { Monthly_pay_List_render } from '..';
import { Monthly_payContextCreate } from '../../Context';
import { useContext } from 'react';

function Main() {
  const The_page_context=useContext(Monthly_payContextCreate);

  return (
    <div className={Styles.Main_div}>
  {The_page_context.data.map(e=><Monthly_pay_List_render data={e}/>)}

    </div>
  )
}

export default Main