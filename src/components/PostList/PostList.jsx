import { Post } from "../Post/Post";
import styles from "./styles.module.css";

function PostList({ posts, ...props }) {
  function renderPosts() {
    return posts.map((post) => <Post post={post} key={post.id} />);
  }
  return (
    <div className={styles.PostList}>
      <h1>Post list</h1>
      {renderPosts()}
    </div>
  );
}

export default PostList;
