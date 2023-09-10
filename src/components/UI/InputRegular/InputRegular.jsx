import styles from "./styles.module.css";

function InputRegular(props) {
  return (
    <input
      className={styles.InputRegular}
      type="text"
      name=""
      id=""
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) =>
        props.setValue({ ...props.value, query: e.target.value })
      }
    />
  );
}

export default InputRegular;
