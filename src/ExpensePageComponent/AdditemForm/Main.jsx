import React from 'react'
import Styles from "./Styles.module.css"
function Main() {
  return (
    <div className={Styles.Main_div}>
      <div className={Styles.div1}>
      <div><input type="text" placeholder='name'/></div>
      <div><input type="text" placeholder='Amount' /></div>
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