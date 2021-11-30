import Forgot from "./forgot_password/forgot_password";
 import Login from "./login/login";
import ChangePassword from "./change_password/change_password";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SideNav from "./Account/sideNav/sidenav";
import React from "react";
import Dashboard from "./Seller/Dashboard/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/seller" />
        </Route>
        <Route exact path='/account'>
          <SideNav />
        </Route>
        <Route exact path='/account/shipping'>
          <SideNav />
        </Route>
        <Route exact path='/account/changepass'>
          <SideNav />
        </Route>
        <Route exact path='/account/personinfo'>
          <SideNav />
        </Route>
        <Route exact path='/seller'>
          <Dashboard />
        </Route>
        <Route exact path='/seller/order'>
          <Dashboard />
        </Route>
        <Route exact path='/seller/request-quotes'>
          <Dashboard />
        </Route>
       
        <Route exact path='/login' ><Login /></Route>
        <Route exact path='/forgot-password' ><Forgot /></Route>
        <Route exact path='/change-password'><ChangePassword /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
