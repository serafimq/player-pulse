import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSchema } from "../types/user";
import { User } from "@supabase/supabase-js";


const initialState: UserSchema = {
    _inited: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state, action: PayloadAction<User>) => {
            if (action.payload) {
                state.authData = action.payload;
            }
            state._inited = true;
        },
        logout: (state) => {
            state.authData = undefined;
        }
    }
})

export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;
