import logo from "./dreadful-logo.svg";
import styles from './Header.module.scss'

export function Header() {

  return (
    <header className={styles.header}>
      <img width={250} src={logo} className={styles.dreadfulLogo} alt="Dreadful logo" />
    </header>
  )
}
