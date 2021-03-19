import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import RidersInfo from './Components/RidersInfo/RidersInfo';


function App () {
  return (
    <div>
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>

          <Route path="/rider/:riderId">
            <RidersInfo></RidersInfo>
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
};

export default App;
