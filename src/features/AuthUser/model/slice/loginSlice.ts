import { createSlice } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/LogisSchema";
import { loginUser } from "../services/loginUser";
import { registerUser } from "../services/registerUser";


const initialState: LoginSchema = {
    isLoading: false,
    email: '',
    password: '',
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        resetError: (state) => {
            state.error = undefined;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, state => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, state => {
                state.isLoading = false;
            })
            .addCase(loginUser.rejected, (state, actions) => {
                state.isLoading = false;
                state.error = actions.payload;
            })
            .addCase(registerUser.pending, state => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, state => {
                state.isLoading = false;
            })
            .addCase(registerUser.rejected, (state, actions) => {
                state.isLoading = false;
                state.error = actions.payload;
            })
    }
});

export const {actions: loginActions} = loginSlice;
export const {reducer: loginReducer} = loginSlice;