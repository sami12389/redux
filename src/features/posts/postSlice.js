import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: "1", title: "This is awesome", content: "I like redux"},
    {id: "2", title: "This is great", content: "Reduc is easy"},
]

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
       postAdded: (state, action)=>{
        state.push(action.payload)
       }
    }
})

export const selectAllPosts = (state)=>state.posts;

export const {postAdded} = postSlice.actions
export default postSlice.reducer