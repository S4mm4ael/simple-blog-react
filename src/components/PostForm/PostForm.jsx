import ButtonRegular from "../UI/ButtonRegular/ButtonRegular";
import InputRegular from "../UI/InputRegular/InputRegular";
import styles from "./styles.module.css";

function PostForm() {
  return (
    <div className={styles.PostForm}>
      <h3>Create post</h3>
      <form className={styles.PostForm__form}>
        <InputRegular placeholder="Post title" />
        <InputRegular placeholder="Post body" />
        <ButtonRegular>Add new post</ButtonRegular>
      </form>
    </div>
  );
}

export default PostForm;
