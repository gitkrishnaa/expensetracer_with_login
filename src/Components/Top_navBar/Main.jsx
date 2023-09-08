import React from "react";
import Styles from "./Styles.module.css";

import DesktopViewTop_nav from "./DesktopView1536px/Main"
import MobileViewTop_nav from "./MobileView500px/Main"
import TabletViewTop_nav from "./TabletView650_1300px/Main"
import TabletViewTop_nav2 from "./TabletView500_650px/Main"

function Main(props) {
  return (
    <div className={Styles.Main_div}>
      {/* page name */}
      <div className={Styles.Page_name}>{props.Page_name}</div>
      <div className={Styles.tabs}>

<div  className={Styles.desktop_nav}><DesktopViewTop_nav/></div>
<div  className={Styles.tablet_nav}><TabletViewTop_nav/></div>
<div  className={Styles.tablet_nav2}><TabletViewTop_nav2/></div>
<div  className={Styles.mobile_nav}><MobileViewTop_nav/></div>
{/* <div><DesktopViewTop_nav/></div> */}
       </div>

      
    </div>
  );
}

export default Main;
