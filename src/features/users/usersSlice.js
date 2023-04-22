import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: "1", name: "Samson"},
    {id: "2", name: "Lemma"},
    {id: "3", name: "Saba"},
    {id: "4", name: "Dave"}
]

const userSlice = createSlice({
    name: "users",
    initialState, 
    reducers: {

    }
})

export const selectAllUsers = (state)=>state.userSlice
export default userSlice.reducer