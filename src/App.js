import React, { useEffect } from 'react';
import './styles/App.css'
import { useState } from "react";

import PostList from './components/PostList/PostList';
import PostForm from './components/PostForm/PostForm';

function App() {
  const [posts, setPosts] = useState([
    {
      id: Date.now() + Math.random(),
      title: "Title 1",
      body: "aaaaaaaaaaaaaaaa ffffffffffffffff",
    },
    {
      id: Date.now() + Math.random(),
      title: "Title 2",
      body: "aaaaaaaaaaaaaaaa ffffffffffffffff",
    },
    {
      id: Date.now() + Math.random(),
      title: "Title 3",
      body: "aaaaaaaaaaaaaaaa ffffffffffffffff",
    },
  ]);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm setNewPost={setPosts} posts={posts}></PostForm>
      <PostList posts={posts} removePost={removePost} />
    </div >
  );
}

export default App;
