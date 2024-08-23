import { useSelector } from 'react-redux';
import { NavbarItem } from '../NavbarItem/NavbarItem';
import styles from './Navbar.module.scss';
import classNames from 'classnames';
import { getNavbarItems } from '../../model/selectors/getNavbarItems';

interface NavbarProps {
  className?: string;
}

export default function Navbar({className}: NavbarProps) {
    const navbarItemsList = useSelector(getNavbarItems);

    const itemList = navbarItemsList.map((item) => <NavbarItem item={item} key={crypto.randomUUID()}/>)
    return (
        <aside className={classNames([className])}>
            <div className={styles.header}>
              <div className={styles.logo}>Housh<span>oo</span>t</div>
              <div className={styles.subtitle}>The house of football</div>
            </div>
            <div className={styles.items}>{itemList}</div>
            <div className={styles.footer}>Became Premium member</div>
        </aside>
    )
}

