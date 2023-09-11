import styles from "./styles.module.css";

function SearchBar(props) {
  return (
    <input
      className={styles.SearchBar}
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

export default SearchBar;
