import { useState } from 'react'
import './App.css'

// todo1: capture user input through a form inputs.
// todo2: display the user input.
// todo3: enable delete feature.
// todo4: enable update edit feature.

function App() {
  const [task, setTask] = useState('')
  return (
    <div className='flex justify-center w-1/2 m-auto'>
      <div className=" flex-col gap-3 rounded-3xl p-3 justify-center w-2/5 bg-amber-100 ">
        <h1 className=' text-2xl'>Todo List App</h1>
     <input type="text"
          value={task}
          placeholder='Enter your task'
          onChange={(e)=>{setTask(e.target.value)}}
         />

         

      </div>
    </div>
  )
}

export default App
