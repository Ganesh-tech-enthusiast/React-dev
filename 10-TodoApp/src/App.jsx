import { useState,useEffect } from "react";
import { ToDoProvider } from "./context"
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";


function App() {
  
const [todos, setTodo] = useState(()=>{
  const stored = localStorage.getItem("item");
  return stored ? JSON.parse(stored) : [];
});

 //above state checks for the locally stored todos if exists returns  array of todos itmes , if not then return empty array

const addTodo = (todo) =>{
  setTodo((prev)=> [{id:Date.now() , ...todo}, ...prev ])
}

const updateTodo = (currentid, todo) => {
  setTodo((prev) => prev.map((existingtodo) => (existingtodo.id === currentid ? todo : existingtodo)))
}

const deleteTodo = (currentid) => {
  setTodo((prev) => prev.filter((existingtodo)=> existingtodo.id !== currentid ))
}

const toggleComplete = (id) => {
  setTodo((prev) => prev.map((exid) => (exid.id === id ? {...exid, completed: ! exid.completed}: exid)))
}

// Write to localStorage (run only when todos change)

useEffect(() => {
  localStorage.setItem("item", JSON.stringify(todos));
}, [todos]);

  return (
    <>
       <ToDoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-gradient-to-r from-[#9733EE] to-[#DA22FF] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your To Do list and stay productive</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {
                          todos.map((item)=> (
                            <div className="w-full" key={ item.id}>
                              <TodoItem  todo={item}/>
                            </div>
                          ))
                        }
                    </div>
                </div>
            </div>
      </ToDoProvider>
    </>
  )
}

export default App
