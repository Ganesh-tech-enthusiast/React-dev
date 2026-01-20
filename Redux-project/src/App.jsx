import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from './features/todoSlice';
import Task from './components/task';

export default function App() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch()

  const submitHandler = (e) => {
     e.preventDefault()
     dispatch(addTodo(input))
     setInput("")
  }

  return (
    <>
      <div>
      <form
        onSubmit={submitHandler}
        className="flex gap-3 w-full max-w-md mx-auto mt-6"
      >
        <input
          type="text"
          placeholder="Enter your task..."
          value={input}
          required
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Add Task
        </button>
      </form>
      <Task/>
      </div>
    </>
  )
}
