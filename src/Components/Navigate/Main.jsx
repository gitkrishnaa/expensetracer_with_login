import React, { useContext } from "react";
import Styles from "./Styles.module.css";
import {Link} from "react-router-dom"
import { Login_create_context } from "../../Context";

function Main() {
  const Login_context=useContext(Login_create_context)

  console.log(Login_context,"Login_context..................################################")
  return (
    <div className={Styles.Main_div}>
   

      <div className={Styles.profile}>profile</div>


      <div className={Styles.Main_nav}>
        <ul>
          <Link to="/Dashboard"><li>Dashboard</li></Link>
          <Link to="/Expense"><li>Expense</li></Link>
          <Link to="/MonthlyPay"><li>Monthly Pay</li></Link>
          <Link to="/Budget"><li>Budget</li></Link>
          {/* <Link to="/Friends"><li>Friends</li></Link> */}
          {/* <Link to="/Reminder"><li>Reminder</li></Link> */}
          {/* <Link to="/Notes"><li>Notes</li></Link> */}
          <Link to="/Todo"><li>Todo</li></Link>
          <Link to="/Report"><li>Report</li></Link>
          <Link to="/Help"><li>Help</li></Link>
        </ul>
      </div>


      <div className={Styles.footer_nav}>
        <ul>
        <li onClick={()=>{alert(`width-${window.innerWidth} || height ${window.innerHeight}`)}}>Setting</li>
        <Link to="/"><li onClick={Login_context.LogoutHAndler}>Logout</li></Link>
          
        </ul>
        
      </div> 


    </div>


  );
}

export default Main;
