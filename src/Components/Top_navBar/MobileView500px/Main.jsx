import React from "react";
import Styles from "./Styles.module.css";
import {
  Addexpense_button,
  Notification_btn,
  Report_gen_button,
  SearchBar,
  Tablet_view_add_button,
} from "../../index";
import { MdNotificationsNone } from "react-icons/md";

function Main(props) {
  return (
    <div className={Styles.Main_div}>
      mobile
      {/* page name */}
      <div className={Styles.Page_name}>{props.Page_name}</div>
      <div className={Styles.tabs}>
        <div className={Styles.add_btn}>
          <Addexpense_button btn_name={"Expense"} />
          <Addexpense_button btn_name={"Todo"} />
          <Addexpense_button btn_name={"Friends"} />
          <Report_gen_button btn_name={"Report"} />
        </div>

        <div className={Styles.add_btn_yablet_view}>
          <Tablet_view_add_button />
        </div>

        <div className={Styles.SearchBar}>
          <SearchBar />
        </div>

        {/* icons */}
        <Notification_btn/>
      </div>
      {/* search */}
    </div>
  );
}

export default Main;
