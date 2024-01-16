import { useState } from 'react';
import './App.css';
import TODO_INPUTS from './todo_inputs';
import TODO_LIST from './todo_list'

function App() {
  /*The line const [todos, setTodos] = useState([]) is using
   the useState hook in React to declare a state variable named todos 
  and its corresponding updater function named setTodos*/
  const [todos,setTodos] = useState([])
  
  const addTodo = (newTodo) => {
    /*
The line setTodos([...todos, newTodo]) is using the 
spread operator (...) to create a new array that includes 
all the elements from  the existing todos array and appends 
the newTodo at the end*/
    setTodos([...todos,newTodo])
  }

  const editTodo = (index, complete) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = complete;
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDO App</h1>
        <div className="ToDoInput">
            <TODO_INPUTS addTodo={addTodo}></TODO_INPUTS>
        </div>
        <TODO_LIST editTodo={editTodo} todos={todos}></TODO_LIST>
      </header>
    </div>
  );
}

export default App;
