import { useState } from "react";
import ButtonRegular from "../UI/ButtonRegular/ButtonRegular";
import InputRegular from "../UI/InputRegular/InputRegular";
import styles from "./styles.module.css";

function PostForm({ setNewPost, posts, setModal }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if ((title, body)) {
      const newPost = {
        id: (Date.now() + Math.random()).toString().slice(-6),
        title: title,
        body: body,
      };
      setNewPost([...posts, newPost]);
      setTitle("");
      setBody("");
      setModal(false);
    }
  }

  return (
    <div className={styles.PostForm}>
      <h3>Create post</h3>
      <form className={styles.PostForm__form} onSubmit={(e) => handleSubmit(e)}>
        <InputRegular
          placeholder="Post title"
          value={title}
          onChange={setTitle}
        />
        <InputRegular placeholder="Post body" value={body} onChange={setBody} />
        <ButtonRegular type="add">Add new post</ButtonRegular>
      </form>
    </div>
  );
}

export default PostForm;
