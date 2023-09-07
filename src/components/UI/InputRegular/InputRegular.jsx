import styles from "./styles.module.css";

function InputRegular(props) {
  return (
    <input
      className={styles.InputRegular}
      type="text"
      name=""
      id=""
      placeholder={props.placeholder}
    />
  );
}

export default InputRegular;
