import React from 'react';
import './styles/App.css'
import { Post } from './components/Post/Post'

function App() {
  const posts = [{
    id: Date.now() + Math.random(),
    title: 'Title 1',
    body: "aaaaaaaaaaaaaaaa ffffffffffffffff"
  },
  {
    id: Date.now() + Math.random(),
    title: 'Title 2',
    body: "aaaaaaaaaaaaaaaa ffffffffffffffff"
  },
  {
    id: Date.now() + Math.random(),
    title: 'Title 3',
    body: "aaaaaaaaaaaaaaaa ffffffffffffffff"
  }]
  function renderPosts() {
    return posts.map((post) => <Post post={post} key={post.title} />)
  }
  return (
    <div className="App">
      {renderPosts()}
    </div >
  );
}

export default App;
