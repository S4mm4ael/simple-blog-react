import React from 'react';
import './styles/App.css'
import { useState, useMemo } from "react";

import PostList from './components/PostList/PostList';
import PostForm from './components/PostForm/PostForm';
import SelectRegular from './components/UI/SelectRegular/SelectRegular'
import InputRegular from './components/UI/InputRegular/InputRegular';

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
  const [searchQuery, setSearchQuery] = useState('');
  const sortedPosts = useMemo(() => {
    console.log(0)
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }

    return posts
  }, [selectedSort, posts])

  const searhedSortedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sortedPosts])

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const handleSortChange = (sort) => {
    setSelectedSort(sort)
  }



  return (
    <div className="App">
      <div className='App__wrapper_top'>
        <PostForm setNewPost={setPosts} posts={posts} />
        <InputRegular value={searchQuery} setValue={setSearchQuery} placeholder="Search..." />
        <SelectRegular sortOptions={sortOptions} value={selectedSort} onChange={handleSortChange} />
      </div>

      <PostList posts={searhedSortedPosts} removePost={removePost} />
    </div >
  );
}

export default App;
