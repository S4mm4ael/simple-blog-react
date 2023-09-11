import styles from "./styles.module.css";

function ModalRegular({ children, visible, setVisible }) {
  const classes = [styles.ModalRegular];
  if (visible) {
    classes.push(styles.ModalRegular_active);
  }

  return (
    <div className={classes.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={styles.ModalRegular__content}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default ModalRegular;
