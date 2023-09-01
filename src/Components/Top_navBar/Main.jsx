import React from "react";
import Styles from "./Styles.module.css";
import { SearchBar } from "..";

function Main(props) {
  return (
    <div className={Styles.Main_div}>
   
{/* page name */}
      <div className={Styles.Page_name}>{props.Page_name}</div>

      <div className={Styles.add_btn}>add_btn</div>

{/* search */}
      <div className={Styles.xyz}>
      <SearchBar/>
      </div>

{/* icons */}
      <div className={Styles.icons_button}>
      
      </div> 


    </div>


  );
}

export default Main;
