import logo from "./logo.svg";
import Styles from "./App.module.css";
import { Mobile_bottom_nav, Navigate } from "./Components";
import {
  Dashboard,
  Budget,
  Expense,
  Friends,
  Help,
  Report,
  Setting,
  Todo,
  Monthly_pay,
  Signup,
} from "./Pages";
import { Route, Switch } from "react-router-dom";
import {
  ExpenseContextProvider,
  BudgetContextProvider,
  Monthly_payContextProvider,
  Login_context_provider,
  Login_create_context,
} from "./Context";
import { DataManage1Context_Provider } from "./Data_Manage";
import { useContext, useState } from "react";

function App() {
// user ligin signup
const login_context=useContext(Login_create_context);
const isSignin=login_context.sign;
const login_signupHandler=login_context.loginHandler
const localhost_token=localStorage.getItem("token")
const [sign, setSign] = useState(localhost_token)

const SignHandler=()=>{
  const localhost_token=localStorage.getItem("token")
  // setSign(localhost_token)
  login_signupHandler()

}

  return (
   
    <ExpenseContextProvider>
      <BudgetContextProvider>
        <Monthly_payContextProvider>
          <DataManage1Context_Provider>
            {isSignin==null?<Signup onClickSignUpUpdate={SignHandler} />:
            <div className={Styles.Main_div}>
              {/* nav */}
              <div className={Styles.Nav}>
                <Navigate />
              </div>
              <div className={Styles.Mobile_bottom_Nav}>
                <Mobile_bottom_nav />
              </div>
              <div className={Styles.Page}>
                <Switch>
                  <Route exact path="/">
                    <Dashboard />
                  </Route>
                  <Route exact path="/dashboard">
                    <Dashboard />
                  </Route>
                  <Route exact path="/Expense">
                    <Expense />
                  </Route>
                  <Route exact path="/MonthlyPay">
                    <Monthly_pay />
                  </Route>
                  <Route exact path="/Budget">
                    <Budget />
                  </Route>
                  <Route exact path="/Friends">
                    <Friends />
                  </Route>
                  <Route exact path="/Todo">
                    <Todo />
                  </Route>
                  <Route exact path="/Report">
                    <Report />
                  </Route>
                  <Route exact path="/Help">
                    <Help />
                  </Route>
                </Switch>
              </div>
            </div>}
          </DataManage1Context_Provider>
        </Monthly_payContextProvider>
      </BudgetContextProvider>
    </ExpenseContextProvider>
    
  );
}

export default App;
