import {BrowserRouter, Routes,Route} from "react-router-dom"
import Login from "./components/login"
import Signup from "./components/signup"
import Dashboard from "./components/dashboard"
import ForgetPassword from "./components/Forgetpassword"
import ResetPassword from "./components/Resetpassword"

import './App.css';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/login" exact Component={Login}/>
            <Route path="/signup" exact Component={Signup}/>
            <Route path="/dashboard" exact Component={Dashboard}/>
            <Route path="/forgetPassword" exact Component={ForgetPassword}/>
            <Route path="/resetPassword/:token" exact Component={ResetPassword}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
