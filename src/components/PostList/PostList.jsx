import { Post } from "../Post/Post";
import styles from "./styles.module.css";

function PostList({ posts, removePost, ...props }) {
  function renderPosts() {
    return posts.map((post) => (
      <Post removePost={removePost} post={post} key={post.id} />
    ));
  }
  return (
    <div className={styles.PostList}>
      <h1>Post list</h1>
      {renderPosts()}
      {posts.length === 0 && (
        <p className={styles.PostList__msg}>There is no posts...</p>
      )}
    </div>
  );
}

export default PostList;
