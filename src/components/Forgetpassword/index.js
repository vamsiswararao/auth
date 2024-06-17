import {useState} from "react"
import { Link } from "react-router-dom";
const ForgetPassword=()=>{
    const [email, setEmail]=useState("")
    const forgetPassword=async(event)=>{
        event.preventDefault();
    try{
        const response = await fetch("http://localhost:1337/api/forget-password",{
            method: 'POST',
            headers:{"Content-Type":"application/json",},
            body: JSON.stringify({email}),
        })
        const data = await response.json()
        if(data.status){
            alert("check your email address")
        }else{
            alert(data.message)
        }
    }catch(e){
        console.log(e)
    }
    }

    return(
    <div className="signup-container">
        <form onSubmit={forgetPassword} className="form-container">
            <h1 className="heading">Forget password</h1>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value= {email}/>
            <input type="submit" value="Button" />
            <button type="submit">Enter</button>
            <p>don't have account <Link to="/signup">Signup</Link></p>
            <p>I have account <Link to="/login">Login</Link></p>
        </form>
    </div>
    )
}

export default ForgetPassword