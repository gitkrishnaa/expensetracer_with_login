import React from 'react'
import Styles from "./Styles.module.css";
import { useEffect } from 'react';
import { Monthly_payContextCreate } from '../../Context/index';
import { useContext } from 'react';
import { useRef } from 'react';

function Main() {

const Amount_ref=useRef()
const Date_ref=useRef()
const Details_ref=useRef()
const RecieverName_ref=useRef()
const Month_Category_ref=useRef()
const The_Page_Context=useContext(Monthly_payContextCreate);
console.log(The_Page_Context,"montly pay currnt data /from montly_pay_context" )
// function method from expense context
const {addData}=The_Page_Context

//set current date when date fileld load
  function getDate(){
    var today = new Date();
    document.getElementById("date").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
}
// getDate() - directly call gives error
useEffect(()=>{
 getDate()
},[])

const Add_data_Handler=()=>{
//is name already added
let duplicate=false;
const data=The_Page_Context.data.map(e=>{
  if(e.Montly_pay_Receiver==RecieverName_ref.current.value){
    duplicate=true;
    return true;
  }
})

if(duplicate){
  alert("Name is already added, cannot be same");
  return;
}

  const dataObj={
    Montly_pay_Amount:Amount_ref.current.value,
    Montly_pay_Date:Date_ref.current.value,
    Montly_pay_Details:Details_ref.current.value,
    Montly_pay_Receiver:RecieverName_ref.current.value,
    Start_Month:Month_Category_ref.current.value,
    payment_by_month:{}
  }
  addData(dataObj)
}

  return (
    <div className={Styles.Main_div}>
      <div className={Styles.div1}>
      <div><input ref={RecieverName_ref} placeholder="Title"/></div>
      <div><input ref={Amount_ref} type="number"  placeholder='Amount' /></div>
      <div><input ref={Date_ref} type="date" id="date"  placeholder='date'  /></div>
      <div><input ref={Details_ref} type="text" placeholder='payment Details' /></div>
      <div><select ref={Month_Category_ref} name="category" id="category">
  <option value="none" ref={Month_Category_ref} defaultValue disabled hidden>Month</option>
  <option value="01_January" >January</option>
  <option value="02_Fabruary">Fabruary</option>
  <option value="03_March">March</option>
  <option value="04_April">April</option>
  <option value="05_May">May</option>
  <option value="06_June">June</option>
  <option value="07_July">July</option>
  <option value="08_Augest">September</option>
  <option value="09_September">Augest</option>
  <option value="1O_ctober">October</option>
  <option value="11_Novmber">Novmber</option>
  <option value="12_December">December</option>
</select>
      </div>
      </div>
  {/* button */}
      
        <div className={Styles.btn_div}>
          <button>Reset</button>
          <button onClick={Add_data_Handler}>Create</button>
        </div>
       
      
    </div>
  )
}

export default Main