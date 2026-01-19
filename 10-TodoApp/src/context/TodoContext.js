import { useContext, createContext} from "react";

const ToDoContext = createContext({
    todos:[
        {
        id : Number,
        todo : String,
        completed : Boolean
        }
    ],
    addTodo : (todo) =>{},
    updateTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
});

export const useTodo = () =>{
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider

