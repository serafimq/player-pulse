import { Modal } from "../../../../shared/ui/Modal";
import { LoginForm } from "../LoginForm/LoginForm";
import styles from './LoginModal.module.scss'

export function LoginModal() {
    return (
        <Modal className={styles.LoginModal} buttonText="Login">
            <LoginForm />
        </Modal>
    )
}