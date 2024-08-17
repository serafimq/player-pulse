import { Suspense } from 'react';
import styles from './App.module.scss';
import { AppRouter } from './providers/router';
import { Navbar } from '../widgets/Navbar';

function App() {
  return (
    <>
      <div className={styles.App}>
        <Suspense fallback="">
          <Navbar />
          <div className={styles.contentPage}>
            <AppRouter />
          </div>
        </Suspense>
      </div>
    </>
  )
}

export default App;
