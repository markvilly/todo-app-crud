import { useState } from 'react'
import './App.css'

// todo1: capture user input through a form inputs.
// todo2: display the user input.
// todo3: enable delete feature.
// todo4: enable update edit feature.

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] =  useState<string[]>([])
  
  function addTask(){
    const tasksClone: string[] = [...tasks]

    tasksClone.push(task)
    setTasks([...tasksClone])
    setTask('')
  }

  return (
    <div className='flex justify-center w-1/2 m-auto'>
      <div className=" flex-col rounded-3xl p-3 justify-center w-3/5 bg-amber-100 ">
        <h1 className=' text-2xl p-3'>Todo List App</h1>
     <div className="flex justify-center pb-6">
     <input type="text"
          className=' bg-amber-50 p-1 mr-2 rounded'
          value={task}
          placeholder='Enter your task'
          onChange={(e)=>{setTask(e.target.value)}}
         />
      <button className=' bg-amber-600 p-2 rounded text-amber-50' onClick={addTask}>Add Task</button>
     </div>

      <ul>
        {tasks.map(t=>(
          <div className='flex  justify-between border-b-1 border-amber-400'>
            <li className=' flex pl-5' key={t}>{t}</li>
            <button>🚮</button>
          </div>
        ))}
      </ul>


      </div>
    </div>
  )
}

export default App
