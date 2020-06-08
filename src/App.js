import React, {useState} from 'react'
import './App.css'

function App() {
  const [Todos, SetToDo] = useState([
    {Text: 'Task 1'},
    {Text: 'Task 2'},
    {Text: 'Task 3'}]
  )

const ToDo = ({Todo, index}) => {
return <div className='to-do'>
        {Todo.Text}
      </div>
}
  return (
    <div>
     <div className='list' > {Todos.map((Todo, index) => <ToDo key={index} index={index} Todo={Todo}/>)}</div>

    </div>
  )

}

export default App