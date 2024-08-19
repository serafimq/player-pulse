import { createSlice } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/LogisSchema";
import { loginUser } from "../services/loginUser";


const initialState: LoginSchema = {
    isLoading: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
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
    }
});

export const {actions: loginActions} = loginSlice;
export const {reducer: loginReducer} = loginSlice;