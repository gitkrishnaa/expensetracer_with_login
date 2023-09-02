import React from "react";
import Styles from "./Styles.module.css";
import {
  Addexpense_button,
  Report_gen_button,
  SearchBar,
  Tablet_view_add_button,
  Notification_btn
} from "../../index";


function Main(props) {
  return (
  
      <div className={Styles.tabs}>
        <div className={Styles.add_btn}>
          <Addexpense_button btn_name={"Expense"} />
          <Addexpense_button btn_name={"Todo"} />
          <Addexpense_button btn_name={"Friends"} />
          <Report_gen_button btn_name={"Report"} />
        </div>

        <div className={Styles.SearchBar}>
          <SearchBar />
        </div>

        {/* icons */}
        <Notification_btn/>
      </div>

  );
}

export default Main;
