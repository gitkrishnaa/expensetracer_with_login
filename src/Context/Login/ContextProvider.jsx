import React, { useState } from 'react'
import ContextCreate from "./ContextCreate"
import { useReducer } from 'react'
function Provider(props) {

// const [login, setLogin] = useState(second)
// const [signup, setSignup] = useState(second)
const localhost_token=localStorage.getItem("token")
const [sign, setSign] = useState(localhost_token)

// alert("ok")

const loginHandler=()=>{
localStorage.setItem("token",true)

  setSign(localStorage.getItem("token"))
  alert(sign)
  
}
const LogoutHAndler=()=>{
 localStorage.removeItem("token")
  setSign(localStorage.getItem("token"))
  if(null==localStorage.getItem("token")){
    alert("hello")
  }
  alert(localStorage.getItem("token"))
}
  return (
    <ContextCreate.Provider value={{loginHandler,LogoutHAndler,sign:sign}}>

{props.children}

    </ContextCreate.Provider>
  )
}

export default Provider