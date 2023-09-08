import React from "react";
import Styles from "./Styles.module.css";
import {
  Addexpense_button,
  Report_gen_button,
  Report_icon_btn,
  SearchBar,
  Tablet_view_add_button,
  Tablet_add_icon,
  Notification_btn
} from "../../index";
import { MdNotificationsNone } from "react-icons/md";

function Main(props) {
  return (
  
      <div className={Styles.tabs}>
        <div>
        <div className={Styles.add_btn}>
        {/* <Tablet_add_icon/> */}
          <Report_icon_btn btn_name={""} />
        </div>

        <div className={Styles.SearchBar}>
          <SearchBar />
        </div>

        {/* icons */}
        <div className={Styles.add_btn}>
        <Notification_btn/>
        </div>
        </div>

      </div>

  );
}

export default Main;
