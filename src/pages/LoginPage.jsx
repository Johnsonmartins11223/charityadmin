import { useState } from "react"
import { account } from '../config'
import '../pages/LoginPage.css'
import Tables from "./Tables"
import { colors } from "@mui/material"


const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    
    const [login, setLogin] = useState(JSON.parse(localStorage.getItem('isLogin')) || false)
    const handleSubmit = async (e) => {
        e.preventDefault()
         if ( email != ""  && password != "") {
          account.createEmailSession(
            email,
            password
          ).then(response => {
            setEmail("")
            setPassword("")
            setLogin(true)
            localStorage.setItem('isLogin', JSON.stringify(!login));
          }, error => {
            setErrorMsg(error.message)
            // console.log(error);
    
          });
          
        } else if (email === "" && password === "") {
          setErrorMsg("Inputs cannot be empty")
        }
    }
  return (
    <div className="layout">
    {login ? <Tables /> :
    <div className="container">
        <form action="">
          <h2>Modelling Owner account</h2>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Enter your email" onChange={(e) =>{setErrorMsg("");setEmail(e.target.value)}}/>
            <label htmlFor="password" >Password</label>
            <input type="text" placeholder="Enter your password" onChange={(e) => {setErrorMsg("");setPassword(e.target.value)}} />
            <button onClick={handleSubmit}>Log in</button>
            <h3>{errorMsg}</h3>
        </form> 
    </div> }
    </div>
  )
}
export default LoginPage