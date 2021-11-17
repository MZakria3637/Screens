import Forgot from "./forgot_password/forgot_password";
 import Login from "./login/login";
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChangePassword from "./change_password/change_password";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SideNav from "./Account/sideNav/sidenav";
import PersonInfo from "./Account/personInfo/personInfo";
import React from "react";
// import CreateAcount from "./create_account/createAcount";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" render={() => {
          return (
            <React.Fragment>
              <SideNav />
              <PersonInfo />
            </React.Fragment>
          )
        }} /> */}
        <Route exact path='/'>
          <SideNav />
          {/* <PersonInfo/> */}
        </Route>
        <Route exact path='/login' ><Login /></Route>
        <Route exact path='/forgot-password' ><Forgot /></Route>
        <Route exact path='/change-password'><ChangePassword /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
