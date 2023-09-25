import React from "react"; 
import './multipage.css'
import { Outlet, Link, useNavigate} from "react-router-dom";
import AboutPage from "./AboutPage";

function Layout () { 
 
    return ( 
<> 

<header className="nav"> 
<ul className="navbar">
  <li id="navlist">
     <Link to="/">HOME</Link>
     </li> 
  <li id="navlist" > 
  <Link to="BlogPage">SERVICE</Link>
  </li> 
  <li id="navlist">
    <Link to="BlogPage"> Features</Link> 
 </li>
  <li id="navlist"> 
  <Link to="NotFoundPage">Contact</Link>
    </li>
  <li id="navlist" to="AboutPage"> 
  <Link to="NotFoundPage">AboutPage</Link>
    </li>
  <li id="navlist"> 
  <Link to="NotFoundPage">BlogPage</Link>
    </li> 
  <li id="navlist">
  <Link to="NotFoundPage">SignUp</Link>
    </li> 
  <li id="navlist"> 
  <Link to="LoginPage">Login</Link>
    </li>
</ul> 
<Outlet />

</header>

    
 
<footer>   
  <div className="footer"> 
  <p> Meta-tech @ 2023</p>
  </div> 
</footer>



</>

    )
} 
export default Layout