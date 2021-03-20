import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Destination from './Components/Destination/Destination';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import RiderDetails from './Components/RiderDetails/RiderDetails';
import RidersInfo from './Components/RidersInfo/RidersInfo';

export const ThemContext = createContext();
function App () {
  const [loggedUser, setLoggedUser] = useState({});


  return (
    
    <ThemContext.Provider value={[loggedUser, setLoggedUser]}>
      
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>

          <PrivateRoute path="/rider/:riderId">
            <RidersInfo></RidersInfo>
          </PrivateRoute>
          <Route path ="/details/:detailsId">
             <RiderDetails></RiderDetails>
          </Route>


          <PrivateRoute path="/destination">
            <Destination></Destination>
          </PrivateRoute>
          <PrivateRoute path="/blog">
           <Blog></Blog>
         </PrivateRoute>
         <Route path="/contact">
           <Contact></Contact>
         </Route>
         <PrivateRoute path="/detection">
           <Home></Home>
         </PrivateRoute>
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
