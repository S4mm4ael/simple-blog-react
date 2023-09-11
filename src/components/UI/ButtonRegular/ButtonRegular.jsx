import styles from "./styles.module.css";

function ButtonRegular({ children, remove, type, onClick }) {
  if (type === "create") {
    return (
      <button
        onClick={onClick}
        className={[styles.ButtonRegular, styles.ButtonRegular_create].join(
          " "
        )}
      >
        {children}
      </button>
    );
  }
  if (type === "add") {
    return (
      <button
        className={[styles.ButtonRegular, styles.ButtonRegular_add].join(" ")}
      >
        {children}
      </button>
    );
  }
  return (
    <button onClick={onClick} className={styles.ButtonRegular}>
      {children}
    </button>
  );
}

export default ButtonRegular;
