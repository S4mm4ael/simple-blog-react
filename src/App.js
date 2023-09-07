import React from 'react';
import './styles/App.css'
import PostList from './components/PostList/PostList';
import PostForm from './components/PostForm/PostForm';

function App() {

  const posts = [
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
  ];
  return (
    <div className="App">
      <PostForm></PostForm>
      <PostList posts={posts} />
    </div >
  );
}

export default App;
