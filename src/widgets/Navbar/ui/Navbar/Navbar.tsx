import { getRouteAbout, getRouteMain } from '../../../../shared/consts/router';
import { NavbarItemType } from '../../model/types/navbar';
import { NavbarItem } from '../NavbarItem/NavbarItem';
import styles from './Navbar.module.scss';

const navbarItemsList: Array<NavbarItemType> = [
    {path: getRouteMain(), text: 'Overwiev'},
    {path: getRouteAbout(), text: 'Fantasy'},
];

export default function Navbar() {
    return (
        <aside className={styles.Navbar}>
            <div className={styles.Logo}>Houshoot</div>
            <div className={styles.subtitle}>The house of football</div>
            {
              navbarItemsList.map((item) => (
                <NavbarItem item={item} key={item.path}/>
              ))  
            }
        </aside>
    )
}