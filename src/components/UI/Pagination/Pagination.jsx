import styles from "./styles.module.css";

function Pagination({ pagesArray, setPage, page }) {
  return (
    <div className={styles.Pagination}>
      {pagesArray.map((p) => (
        <button
          key={p}
          className={`${styles.Pagination__btn} ${
            p === page ? "btn_active" : ""
          }`}
          onClick={() => setPage(p)}
        >
          {p}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
