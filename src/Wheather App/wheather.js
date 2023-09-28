import axios from 'axios'
import React, { useState } from 'react'  
import './wheather.css' 


function Wheather (){  
    const[data,setData] = useState({ 
        celcius:10, 
        image: '/images/cloudreal.jpg',
        name:'London', 
        humidity:10, 
        speed:2 
        

    })   
    const [name,setName] = useState(''); 
//https://api.openweathermap.org/data/2.5/weather?q= ${name}&appid=9eb7172570a70f36936c4a24432fe4ca&&units=metrics
   
    const handleClick = () => { 
        if (name !== ""){  
            const apiUrl=(`https://api.openweathermap.org/data/2.5/weather?q= ${name}&appid=9eb7172570a70f36936c4a24432fe4ca&&units=metrics
            `);
            axios.get(apiUrl)
            .then (res => {  
                let imagePath =''; 
                if (res.data.weather[0].main === "Clouds"){ 
                    imagePath ="/images/cloudreal.jpg"  
                    alert ("It is Cloudy. Ensure to get a jacket!")
                } 
                else if(res.data.weather[0].main ==="Clear"){ 
                    imagePath ="/images/clouds.jpg"
                }
                else if (res.data.weather[0].main ==="Drizzle"){ 
                    imagePath ="/images/drizzlle.png"
                }
                else if (res.data.weather[0].main === "Mist") {
                    imagePath="/images/mist.png"
                } 
                else{ 
                    imagePath ="/images/Clouds.png"
                }  
                console.log(res.data);

                setData ({...data,celcius:res.data.main.temp,name:res.data.name,
                    humidity:res.data.main.humidity,
                    speed:res.data.wind.speed, image:imagePath})
            }
            
            ) 
            .catch(err => console.log(err));

        }
    } 
    
    return ( 
        <>
    <div className='container'> 
    <div className='wheather'> 
    <div className='search'>  
    <input type="text" placeholder='Enter City Name'  onChange={e =>setName(e.target.value)}/> 
    <button> <img  src="/images/search.png" alt='' onClick={handleClick}/></button>
    
    </div> 
    <div className='winfo'> 
    <img src={data.image}alt=""/>
        <h1>{ Math.round (data.celcius)}°c</h1> 
        <h2>{data.name}</h2> 
        <div className='details'>  
        <div className='col'>
        <img src='/images/humidity.png'alt=""/>
          <div className='humidty'>
        <p>{ Math.round (data.humidity)}%</p> 
        <p>Humidity</p> 
        </div>
        </div> 
        <div className='col'> 
        <img src='/images/wind.png' alt="" />
        <div className='wind'>
        <p>{ Math.round (data.speed)} Km/h</p> 
        <p>wind</p> 
        </div>
        </div>
        </div>
    </div>
    </div>
    
    
    
    
    
    
    </div>
        
        
        </>
    )
} 
export default Wheather