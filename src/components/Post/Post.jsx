import React from "react";
import styles from "./styles.module.css";
import ButtonRegular from "../UI/ButtonRegular/ButtonRegular";

export function Post(props) {
  return (
    <div className={styles.Post}>
      <div className={styles.Post__wrapper}>
        <h3 className={styles.Post__header}>
          {props.post.title} - {props.post.id}
        </h3>
        <p className={styles.Post__body}>{props.post.body}</p>
      </div>
      <ButtonRegular>Delete</ButtonRegular>
    </div>
  );
}
