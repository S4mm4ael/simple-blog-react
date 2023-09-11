import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Post } from "../Post/Post";
import styles from "./styles.module.css";

function PostList({ posts, removePost, ...props }) {
  function renderPosts() {
    return posts.map((post, index) => (
      <CSSTransition key={post.id} timeout={500} classNames="post">
        <Post removePost={removePost} post={post} number={index + 1} />
      </CSSTransition>
    ));
  }
  return (
    <div className={styles.PostList}>
      <h1>Post list</h1>
      <TransitionGroup className={styles.PostList__wrapper}>
        {renderPosts()}
      </TransitionGroup>

      {posts.length === 0 && (
        <p className={styles.PostList__msg}>There is no searched posts...</p>
      )}
    </div>
  );
}

export default PostList;
