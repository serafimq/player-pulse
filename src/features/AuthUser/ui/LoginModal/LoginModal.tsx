import React from "react";
import { Modal } from "../../../../shared/ui/Modal";
import styles from './LoginModal.module.scss'
import { useAppDispatch } from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { loginActions } from "../../model/slice/loginSlice";
import { ButtonTheme, MyButton } from "../../../../shared/ui/MyButton";
import { AuthForm } from "../AuthForm/AuthForm";

export function LoginModal() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isRegister, setIsRegister] = React.useState(true);

    const dispatch = useAppDispatch();
  
    const toggleModal = () => setIsRegister(prev => !prev);
    const open = () => setIsOpen(true);
  
    const close = () => {
        setIsOpen(false);
        dispatch(loginActions.resetError());
    }

    const footer = isRegister 
        ? <div className={styles.footer}><MyButton onClick={toggleModal} theme={ButtonTheme.LINK}>I am already a member!</MyButton></div>
        : <div className={styles.footer}>New here? <MyButton onClick={toggleModal} theme={ButtonTheme.LINK}>Sign Up Insted</MyButton></div>
    
    return (
        <Modal 
            isOpen={isOpen} 
            onOpen={open}
            onClose={close}
            className={styles.LoginModal} 
            buttonText="Login"
        >
            <div className={styles.wrapper}>
                <AuthForm isRegister={isRegister} />
                {footer}
            </div>
        </Modal>
    )
}