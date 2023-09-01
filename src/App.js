import logo from './logo.svg';
import Styles from "./App.module.css"
import { Navigate } from './Components';
import { Dashboard } from './Pages';

function App() {
  return (
    <div className={Styles.Main_div}>
      {/* nav */}
      <div className={Styles.Nav} >


     < Navigate/>
      </div>

<div className={Styles.Page}>
<Dashboard/>


</div>
    </div>
  );
}

export default App;
