import { useSelector } from 'react-redux';
import styles from './UserHeader.module.scss';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData, userActions } from '../../../entities/User';
import { LoginModal } from '../../../features/AuthUser';
import classNames from 'classnames';
import MenuIcon from '../../../shared/assets/icons/menu-20-20.svg?react';
import CloseIcon from '../../../shared/assets/icons/close-20-20.svg?react';
import { Icon } from '../../../shared/ui/Icon';

interface UserHeaderProps {
    isShowNavbarIcon: boolean;
    handleCollapsed: () => void;
    className?: string;
    collapsed: boolean;
}

export function UserHeader(props: UserHeaderProps) {

    const dispatch = useAppDispatch();

    const authData = useSelector(getUserAuthData);
    function onLogout() {
      dispatch(userActions.logout())
    }
    const {
        isShowNavbarIcon,
        handleCollapsed,
        collapsed,
        className
    } = props;
    return (
        <div className={classNames(styles.UserHeader, [className])}>
            { isShowNavbarIcon 
                && <Icon 
                className={classNames(styles.menu, {[styles.opened]: !collapsed})}
                Svg={collapsed ? MenuIcon : CloseIcon} onClick={handleCollapsed} />
            }
            <div className={styles.welcome}>
                <h2 className={styles.title}>Welcome back, Champ!</h2>
                <div className={styles.subtitle}>Welcome back, nice to see again!</div>
            </div>
            <div  className={styles.auth}>
                {authData && <button onClick={onLogout}>Logout</button>}
                {!authData && <LoginModal />}
            </div>
        </div>
    )
}