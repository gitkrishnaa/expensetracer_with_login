import React from "react";
import Styles from "./Styles.module.css";
import {
  Tablet_add_icon,

} from "../index";
import IconButton_format from "../buttons/IconsButtonFormat/Main"
import { MdNotificationsNone } from "react-icons/md";
import { TfiMenu } from "react-icons/tfi";
import {HiOutlineDocumentReport} from "react-icons/hi"
import {IoMdAddCircleOutline} from "react-icons/io";
import {AiOutlineUser} from "react-icons/ai";

function Main(props) {
  return (
  
      <div className={Styles.tabs}>
        <div>

{/* threedot  */}
        <div className={Styles.add_btn}>
          {/* <Tablet_add_icon/> */}
        <IconButton_format>
        <TfiMenu/>
        </IconButton_format>
        </div>
{/* add icon */}
        <div className={Styles.SearchBar}>
        <IconButton_format  >
        <IoMdAddCircleOutline/>
        </IconButton_format>
        </div>

{/* accounts */}
        <div className={Styles.add_btn}>
        <IconButton_format>
        <AiOutlineUser/>
        </IconButton_format>
           </div>
        </div>

      </div>

  );
}

export default Main;
