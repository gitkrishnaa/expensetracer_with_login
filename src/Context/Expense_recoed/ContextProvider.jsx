import React, { useState } from 'react'
import CreateCon from "./ContextCreate"
function Provider(props) {

// using useState for data inseting from input
// you can use useReducer also
const [expenseData,setExpenseData]=useState([])


// creating add data into it
const add=(d)=>{
    let arr=[...expenseData]
    arr.push(d)
    setExpenseData(arr)
//  console.log(todo)   
}
const Delete_todo=(id)=>{
    let arr=[...expenseData]
    arr[id]="";
    setExpenseData(arr)
 console.log(expenseData)  
// alert(id) 
}
const edit_toto=(id,data)=>{
    let arr=[...expenseData]
    arr[id]=data;
    setExpenseData(arr)
 console.log(expenseData)  
// alert(id) 
}
// so id not assign

  return (
    <CreateCon.Provider value={{add,todo,Delete_todo,edit_toto}}>

{props.children}

    </CreateCon.Provider>
  )
}

export default Provider