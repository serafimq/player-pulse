import React from "react";
import { Modal } from "../../../../shared/ui/Modal";
import { LoginForm } from "../LoginForm/LoginForm";
import styles from './LoginModal.module.scss'
import { useAppDispatch } from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { loginActions } from "../../model/slice/loginSlice";

export function LoginModal() {
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = React.useState(false);
  
    function open() {
        setIsOpen(true);
    }
  
    function close() {
        setIsOpen(false);
        dispatch(loginActions.resetError());
    }
    
    return (
        <Modal 
            isOpen={isOpen} 
            onOpen={open}
            onClose={close}
            className={styles.LoginModal} 
            buttonText="Login"
        >
            <LoginForm />
        </Modal>
    )
}