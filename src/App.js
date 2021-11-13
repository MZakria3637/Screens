import Forgot from "./forgot_password/forgot_password";
 import Login from "./login/login";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChangePassword from "./change_password/change_password";

// import CreateAcount from "./create_account/createAcount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='forgot-password' element={<Forgot/>}></Route>
        <Route path='change-password' element={<ChangePassword/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
