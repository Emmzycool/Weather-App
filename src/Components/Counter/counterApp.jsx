import { useState } from 'react';
import './counterApp.css';

function CounterApp () { 
    
  const [counter, setCounter] = useState(0);   
  const [initialCount] = useState(0);
  const Reset = () =>{  
   setCounter(initialCount); 
   return alert("Counter Has been Reset to Zero")
  } ;
    
  return( 
    <div className="contain">  
     <p>{counter}</p> 
    <button onClick={()=> setCounter(counter +100)} id='increase'>Increase</button>
    <button onClick={()=> setCounter(counter -100)} disabled={(counter === 0)} id='decrease'>Decrease</button> 
    <button onClick={Reset} id='reset'>Reset</button> 
 
    
    

    </div>

  ) 

 
}

export default CounterApp