import {useState} from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import './index.css';


function Signup() {
const [name, setName]=useState("")
const [email, setEmail]=useState("")
const [password, setPassword]=useState("")
const navigate= useNavigate()

const signup =async(event)=>{
  event.preventDefault();
  try{
  const response = await fetch("http://localhost:1337/api/signup",{
    method: 'POST',
    headers:{"Content-Type":"application/json",},
    body: JSON.stringify({name,email,password}),
  })
  const data = await response.json()
  if(data.status==="ok"){
      navigate("/login")
  }
}catch(e){
  console.log(e)
}
}

  return (
    <div className="signup-container">
      <form onSubmit={signup} className="form-container">
        <h1 className="heading">Signup</h1>
        <label htmlFor="name" >Name</label>
        <input  id="name" type="text" placeholder="Enter The name" onChange={(e)=>setName(e.target.value)} value= {name}/>
        <label htmlFor="email">email</label>
        <input id="email" type="email" placeholder="Enter the Email" onChange={(e)=>setEmail(e.target.value)} value= {email}/>
        <label htmlFor="password">password</label>
        <input id="password" type="password" placeholder="Enter the password" onChange={(e)=>setPassword(e.target.value)} value= {password}/>
        <button type="submit">Signup</button>
        <p>I have account <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}

export default Signup;
