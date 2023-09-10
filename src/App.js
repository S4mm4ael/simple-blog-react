import React from 'react';
import './styles/App.css'
import { useState, useMemo } from "react";

import PostList from './components/PostList/PostList';
import PostForm from './components/PostForm/PostForm';
import PostFilter from './components/PostFilter/PostFilter';

function App() {
  const [posts, setPosts] = useState([
    {
      id: Date.now() + Math.random(),
      title: "Title 4",
      body: "aaaaaaaaaaaaaaaa ffffffffffffffff",
    },
    {
      id: Date.now() + Math.random(),
      title: "Title 2",
      body: "ffffffffffffffff sssssssss",
    },
    {
      id: Date.now() + Math.random(),
      title: "Title 3",
      body: "ffffffffffffffff wwwwwwwwwwwwS",
    },
  ]);
  const [filter, setFilter] = useState({
    sort: '',
    query: ''
  })

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }

    return posts
  }, [filter.sort, posts])

  const searhedSortedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
      <div className='App__wrapper_top'>
        <PostForm setNewPost={setPosts} posts={posts} />
        <PostFilter filter={filter} setFilter={setFilter} />
      </div>
      <PostList posts={searhedSortedPosts} removePost={removePost} />
    </div >
  );
}

export default App;
