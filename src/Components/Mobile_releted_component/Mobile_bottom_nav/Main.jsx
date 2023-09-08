import React, { useState } from "react";
import Styles from "./Styles.module.css";
import IconButton_format from "../../buttons/IconsButtonFormat/Main"
import { TfiMenu } from "react-icons/tfi";
import {IoMdAddCircleOutline} from "react-icons/io";
import {AiOutlineUser} from "react-icons/ai";
// export {default as MiddleNavPopup} from "./Popup_Models/Nav_window/Main"
import { SideNav_popupLeft_model,SideNav_popupRight_model,MiddleNavPopup, MobileMenu, MobileProfile,Mobile_Add_button_div } from "..";

function Main(props) {


const  [menuNav, setMenuNav] = useState(false)
const  [addButton, setAddButton] = useState(false)
const  [profile_nav, setProfile_nav] = useState(false);
const menuHandler=()=>{
  setMenuNav(!menuNav);
  setAddButton(false)
  setProfile_nav(false)
}

const addbuttonHandler=()=>{
  setMenuNav(false);
  setAddButton(!addButton)
  setProfile_nav(false)
}
const profileHandler=()=>{
  setMenuNav(false);
  setAddButton(false)
  setProfile_nav(!profile_nav)
}


  return (
  
      <div className={Styles.tabs}>

{menuNav?<MiddleNavPopup><MobileMenu/></MiddleNavPopup>:console.log("menu closed")}
{addButton?<MiddleNavPopup><Mobile_Add_button_div/></MiddleNavPopup>:console.log("menu closed")} 
 {profile_nav?<MiddleNavPopup><MobileProfile/></MiddleNavPopup>:console.log("menu closed")}

        <div>

{/* threedot  */}
        <div className={Styles.add_btn} onClick={menuHandler}>
          {/* <Tablet_add_icon/> */}
        <IconButton_format>
        <TfiMenu/>
        </IconButton_format>
        </div>
{/* add icon */}
        <div className={Styles.SearchBar}  onClick={addbuttonHandler}>
        <IconButton_format  >
        <IoMdAddCircleOutline/>
        </IconButton_format>
        </div>

{/* accounts */}
        <div className={Styles.add_btn}  onClick={profileHandler}>
        <IconButton_format >
        <AiOutlineUser/>
        </IconButton_format>
           </div>
        </div>

      </div>

  );
}

export default Main;
