import React from 'react'
import Styles from "./Styles.module.css";
import { useEffect } from 'react';

function Main() {


  function getDate(){
    var today = new Date();

document.getElementById("date").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);


}
useEffect(()=>{
 getDate()
},[])
// getDate()
  return (
    <div className={Styles.Main_div}>
      <div className={Styles.div1}>
      <div><input type="text" placeholder='Expense Name'/></div>
      <div><input type="text" placeholder='Amount' /></div>
      <div><input type="date" id="date"  placeholder='date'  /></div>
   
      <div><input type="text" placeholder='Details' /></div>
      <div><select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
      </div>
      </div>
  {/* button */}
      
        <div className={Styles.btn_div}>
          <button>Reset</button>
          <button>Add</button>
        </div>
       
      
    </div>
  )
}

export default Main