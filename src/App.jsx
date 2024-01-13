import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import axios from 'axios';
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  // axios.get('https://localhost:5000/todos')
  // .then(async function(res){
  //   const json = await res.json();
  //   setTodos(json.todos);
  // })
  
  // fetch("https://localhost:5000/todos")
  // .then(async function(res){
  //   const json = await res.json();
  //   setTodos(json.todos);
  // })

  return (
    <div>
      <h1>MY TODOs</h1>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
