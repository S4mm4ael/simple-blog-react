import React from 'react';
import './styles/App.css'
import { useState } from "react";

import PostList from './components/PostList/PostList';
import PostForm from './components/PostForm/PostForm';
import SelectRegular from './components/UI/SelectRegular/SelectRegular'

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
  const [sortOptions, setSortOptions] = useState([
    { value: 'title', name: 'By title' }, { value: 'body', name: 'By description' }]);

  const [selectedSort, setSelectedSort] = useState('');

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  const handleSortChange = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }
  return (
    <div className="App">
      <div className='App__wrapper_top'>
        <PostForm setNewPost={setPosts} posts={posts} />
        <SelectRegular sortOptions={sortOptions} value={selectedSort} onChange={handleSortChange} />
      </div>

      <PostList posts={posts} removePost={removePost} />
    </div >
  );
}

export default App;
