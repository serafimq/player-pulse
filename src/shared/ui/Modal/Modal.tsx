import { ReactNode } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import styles from './Modal.module.scss';
import classNames from "classnames";
import { Icon } from "../Icon";
import CloseIcon from '../../assets/icons/close-20-20.svg?react';
import { MyButton } from "../MyButton";

interface ModalProps {
    className?: string;
    children: ReactNode;
    title?: string;
    buttonText: string;
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}

export function Modal(props: ModalProps) {
    const {
        children, 
        className, 
        title, 
        buttonText, 
        isOpen,
        onOpen,
        onClose,
    } = props;
    return (
        <>
            <MyButton
                onClick={onOpen}
                className={styles.openButton}
            >
                {buttonText}
            </MyButton>
            <Dialog
                open={isOpen}  
                onClose={onClose}
                as="div"
                className={styles.wrapper}
            >
                <div
                    className={styles.backdrop}
                    onClick={onClose}
                />
                <DialogPanel
                    transition
                    className={classNames(styles.dialog, [className])}
                >
                    <Button
                        className={styles.closeBtn}
                        onClick={onClose}
                    >
                        <Icon Svg={CloseIcon} />
                    </Button>
                    {title && <DialogTitle as="h3" >
                        {title}
                    </DialogTitle>}
                        {children}
                </DialogPanel>
            </Dialog>
        </>
    );
}   