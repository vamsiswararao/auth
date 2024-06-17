import { useEffect } from "react"
import Cookies from 'js-cookie'
// import jwt from "jsonwebtoken"
import { useNavigate } from "react-router-dom"


const dashboard =async(token)=>{
    const req =await fetch("http://localhost:1337/api/dashboard",{
        method: 'GET',
        headers:{"x-access-token":token,},
    })
    const data = req.json()
    console.log(data)
    }

    const Dashboard =()=>{
    const navigate = useNavigate()
    useEffect(()=>{
        const token = Cookies.get('jwt_token')
        if(!token){
            localStorage.removeItem("token")
            navigate("/login")
        }else{
            dashboard(token)
        }
    })

    const OnchangeLogout=()=>{
        const token = Cookies.get('jwt_token')
            localStorage.removeItem(token)
            navigate("/login")
    }


    
    return(
    <>
        <h1>Hello World!</h1>
        <button onClick={OnchangeLogout}>Logout</button>
    </>
    )

}

export default Dashboard