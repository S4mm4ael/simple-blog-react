import { useState } from "react";
import ButtonRegular from "../UI/ButtonRegular/ButtonRegular";
import InputRegular from "../UI/InputRegular/InputRegular";
import styles from "./styles.module.css";

function PostForm({ setNewPost, posts, ...props }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if ((title, body)) {
      const newPost = {
        id: Date.now() + Math.random(),
        title: title,
        body: body,
      };
      setNewPost([...posts, newPost]);
      setTitle("");
      setBody("");
    }
  }

  return (
    <div className={styles.PostForm}>
      <h3>Create post</h3>
      <form className={styles.PostForm__form} onSubmit={(e) => handleSubmit(e)}>
        <InputRegular
          placeholder="Post title"
          value={title}
          setValue={setTitle}
        />
        <InputRegular placeholder="Post body" value={body} setValue={setBody} />
        <ButtonRegular>Add new post</ButtonRegular>
      </form>
    </div>
  );
}

export default PostForm;
