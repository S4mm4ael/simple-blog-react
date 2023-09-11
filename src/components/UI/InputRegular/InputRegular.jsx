import styles from "./styles.module.css";

function InputRegular(props) {
  return (
    <input
      className={styles.InputRegular}
      type="text"
      name={props.placeholder}
      id=""
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
}

export default InputRegular;
