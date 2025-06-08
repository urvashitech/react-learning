import { createSlice } from '@reduxjs/toolkit'; 

const initialState = {
    todos : [{id: 1 , text : " Hello There mate"}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers : 
})