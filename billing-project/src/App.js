import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Home1 from './Home1';
import Dashboardcsvcontacts from './Dashboardcsvcontacts';
import Dashboardreports from './Dashboardreports';
import Dashboardinvoices from './Dashboardinvoices';
import Account from './Account';
import Reportsettingcopy from './Reportsettingcopy';
import Inbox from './Inbox';
import {Switch,Route} from "react-router-dom"

function App() {
  return (
    <div>
        <Switch>
            <Route exact path ="/" component={Home}/>
            <Route exact path ="/home1" component={Home1}/>
            <Route exact path ="/dashboardcsvcontacts" component={Dashboardcsvcontacts}/>
            <Route exact path ="/dashboardreports" component={Dashboardreports}/>
            <Route exact path ="/dashboardinvoices" component={Dashboardinvoices}/>
            <Route exact path ="/account" component={Account}/>
            <Route exact path ="/reportsettingcopy" component={Reportsettingcopy}/>
            <Route exact path ="/inbox" component={Inbox}/>

            
        </Switch>
            
        </div>
  );
}

export default App;
