import { useState } from "react";
import { Post } from "../Post/Post";
import styles from "./styles.module.css";

function PostList(props) {
  const [posts, setPosts] = useState(props.posts);

  function renderPosts() {
    return posts.map((post) => <Post post={post} key={post.title} />);
  }
  return (
    <div className={styles.PostList}>
      <h1>Post list</h1>
      {renderPosts()}
    </div>
  );
}

export default PostList;
