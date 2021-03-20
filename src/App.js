import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import RidersInfo from './Components/RidersInfo/RidersInfo';

export const ThemContext = createContext();
function App () {
  const [loggedUser, setLoggedUser] = useState({});


  return (
    
    <ThemContext.Provider value={[loggedUser, setLoggedUser]}>
      
      <Router>
      <Header></Header>
        <Switch>
          <PrivateRoute path="/home">
          <Home></Home>
          </PrivateRoute>

          <PrivateRoute path="/rider/:riderId">
            <RidersInfo></RidersInfo>
          </PrivateRoute>

          <Route path ="/details/:detailsId">

          </Route>

          <Route path="/login">
            <LogIn></LogIn>
          </Route>

          <Route exact path= "/">
            <Home></Home>
          </Route>

          <Route path="*">
          <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </ThemContext.Provider>
    
  );
};

export default App;
