import logo from './logo.svg';
import Styles from "./App.module.css"
import { Navigate } from './Components';
import { Dashboard,Budget,Expense,Friends,Help,Report,Setting,Todo } from './Pages';
import {Route} from "react-router-dom"





function App() {
  return (
    <div className={Styles.Main_div}>
      {/* nav */}
      <div className={Styles.Nav} >


     < Navigate/>
      </div>

<div className={Styles.Page}>

<Route path="/"><Dashboard/></Route>
<Route path="dashboard"><Dashboard/></Route>
<Route path="Expense"><Expense/></Route>
<Route path="Budget"><Budget/></Route>
<Route path="Friends"><Friends/></Route>
<Route path="Todo"><Todo/></Route>
<Route path="Report"><Report/></Route>
<Route path="Help"><Help/></Route>
</div>
    </div>
  );
}

export default App;
