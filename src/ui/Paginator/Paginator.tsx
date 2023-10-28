import styles from './Paginator.module.scss'
import left from "./left-chevron.svg";
import right from "./right-chevron.svg";

interface Props {
  currentPage: number
  totalPages: number
  handlePagination: (page: number) => void
}

export function Paginator({ currentPage, totalPages, handlePagination }: Props) {

  return totalPages > 0 ? (
    <section className={styles.paginator}>
      <button className={styles.arrow} onClick={() => { handlePagination(currentPage - 1) }}>
        <img width={24} src={left} alt="Left button" />
      </button>
      <div className={styles.pages}>
        {Array.from(Array(totalPages).keys()).map((number) => (
          <button key={number}
            className={`${styles.page} ${currentPage === number ? styles.active : ''}`}
            onClick={() => { handlePagination(number) }}
          >
            {number + 1}
          </button>
        ))}
      </div>
      <button className={styles.arrow} onClick={() => { handlePagination(currentPage + 1) }}>
        <img width={24} src={right} alt="Right button" />
      </button>
    </section >
  ) : null
}
