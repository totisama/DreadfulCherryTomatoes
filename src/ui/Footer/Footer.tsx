import styles from './Footer.module.scss'
import logo from "../Header/dreadful-logo.svg";
import apple from "./apple.svg";
import google from "./google.svg";

export function Footer() {

  return (
    <footer className={styles.footer}>
      <img width={210} src={logo} alt="Dreadful logo" />
      <div className={styles.icons}>
        <img width={130} src={apple} alt="Apple button" />
        <img width={130} src={google} alt="Google button" />
      </div>
      <p>© Copyright 2022 Dreadful Tomatoes. All rights reserved.</p>
    </footer>
  )
}
