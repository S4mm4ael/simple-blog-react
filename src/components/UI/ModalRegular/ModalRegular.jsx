import styles from "./styles.module.css";

function ModalRegular({ children }) {
  return (
    <div
      className={[styles.ModalRegular, styles.ModalRegular_active].join(" ")}
    >
      {children}
    </div>
  );
}

export default ModalRegular;
