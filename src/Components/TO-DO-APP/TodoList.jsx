import React,{ useState } from "react";   
import './TodoList.css'  
import {v4 as uuidv4} from "uuid";
uuidv4 ();

function TodoAppear() {
    const [todos,setTodos] = useState ([]);  

    const addTodo = todo =>{ 
        setTodos ([...todos,{id:uuidv4(), task:todo, completed: false, isEditing: false}]) 
        console.log(todo)
    }
}


function TodoList({addTask}) {  
    const [value, setValue] =useState("")
  
    const handleSubmit = e => { 
        e.preventDefault (); 

        addTodo(value);

        setValue("")
    }
   
  

    return (
        <>  
        <form  className="Todo Form" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value}
             placeholder="What is the task today?"
            onChange={(e)=>setValue(e.target.value)} /> 
            <button  type="submit" className="todo-btn">ADDTASK</button>
        </form>
       








        </>
    )
}
export default TodoList


