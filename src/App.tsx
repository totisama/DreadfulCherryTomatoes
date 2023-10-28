import { Header } from "./ui/Header";
import { Home } from "./ui/Home";
import { Footer } from "./ui/Footer/Footer";
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App;
