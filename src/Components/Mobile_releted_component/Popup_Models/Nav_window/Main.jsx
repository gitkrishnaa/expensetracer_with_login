import React from "react";
import Styles from "./Styles.module.css";
import {Link} from "react-router-dom";

function Backdrop(props){
  const CloseBackDrop=()=>{
    props.onClick_backdrop_close()
// alert("Backdrop")
  }
  return (
<div className={Styles.Backdrop} onClick={CloseBackDrop}>

  
</div>


  )
}


function Main(props) {
  return (


<div className={Styles.Main_div}>
<div className={Styles.sub_div}>
  {props.children}
</div>
<Backdrop onClick_backdrop_close={props.onClick_backdrop_close}/>


    </div>

  


  );
}

export default Main;
