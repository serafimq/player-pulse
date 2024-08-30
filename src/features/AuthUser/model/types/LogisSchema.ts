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
  