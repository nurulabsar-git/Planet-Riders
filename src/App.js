import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
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
          <Route exact path= "/">
            <Home></Home>
          </Route>

          <Route path="*">
          <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </div>
    
  );
};

export default App;
