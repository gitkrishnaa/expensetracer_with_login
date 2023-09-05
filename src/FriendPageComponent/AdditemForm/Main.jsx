import React from 'react'
import Styles from "./Styles.module.css";
import { useEffect } from 'react';
import { BudgetContextCreate } from '../../Context/index';
import { useContext } from 'react';
import { useRef } from 'react';

function Main() {
const Month_Amount_ref=useRef();
const FriendDues=useRef();
const date=useRef();
const ContextCreate=useContext(BudgetContextCreate);
console.log(ContextCreate,"budget contetx")
// function method from expense context
const {add}=ContextCreate;



 

const Add_data_Handler=()=>{
  const dataObj={
    amount:Month_Amount_ref.current.value,
    key:FriendDues.current.value,
  }
  add(dataObj)
  // alert("hello")
}
function GivenMoney(){
return (<>
<div className={Styles.div1}>
      <div><input ref={Month_Amount_ref} type="number"  placeholder='Amount' /></div>
     <div><input ref={FriendDues} type='text' name="reciver Name" id="category"/></div>
     <div><input ref={date} type="date" name="reciver Name" id="category"/></div>
      </div>
  {/* button */}
      
        <div className={Styles.btn_div}>
          <button>Reset</button>
          <button onClick={Add_data_Handler}>Add</button>
        </div>
        </>
        )
       
}
function GetBackmoney(){
<div className={Styles.div1}>
      <div><input ref={Month_Amount_ref} type="number"  placeholder='Amount' /></div>
     <div><select ref={FriendDues} name="category" id="category">
  <option value="none" defaultValue disabled hidden>Month</option>
  <option value="all_month">All month</option>
 
</select>
      </div>
      </div>
  {/* button */}
      
        <div className={Styles.btn_div}>
          <button>Reset</button>
          <button onClick={Add_data_Handler}>Add</button>
        </div>
       
}
  return (
    <div className={Styles.Main_div}>
      
      
    </div>
  )
}

export default Main