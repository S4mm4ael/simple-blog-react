import React, { useEffect, useState } from 'react';
import './styles/App.css'

import PostList from './components/PostList/PostList';
import PostForm from './components/PostForm/PostForm';
import PostFilter from './components/PostFilter/PostFilter';
import ModalRegular from './components/UI/ModalRegular/ModalRegular';
import ButtonRegular from './components/UI/ButtonRegular/ButtonRegular';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';


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
  const [modal, setModal] = useState(false)
  const searhedSortedPosts = usePosts(posts, filter.sort, filter.query)

  async function fetchPosts() {
    const posts = await PostService.getData()
    setPosts(posts)
  }

  useEffect(() => {
    fetchPosts()

  }, [])

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
      <ModalRegular visible={modal} setVisible={setModal}><PostForm setNewPost={setPosts} posts={posts} setModal={setModal} /></ModalRegular>
      <div className='App__wrapper_top'>
        <ButtonRegular type='create' onClick={() => setModal(true)}>Create a post</ButtonRegular>
        <PostFilter filter={filter} setFilter={setFilter} />
      </div>
      <PostList posts={searhedSortedPosts} removePost={removePost} />
    </div >
  );
}

export default App;
