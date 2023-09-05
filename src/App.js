import logo from './logo.svg';
import Styles from "./App.module.css"
import { Navigate } from './Components';
import { Dashboard,Budget,Expense,Friends,Help,Report,Setting,Todo,Monthly_pay } from './Pages';
import {Route,Switch} from "react-router-dom"
import { ExpenseContextProvider,BudgetContextProvider,Monthly_payContextProvider } from './Context';





function App() {
  return (
    <ExpenseContextProvider>
      <BudgetContextProvider>
      <Monthly_payContextProvider>
    <div className={Styles.Main_div}>
      {/* nav */}
      <div className={Styles.Nav} >


     < Navigate/>
      </div>

<div className={Styles.Page}>
<Switch>
<Route exact path="/"><Dashboard/></Route>
<Route exact path="/dashboard"><Dashboard/></Route>
<Route exact path="/Expense"><Expense/></Route>
<Route exact path="/MonthlyPay"><Monthly_pay/></Route>
<Route exact path="/Budget"><Budget/></Route>
<Route exact path="/Friends"><Friends/></Route>
<Route exact path="/Todo"><Todo/></Route>
<Route exact path="/Report"><Report/></Route>
<Route exact path="/Help"><Help/></Route>
</Switch>
</div>
    </div>
    </Monthly_payContextProvider>
    </BudgetContextProvider>
    </ExpenseContextProvider>
  );
}

export default App;
