import styles from "./styles.module.css";

function ModalRegular({ children, visible, setVisible }) {
  const classes = [styles.ModalRegular];
  if (visible) {
    classes.push(styles.ModalRegular_active);
  }

  return <div className={classes.join(" ")}>{children}</div>;
}

export default ModalRegular;
