import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { Controller, useForm } from "react-hook-form";
import { AuthFormSchema } from "../../model/types/LogisSchema";
import { registerUser } from "../../model/services/registerUser";
import { loginUser } from "../../model/services/loginUser";
import styles from './AuthForm.module.scss';
import classNames from "classnames";
import { MyInput } from "../../../../shared/ui/MyInput";
import { MyButton } from "../../../../shared/ui/MyButton";
import React from "react";


interface AuthFormProps {
    isRegister: boolean;
    className?: string;
}

export function AuthForm({isRegister, className}: AuthFormProps) {
    const dispatch = useAppDispatch();
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);
    const { 
        handleSubmit, 
        control, 
        watch, 
        setError,
        reset,
        formState: { errors } 
      } = useForm<AuthFormSchema>({
        defaultValues: {
          email: '',
          password: '',
          confirmPassword: '',
        },
        mode: 'onBlur',
      });

      React.useEffect(() => {
        reset();
      }, [isRegister])

    const password = watch("password");

    const onSubmit = async (formData: AuthFormSchema) => {
        try {
            const action = isRegister ? registerUser : loginUser;
            const result = await dispatch(action(formData));
            
            if (result.meta.requestStatus === 'rejected') {
                throw result.payload;
            }
            
            if (result.meta.requestStatus === 'fulfilled') {
                isRegister 
                    ? console.log('Success registration') 
                    : console.log('Success login');
            }
        } catch (error: any) {
            if (error === Error && error?.message === 'User already registered') {
                setError('email', { 
                    type: 'manual',
                    message: 'This email is already registered'
                });
            } else {
                console.log(error); 
            }
        }
    };

    return (
        <div className={styles.wrapper}>  
            <div className={styles.wave}></div>
            {error && <div className={styles.errorMessage}>It looks like something is wrong! {error}</div>}
            <h2 className={styles.title}>{isRegister ? 'Get on Board' : 'Hello there, welcome back'}</h2>
            <form
                className={classNames(styles.form, [className])}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={styles.formWrapper}>
                    <Controller
                        name="email"
                        control={control}
                        rules={{ 
                            required: "This is required.",
                            pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                            }
                        }}
                        render={({ field }) => (
                            <MyInput 
                                {...field}
                                placeholder=" "
                                error={errors.email?.message} 
                                isRequired
                                label='Email'
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        rules={{ 
                            required: "This is required.",
                            minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters long"
                            },
                            pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                            message: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
                            }
                        }}
                        render={({ field  }) => (
                            <MyInput 
                                {...field}
                                type="password"
                                placeholder=" "
                                error={errors.password?.message} 
                                isRequired 
                                label='Password'
                            />
                        )}
                    />
                    {isRegister && (
                    <Controller
                        name="confirmPassword"
                        control={control}
                        rules={{
                        required: "Please confirm your password",
                        validate: (value) => 
                            value === password || "The passwords do not match"
                        }}
                        render={({ field }) => (
                        <MyInput
                            {...field}
                            type="password"
                            placeholder=" "
                            error={errors.confirmPassword?.message}
                            isRequired
                            label='Confirm Password'
                        />
                        )}
                    />
                    )}
                </div>
                <div className={styles.formFooter}>
                  {isRegister ? (
                    <p>By creating an account, you agree to the Terms of Use and Privacy Policy.</p>
                  ) : (
                    <p className={styles.forgotPassword}>Forgot your Password?</p>
                  )}
                </div>
                <MyButton
                    disabled={isLoading}
                    className={styles.button}
                    type="submit"
                >
                    {isRegister ? 'Sign Up' : 'Sign In'}
                </MyButton>
            </form>
        </div>
    )
}