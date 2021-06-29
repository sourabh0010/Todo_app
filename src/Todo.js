import React, { useState ,useCallback} from 'react'
import uuid from 'react-uuid'

import './styles/Style.scss'
import DisplayTodo from "./components/DisplayTodo"

function App() {

  const [todoValue, setTodoValue] = useState();
  const [allTodos, setAllTodos] = useState([])
  const [update, setUpdate] = useState(false);
  const [updateTodoId, setUpdateTodoId] = useState('');
  const [error,setError]=useState('')

  const addTodo = () => {
    if(!todoValue){
      setError('please input some data');
      return;
    }
    let newTodo = {
      data: todoValue,
      id: uuid()
    }
    setAllTodos((prev) => [newTodo,...prev])
    setTodoValue('')
    setError('')
  }

  const deleteTodo =useCallback((id) => ()=>{
    let newTododList = allTodos.filter((todo) => todo.id != id);
    setAllTodos(newTododList)
  },[])

  const updateTodo = (value) => {
    setTodoValue(value.data)
    setUpdate(true)
    setUpdateTodoId(value.id)
  }

  const applyUpdate = () => {
    setUpdate(false)
    const updatedValue = allTodos.map((todo) => {
      if (todo.id == updateTodoId) {
        return { ...todo, data: todoValue }
      }
      return todo
    })
    setUpdateTodoId('');
    setTodoValue('')
    setAllTodos(updatedValue)

  }

  return (
    <div className="App">
      <h2>Todos Manager</h2>
      <input  className="input_field" value={todoValue} onChange={(e) => setTodoValue(e.target.value)} />
      <span>
        {update ? <button  onClick={applyUpdate}>Update</button> : <button onClick={addTodo}>Add</button>
        }
      </span>
      <p>{error}</p>
      <DisplayTodo data={allTodos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
}


export default App;
