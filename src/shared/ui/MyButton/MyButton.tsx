import { Button } from "@headlessui/react";
import styles from './MyButton.module.scss';
import classNames from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";

export enum ButtonTheme {
    LINK = 'link',
    BASE = 'base',
}

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    theme?: ButtonTheme;
}

export function MyButton({className, children, disabled, theme = ButtonTheme.BASE, ...delegated}: MyButtonProps) {
    return (
        <Button 
            {...delegated} 
            className={classNames(styles.MyButton, [className, styles[theme]])}
            disabled={disabled}
        >
            {children}
        </Button>
    )
}