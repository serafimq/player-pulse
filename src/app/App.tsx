import React, { Suspense } from 'react';
import styles from './App.module.scss';
import { AppRouter } from './providers/router';
import { Navbar } from '../widgets/Navbar';
import { userActions } from '../entities/User';
import { useAppDispatch } from '../shared/lib/hooks/useAppDispatch/useAppDispatch';
import classNames from 'classnames';
import { useResize } from '../shared/lib/hooks/useResize/useResize';
import { UserHeader } from '../widgets/UserHeader';

function App() {
  const [collapsed, setCollapsed] = React.useState(false);
  const {isScreenMd} = useResize();

  const dispatch = useAppDispatch();

  function handleCollapsed() {
    setCollapsed(prev => !prev);
  }

  React.useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch])

  return (
    <>
      <div className={styles.App}>
        <Suspense fallback="">
          <UserHeader
            className={styles.header}
            isShowNavbarIcon={!isScreenMd}
            handleCollapsed={handleCollapsed}
            collapsed={collapsed}
          />
          <Navbar
            className={classNames(styles.navbar, {[styles.collapsed]: collapsed})} 
          />
          <div className={styles.main}>
            <AppRouter />
          </div>
        </Suspense>
      </div>
    </>
  )
}

export default App;
