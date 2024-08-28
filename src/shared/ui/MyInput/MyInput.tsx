import { Description, Field, Input, Label } from "@headlessui/react";
import styles from './MyInput.module.scss';
import React, { InputHTMLAttributes } from "react";
import classNames from "classnames";
import { FieldError } from "react-hook-form";


type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'  | 'defaultValue' | 'name'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    disabled?: boolean;
    label?: string;
    description?: boolean;
    isRequired?: boolean;
    error?: FieldError;
}

export const MyInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        className,
        value,
        onChange,
        autofocus,
        disabled,
        label,
        description,
        isRequired,
        error,
        ...delegated
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(styles.InputWrapper, [className])}>
            <Field className={styles.inputField} disabled={disabled}>
            {description && <Description className={styles.description}>Use your real name so people will recognize you.</Description>}
            <Input
                {...delegated}
                ref={ref}
                value={value}
                onChange={onChangeHandler}
                autoFocus={autofocus}
                className={classNames(styles.input, {[styles.inputError]: error})}
            />
            {label && <Label className={styles.label}>
                {label}{isRequired && <span>*</span>}
            </Label>}
            </Field>
            {error && <div className={styles.error}>{error.message}</div>}
        </div>
    )
});