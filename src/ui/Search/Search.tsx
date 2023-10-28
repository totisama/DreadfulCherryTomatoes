import styles from './Search.module.scss'
import logo from "./search-icon.svg";

interface Props {
  handleSearch: (search: string) => void
}

export function Search({ handleSearch }: Props) {
  return (
    <section className={styles.search}>
      <div className={styles.searchInput}>
        <span>
          <img width={30} src={logo} className={styles.dreadfulLogo} alt="Search" />
        </span>
        <input className={styles.input} type="text" placeholder="Title" onChange={(e) => { handleSearch(e.target.value) }} />
      </div>
    </section>
  )
}
