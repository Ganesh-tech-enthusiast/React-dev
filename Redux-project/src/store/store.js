import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todoSlice'

export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})

// now the store contains :
// state = {
//   todo: {
//     todos: [{ id: 1, text: "hello" }]
//   }
// }
