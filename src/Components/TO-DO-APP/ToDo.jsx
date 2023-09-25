import React,{ useState } from 'react'
//import './To-Do-App.css'  
const TodoList = () => {
    const [inputTask, setInputTask] = useState('');
    const [list, setList] = useState([]);

    const handleAddTodo = () => {
        const newTask = {
            id: Math.random(),
            todo: inputTask
        };

       setList([...list, newTask]);
        setInputTask('');
    };

   const handleDeleteTodo = (id) => {
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList);
    };

   const handleInputChange = (event) => {
        setInputTask(event.target.value);
    };


    return( 
        <div className='Container'>
            <div className="Todo">
                <h1 className=''> To-DO List</h1>  
                <div className="top">
                    <input type="text" className='input' value={inputTask} onChange={handleInputChange} placeholder="Enter a task"/>
                <button className="btn">ADD</button>
                </div>  
                <ul>
{ list.map((todo) => (
   <li className="task" key={todo.id}>
        {todo.todo}
        <button onClick={() => handleAddTodo(todo.id)}>Delete</button>
    </li>
))}
</ul>

                
            
            </div>


        </div>







    )




} 
export default TodoList