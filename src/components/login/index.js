// import logo from './logo.svg';
import {useState} from "react"
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'
import './index.css';


function Login() {
const [email, setEmail]=useState("")
const [password, setPassword]=useState("")

const login =async(event)=>{
  event.preventDefault();
    try{
        const response = await fetch("http://localhost:1337/api/login",{
            method: 'POST',
            headers:{"Content-Type":"application/json",},
            body: JSON.stringify({email,password}),
        })
        const data = await response.json()
        if(data.user){
            alert("login successful")
            Cookies.set('jwt_token', data.user, {expires: 30, path: '/'})
            window.location.href ="/dashboard"
        }else{
            alert("please check your username and password")
        }
    }catch(e){
        console.log(e)
    }
}
  
  return (
    <div className="signup-container">
      <form onSubmit={login} className="form-container">
      <h1 className="heading">Signup</h1>
        <label htmlFor="email">Name</label>
        <input id="email" type="email" onChange={(e)=>setEmail(e.target.value)} value= {email}/>
        <label htmlFor="password">Name</label>
        <input id="password" type="password" onChange={(e)=>setPassword(e.target.value)} value= {password}/>
        <button type="submit">Login</button>
        <Link to="/ForgetPassword">ForgetPassword</Link>
        <p>don't have account <Link to="/signup">Signup</Link></p>

      </form>
    </div>
  );
}

export default Login;
