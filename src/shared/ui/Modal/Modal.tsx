import React, { ReactNode } from "react";
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
}

export function Modal(props: ModalProps) {
    const {children, className, title, buttonText} = props;

    const [isOpen, setIsOpen] = React.useState(false);
  
    function open() {
      setIsOpen(true)
    }
  
    function close() {
      setIsOpen(false)
    }
    return (
        <>
            <MyButton
                onClick={open}
                className={styles.openButton}
            >
                {buttonText}
            </MyButton>
            <Dialog
                open={isOpen}  
                onClose={close}
                as="div"
                className={styles.wrapper}
            >
                <div
                    className={styles.backdrop}
                    onClick={close}
                />
                <DialogPanel
                    transition
                    className={classNames(styles.dialog, [className])}
                >
                    <Button
                        className={styles.closeBtn}
                        onClick={close}
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