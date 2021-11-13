import Forgot from "./forgot_password/forgot_password";
 import Login from "./login/login";
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChangePassword from "./change_password/change_password";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import CreateAcount from "./create_account/createAcount";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' ><Login /></Route>
        <Route exact path='/forgot-password' ><Forgot /></Route>
        <Route exact path='/change-password'><ChangePassword /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
