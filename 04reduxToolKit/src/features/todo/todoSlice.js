import { createSlice, nanoid } from '@reduxjs/toolkit'; 

const initialState = {
    todos : [{id: 1 , text : " Hello There mate"}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addToDo : (state,action)=>{
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)

        },
        removeToDo : (state,action)=>{
            state.todos = state.todos.filter((todo) => todo.id != action.payload.id)

        },
        updateToDo : (state,action)=>{
            const {id,text} = action.payload
            const updateToDo = state.todos.find((todo)=>{todo.id === id})
            if (updateToDo) {
                updateToDo.text = text 
            }

        }

    } 
})
export const {addToDo,removeToDo,updateToDo} = todoSlice.actions
export default todoSlice.reducer