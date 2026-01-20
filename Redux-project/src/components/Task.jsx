import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todoSlice.js";

export default function Task() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  return (
    <div className="max-w-md mx-auto mt-8 flex flex-col gap-4">
      
      <h1 className="text-xl font-semibold text-center text-gray-800">
        Your Tasks
      </h1>

      {todos.length === 0 && (
        <p className="text-center text-gray-500">
          No tasks added yet
        </p>
      )}

      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between bg-pink-400 text-black  px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <span className="text-lg md:text-base">
            {todo.text}
          </span>

          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="text-red-400 hover:text-red-500 font-medium transition border-none bg-white rounded px-2 py-1"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
