import {useState} from "react"
import { useParams } from "react-router-dom"
const Resetpassword=()=>{
    const [password, setPassword]=useState("")
    const {token} =useParams()
    const resetPassword=async(event)=>{
        event.preventDefault();
    try{
        const response = await fetch("http://localhost:1337/api/reset-password/"+token,{
            method: 'POST',
            headers:{"Content-Type":"application/json",},
            body: JSON.stringify({password}),
        })
        const data = await response.json()
        console.log(response.data)
        console.log(data)
        if(data.status){
            alert(data.message)
        }else{
            alert(data.message)
        }
    }catch(e){
        console.log(e)
    }
    }

    return(
    <div className="signup-container">
        <form onSubmit={resetPassword} className="form-container">
            <h1 className="heading">Reset password</h1>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value= {password}/>
            <button type="submit">Reset</button>
        </form>
    </div>
    )
}

export default Resetpassword