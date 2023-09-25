import './Loginpage.css';

function Loginpage (props){ 
    
    
    const displayResult = ()=>{  
        alert("A Link has been sent to Your mail")

    }
    return(
        <div className="login"> 
        <div className="main-content">  
        <h1 className="header">My Login Page</h1>
        <form action="login-form">  
        <div className="texthold"> 
        <label htmlFor="">Username:</label> 
        <input type="Email" placeholder="eg Meme@meta.ng" id="type-text" />
        </div> 
        <div className="texthold"> 
        <label htmlFor="Password">Password:</label> 
        <input type='password' placeholder="Your Password" id="type-text"/>
        </div> 
        <div className="submit"> 
        <input type="submit" value="Login"  onClick={displayResult}/> 
        </div> 
        <div className="account"> 
        <a href="./register.jsx">Click here to create an account</a>
        </div>
        
        </form>
        
        </div>
            
        </div>
    )
} 
export default Loginpage