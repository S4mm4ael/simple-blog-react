import { Post } from "../Post/Post";
import styles from "./styles.module.css";

function PostList() {
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
