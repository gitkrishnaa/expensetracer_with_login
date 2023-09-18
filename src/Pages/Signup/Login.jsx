import React, { useRef } from "react";
import Styles from "./Styles.module.css";
import { useReducer } from "react";
import {redirect} from "react-router-dom"
function Signup(props) {
  const sign = useRef();
  const password = useRef();

  const signUpHandler = () => {
     fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDmRfuPDEmk7EVQGYpJoxPnWxIrx3Vu0Jc",
      {
        method: "POST",
        body: JSON.stringify({
          email: sign.current.value,
          password: password.current.value,
          returnSecureToken: true,
        }),
      }
    )
    .then(res=>{
if(res.ok){
 alert("login sucessfull")
 localStorage.setItem("token", "true");
 props.onClickLoginUpdate()

  res.json().then(data=>console.log(data))
}
else{
  res.json().then(data=>{console.log(data)
  alert(data.error.message)
  })
}
    })

    
  };

  return (
    <div className={Styles.Main_div} >
   
    <div className={Styles.div1} style={{backgroundColor:"purple"}}>
      {/* <div><span>Name</span><span><input type="text" /></span></div> */}
      <h3>login</h3>
      <div className={Styles.div2} >
        <span className={Styles.tag1}>Email:</span>
        <span>
        <input  className={Styles.input1} type="email" ref={sign} defaultValue={"Krishna821084@gmail.com"}/>
        </span>
      </div>
      <div>
        <span className={Styles.tag2}>Password:</span>
        <span>
        <input className={Styles.input1} type="text" ref={password} defaultValue={"Kri123456"}/>
        </span>
      </div>
      <div>
        <button onClick={signUpHandler}>Submit</button>
        <button onClick={props.login_or_signupHandler}>SignUp</button>
      </div>
    </div>
  </div>
  );
}

export default Signup;
