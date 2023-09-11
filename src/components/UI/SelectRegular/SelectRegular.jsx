import styles from "./styles.module.css";

function SelectRegular({ sortOptions, value, onChange }) {
  return (
    <select
      value={value}
      className={styles.SelectRegular}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="" default={true} disabled={true} key="default">
        Sort by
      </option>
      {sortOptions.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default SelectRegular;
