import React from 'react'
import Styles from "./Styles.module.css";
import { useEffect } from 'react';
import { BudgetContextCreate } from '../../Context/index';
import { useContext } from 'react';
import { useRef } from 'react';

function Main() {
const Month_Amount_ref=useRef();
const Month_Category_ref=useRef();
const ContextCreate=useContext(BudgetContextCreate);
console.log(ContextCreate,"budget contetx")
// function method from expense context
const {add}=ContextCreate;



 

const Add_data_Handler=()=>{
  const dataObj={
    amount:Month_Amount_ref.current.value,
    key:Month_Category_ref.current.value,
  }
  add(dataObj)
  // alert("hello")
}

  return (
    <div className={Styles.Main_div}>
      <div className={Styles.div1}>
      <div><input ref={Month_Amount_ref} type="number"  placeholder='Amount' /></div>
     <div><select ref={Month_Category_ref} name="category" id="category">
  <option value="none" defaultValue disabled hidden>Month</option>
  <option value="all_month">All month</option>
  <option value="January" >January</option>
  <option value="Fabruary">Fabruary</option>
  <option value="March">March</option>
  <option value="April">April</option>
  <option value="May">May</option>
  <option value="June">June</option>
  <option value="July">July</option>
  <option value="Augest">September</option>
  <option value="September">Augest</option>
  <option value="October">October</option>
  <option value="Novmber">Novmber</option>
  <option value="December">December</option>
</select>
      </div>
      </div>
  {/* button */}
      
        <div className={Styles.btn_div}>
          <button>Reset</button>
          <button onClick={Add_data_Handler}>Add</button>
        </div>
       
      
    </div>
  )
}

export default Main