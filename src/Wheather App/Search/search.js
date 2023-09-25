import React, { useState } from "react"; 
import {AsyncPaginate} from "react-select-async-paginate" 
import { GEO_API_URL,geoApiOptions  } from "./api";  

//9eb7172570a70f36936c4a24432fe4ca  API Key

// /cities?minPopulation=1000000&namePrefix=${inputValue}


const Search = ({onSearchChange}) => {  
    const [search,setSearch] =useState(null);  

const loadOptions =(inputValue) => {  
    fetch (
        '${GEO_API_URL}',geoApiOptions
        ) 
.then (response => response.json) 
.then ( (response)  => { 


}



) 
.catch(err => console.error(err));

   
    }
    const handleOnchange = (searchData) => { 
        setSearch(searchData); 
        onSearchChange(searchData);
    }
    return (
        <AsyncPaginate
        placeholder ="Search For City"  
        debounceTimeout ={600} 
        value = {search} 
        onChange={handleOnchange} 
        loadOptions={loadOptions}
        />
        
        
        
        );  
    
}
export default Search;