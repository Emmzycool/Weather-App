import React from "react";   
import { Link } from "react-router-dom";



function Login() { 
    const navigate = useNavigate () 

 nagivate('/Layout')
    return (
<> 
<div className="login">
    <form action="" className="login-data">
        <label htmlFor="Username">Username</label> 
        <input type="email" name="" id="" placeholder="Username@meta.com" /> <br /> 
        <label htmlFor="">Password</label> 
        <input type="password" name="" id=""placeholder="Password" />  <br /> 
        <h2> 
            <Link > <input type="submit" value="Login"  /></Link>
       
        </h2>
        </form>

</div>




</>



    )
} 
export default Login