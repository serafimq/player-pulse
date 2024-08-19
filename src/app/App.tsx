import React, { Suspense } from 'react';
import styles from './App.module.scss';
import { AppRouter } from './providers/router';
import { Navbar } from '../widgets/Navbar';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from '../entities/User';
import { LoginUser } from '../features/AuthUser';
import { useAppDispatch } from '../shared/lib/hooks/useAppDispatch/useAppDispatch';

function App() {
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  function onLogout() {
    dispatch(userActions.logout())
  }

  React.useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch])

  return (
    <>
      <div className={styles.App}>
        <Suspense fallback="">
          <Navbar />
          <div className={styles.contentPage}>
            <div>
              {authData && <button onClick={onLogout}>Logout</button>}
              {!authData && <LoginUser />}
            </div>
            <AppRouter />
          </div>
        </Suspense>
      </div>
    </>
  )
}

export default App;
