import styles from "./styles.module.css";

function ButtonRegular(props) {
  return <button className={styles.ButtonRegular}>{props.text}</button>;
}

export default ButtonRegular;
