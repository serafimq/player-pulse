import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "@supabase/supabase-js";
import { ThunkConfig } from "../../../../app/providers/StoreProvider/config/StateSchema";
import { supabase } from "../../../../shared/lib/supabase";
import { userActions } from "../../../../entities/User";


interface RegisterByEmailProps {
    email: string;
    password: string;
}

export const registerUser = createAsyncThunk<
    User | null,
    RegisterByEmailProps,
    ThunkConfig<string>
>('login/registerUser', async (userData, thunkApi) => {
    const {dispatch, rejectWithValue} = thunkApi;
    try {
        const {
            data: { user, session },
            error
          } = await supabase.auth.signUp(userData);

        if (!session?.user) {
            throw new Error();
        }
        if (!error && user) {
            dispatch(userActions.setAuthData(user));
        }
        return user;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
})