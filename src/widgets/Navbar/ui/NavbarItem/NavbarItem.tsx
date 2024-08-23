import { useSelector } from "react-redux";
import { AppLink } from "../../../../shared/ui/AppLink";
import { NavbarItemType } from "../../model/types/navbar";
import styles from './NavbarItem.module.scss';
import { getUserAuthData } from "../../../../entities/User";
import classNames from "classnames";

interface NavbarItemProps {
    item: NavbarItemType;
    className?: string;
}

export function NavbarItem({ item, className }: NavbarItemProps) {
    const isAuth = useSelector(getUserAuthData);

    if (!isAuth && item.authOnly) {
        return null;
    }
    return (
        <AppLink 
            className={classNames(styles.link, [className])} 
            to={item.path}
        >   
            <item.Icon className={styles.icon} />
            <span className={styles.text}>{item.text}</span>
        </AppLink>
    )
}