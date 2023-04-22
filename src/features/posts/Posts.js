import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {selectAllPosts} from "./postSlice"

const Posts = () => {
    const post = useSelector(selectAllPosts)
    const dispatch = useDispatch()
    const renderPost = post.map((item)=>(
        <section key = {item.id}>
            <h1>{item.title}</h1>
            <p>{item.content.substring(0, 100)}</p>
        </section>
    ))
  return (
    <div>
        <h1>Posts</h1>
        {renderPost}
    </div>
  )
}

export default Posts