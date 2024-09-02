export interface LoginSchema {
    isLoading: boolean;
    error?: string;
    email: string;
    password: string;
}

export interface LoginFormSchema {
    email: string;
    password: string;
}

export interface RegisterFormSchema {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface AuthFormSchema {
    email: string;
    password: string;
    confirmPassword: string;
}
  
  