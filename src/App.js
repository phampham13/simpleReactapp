import './App.css'
import { useStore, actions } from './store'
import { useRef, useEffect } from 'react'


function App() {

  const iRef = useRef()

  useEffect(() => {
    iRef.current.focus()
  })
  const [state, dispatch] = useStore()
  const { todos, todoInput } = state

  console.log(todoInput)

  const handleAdd = () => {
    if (todoInput) {
      dispatch(actions.addTodo(todoInput))
      dispatch(actions.setInput(""))
    }
    iRef.current.focus()
  }

  return (
    <div style={{ padding: 20 }}>
      <input
        value={todoInput}
        placeholder='Enter todo'
        ref={iRef}
        onChange={e => {
          dispatch(actions.setInput(e.target.value))
        }}
      />
      <button onClick={handleAdd}>Add</button>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </div>
  )
}

export default App