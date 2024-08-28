import { Button } from "@headlessui/react";
import styles from './MyButton.module.scss';
import classNames from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
}

export function MyButton({className, children, disabled, ...delegated}: MyButtonProps) {
    return (
        <Button 
            {...delegated} 
            className={classNames(styles.MyButton, [className])}
            disabled={disabled}
        >
            {children}
        </Button>
    )
}