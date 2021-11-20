import Forgot from "./forgot_password/forgot_password";
 import Login from "./login/login";
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChangePassword from "./change_password/change_password";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SideNav from "./Account/sideNav/sidenav";
// import PersonInfo from "./Account/personInfo/personInfo";
import React from "react";
import Dashboard from "./Seller/Dashboard/dashboard";
// import CreateAcount from "./create_account/createAcount";

function App() {
  return (
    <Dashboard/>
    // <BrowserRouter>
    //   <Switch>
    //     <Route exact path='/account'>
    //       <SideNav />
    //       {/* <PersonInfo/> */}
    //     </Route>
    //     <Route exact path='/account/shipping'>
    //       <SideNav />
    //     </Route>
    //     <Route exact path='/account/changepass'>
    //       <SideNav />
    //     </Route>
    //     <Route exact path='/account/personinfo'>
    //       <SideNav />
    //     </Route>
    //     <Route exact path="/">
    //       <Redirect to="/account" />
    //     </Route>
    //     <Route exact path='/login' ><Login /></Route>
    //     <Route exact path='/forgot-password' ><Forgot /></Route>
    //     <Route exact path='/change-password'><ChangePassword /></Route>
    //   </Switch>
    // </BrowserRouter>
  );
}

export default App;
