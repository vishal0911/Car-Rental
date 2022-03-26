
import './App.css';
import Data from './Data';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfileScreen from './ProfileScreen';

function App() {
  return (
    <Router>
      <div className="app">

        <Switch>

           
          <Route path="/data">
            <Data />
          </Route>


          <Route path="/">
            <ProfileScreen />
          </Route>
         
        </Switch>


      </div>
    </Router>
  );
}

export default App;
