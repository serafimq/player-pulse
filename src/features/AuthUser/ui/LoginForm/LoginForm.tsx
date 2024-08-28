import classNames from "classnames";
import { MyInput } from "../../../../shared/ui/MyInput";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import styles from './LoginForm.module.scss';
import { LoginFormSchema } from "../../model/types/LogisSchema";
import { MyButton } from "../../../../shared/ui/MyButton";
import { useAppDispatch } from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { loginUser } from "../../model/services/loginUser";

interface LoginFormProps {
    className?: string;
}


export function LoginForm({className}: LoginFormProps) {
    const dispatch = useAppDispatch();
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading)
    async function hendleLogin() {
        const result = await dispatch(loginUser());
        if (result.meta.requestStatus === 'fulfilled') {
            console.log('Success');
        }
    }
    const { handleSubmit, control } = useForm<LoginFormSchema>({
      defaultValues: {
        email: '',
        password: '',
      },
    })
    const onSubmit: SubmitHandler<LoginFormSchema> = (data) => {
        console.log(data);
        hendleLogin();
    };

    if (error) {
        return <div>It looks like something is wrong!</div>
    }

    return (
        <div className={styles.wrapper}>  
            <div className={styles.wave}></div>
            <h2 className={styles.title}>Hello there, welcome back</h2>
            <form
                className={classNames(styles.LoginForm, [className])}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: "This is required." }}
                    render={({ field, fieldState: {error} }) => (
                        <MyInput 
                            {...field}
                            placeholder=" "
                            error={error} 
                            isRequired
                            label='email'
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    rules={{ required: "This is required." }}
                    render={({ field, fieldState: {error} }) => (
                        <MyInput 
                            {...field}
                            type="password"
                            placeholder=" "
                            error={error} 
                            isRequired 
                            label='password'
                        />
                    )}
                />
                <div className={styles.forgottenPassword}>Forgot your Password?</div>
                <MyButton
                    disabled={isLoading}
                    className={styles.button}
                    type="submit"
                >
                    Sig In
                </MyButton>
            </form>
            <div className={styles.footer}>New here? <span>Sign Up Insted</span></div>
        </div>
    )
}