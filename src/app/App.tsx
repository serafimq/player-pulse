import styles from './App.module.scss';
import { AppRouter } from './providers/router';

function App() {
  return (
    <>
      <div className={styles.App}>
        <AppRouter />
      </div>
    </>
  )
}

export default App;
