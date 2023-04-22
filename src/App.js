import React from "react"
import Posts from "./features/posts/Posts"
import AddPostForm from "./features/posts/AddPostForm";
import './index.css';


function App() {
  return (
    <main>
    <AddPostForm/>
    <Posts/>
    </main>
  );
}

export default App;
