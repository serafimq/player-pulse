import { ReactNode } from "react";
import {NavLink, NavLinkProps } from "react-router-dom";
import styles from './AppLink.module.scss';
import classNames from "classnames/bind";

interface AppLinkProps extends NavLinkProps {
    children?: ReactNode;
    className?: string;
}
const cx = classNames.bind(styles);

export function AppLink(props: AppLinkProps) {
    const {to, className, children, ...delegated} = props;
    return (
        <NavLink 
        {...delegated} 
        to={to}
        className={
            ({ isActive }) => cx(styles.AppLink, {active : isActive}, [className])
        }
        >
            {children}
        </NavLink>
    )
}