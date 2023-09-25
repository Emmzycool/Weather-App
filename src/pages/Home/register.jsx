import { useState } from "react"

function Register (){  
    const[email, setEmail] = useState(''); 
    const[password,setPassword] = useState ('');
return( 
    <div className="register"> 
     <div className="form"> 
     <form action="">
       <label htmlFor="Email"> Username</label> 
       <input type="email"onChange={(e)=> setEmail(e.target.value)} />   
       
       <label htmlFor="password"></label>
    <input type="password" onChange={(e)=> setPassword(e.target.value)}/>
     </form> 
     email:{email} <br />
     password:{password}

     </div>
    </div>  
    


)
} 
export default Register