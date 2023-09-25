//import './To-Do-App.css' 
import { useState } from "react"
function ToDoList () { 
 const [newItem,setNewItem]= useState("")  
 const [todos,setTodos] = useState([])
 function handleSubmit(e){ 
    e.preventDefault() 
    setTodos ((currentTodos)=> {
    return [
        ...currentTodos

    ]
   
    ([
        {id:Crypto.randomUUID(), title:newItem, completed: false},
    ]) 
} ) 
 } 
 setNewItem("")

return(  
    <>
<form action="" className="form-item" onSubmit={handleSubmit}>
<div className="form-row"> 
<label htmlFor="Item"> New Item</label>  <br />
<input type="text" id='item'  value={newItem} onChange={e => setNewItem(e.target.value)}/>
</div>  
<button className="btn">Add</button> 
</form>  
<h1 className="header">ToDo List</h1>  
<ul className="list">  
{todos.map(todos => { 
    return <li key={todos.id}>
    <label htmlFor="">
        <input type="checkbox" /> 
        Item 1
    </label> 
    <button className="btn-delete"> Delete </button>  <br />
    <label htmlFor="">
        <input type="checkbox" checked ={todos.completed} /> 
        Item 2
    </label> 
    <button className="btn-delete"> Delete </button>
</li>
})}

</ul>


</>
)



} 
export default ToDoList