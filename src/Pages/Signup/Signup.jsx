import React, { useRef, useState } from "react";
import Styles from "./Styles.module.css";
import { useReducer } from "react";
import Login from "./Login"
function Signup(props) {

const [login_or_signup,setlogin_or_signup]=useState(false)


const login_or_signupHandler=()=>{
  setlogin_or_signup(!login_or_signup)
}

  const sign = useRef();
  const password = useRef();

  const signUpHandler = () => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDmRfuPDEmk7EVQGYpJoxPnWxIrx3Vu0Jc",
      {
        method: "POST",
        body: JSON.stringify({
          email: sign.current.value,
          password: password.current.value,
          returnSecureToken: true,
        }),
      }
    ).then((res) => {
      if (res.ok) {
        res.json().then((data) => console.log(data));
        localStorage.setItem("token", "true");
        props.onClickSignUpUpdate()
        console.log(res)
alert("sucessful")
      } else {
        res.json().then((data) => {console.log(data)
        alert(data.error.message)
        }
        );
      }
    });


  };

  return (
    <>
   {login_or_signup ?<Login login_or_signupHandler={login_or_signupHandler} onClickLoginUpdate={props.onClickSignUpUpdate}/>:<div className={Styles.Main_div}>
      <div className={Styles.div1}>
        {/* <div><span>Name</span><span><input type="text" /></span></div> */}
       <h3>sign Up</h3>
        <div className={Styles.div2}>
          <span className={Styles.tag1}>Email:</span>
          <span>
            <input
              className={Styles.input1}
              type="email"
              ref={sign}
              defaultValue={"Krishna821084@gmail.com"}
            />
          </span>
        </div>
        <div>
          <span className={Styles.tag2}>Password:</span>
          <span>
            <input
              className={Styles.input1}
              type="text"
              ref={password}
              defaultValue={"Kri123456"}
            />
          </span>
        </div>
        <div>
          <button onClick={signUpHandler}>Submit</button>
          <button onClick={login_or_signupHandler}>Login</button>
        </div>
      </div>

    </div>}
  
    </>
  );
}

export default Signup;
