import React, { Suspense } from 'react';
import styles from './App.module.scss';
import { AppRouter } from './providers/router';
import { Navbar } from '../widgets/Navbar';
import { userActions } from '../entities/User';
import { useAppDispatch } from '../shared/lib/hooks/useAppDispatch/useAppDispatch';
import classNames from 'classnames';
import { useResize } from '../shared/lib/hooks/useResize/useResize';
import { UserHeader } from '../widgets/UserHeader';
import { supabase } from '../shared/lib/supabase';
import { AuthChangeEvent, Session } from '@supabase/supabase-js';

function App() {
  const [collapsed, setCollapsed] = React.useState(false);
  const {isScreenMd} = useResize();

  const dispatch = useAppDispatch();

  function handleCollapsed() {
    setCollapsed(prev => !prev);
  }

  React.useEffect(() => {
      const { data } = supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {
        console.log({event});
          if (event === "SIGNED_IN" && session?.user) {
              dispatch(userActions.initAuthData(session?.user));
          } else if (event === "SIGNED_OUT") {
              dispatch(userActions.logout()); 
          }
      });
      return () => {
        data.subscription.unsubscribe();
      };
    }, [dispatch]); 

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
