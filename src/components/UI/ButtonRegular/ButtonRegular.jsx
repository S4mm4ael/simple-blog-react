import styles from "./styles.module.css";

function ButtonRegular({ children, ...props }) {
  return <button className={styles.ButtonRegular}>{children}</button>;
}

export default ButtonRegular;
