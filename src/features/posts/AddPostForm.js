import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from './postSlice'
import { selectAllUsers } from '../users/usersSlice'

const AddPostForm = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [userId, setUserId] =  useState("")

    const users = useSelector(selectAllUsers)
   
    const dispatch = useDispatch()
    const savePost = ()=>{
        if(title && content){
            dispatch(
                postAdded({
                id: nanoid(),
                title,
                content,
                userId
                })
            )
            setTitle("")
            setContent("")
        }
    }

    const userOptions = users.map((user)=>(
        <section key = {user.id}>
            {user.name}
        </section>
    ))
  return (
    <section>
        <h1>Add a new post</h1>
        <form>
            <label htmlFor='postTitle'>
                Post Title:
            </label>
            <input 
            type = "text"
            id = "postTitle"
            name = "postTitle"
            value = {title}
            onChange = {(e)=>setTitle(e.target.value)}/>
            <label htmlFor='postAuthor'>Author:</label>
            <select id = "postAuthor" value = {userId}
            onChange = {(e)=>setUserId(e.target.value)}>
                {userOptions}
            </select>
            <label htmlFor='postContent'>
                Post Content
            </label>
            <textarea
            id = "postContent"
            name = "postContent"
            value = {content}
            onChange = {(e)=>setContent(e.target.value)}/>
            <button type = "button" onClick={savePost}>Save Post</button>
        </form>
    </section>
  )
}

export default AddPostForm