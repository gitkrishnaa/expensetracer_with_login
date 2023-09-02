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
  
      <div className={Styles.tabs}>
        <div className={Styles.add_btn}>
        <Tablet_view_add_button/>
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
