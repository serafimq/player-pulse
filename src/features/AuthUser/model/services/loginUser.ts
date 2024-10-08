import { createAsyncThunk } from "@reduxjs/toolkit";
import { userActions } from "../../../../entities/User";
import { ThunkConfig } from "../../../../app/providers/StoreProvider/config/StateSchema";
import { supabase } from "../../../../shared/lib/supabase";
import { User } from "@supabase/supabase-js";
import { loginActions } from "../slice/loginSlice";

interface LoginByEmailProps {
    email: string;
    password: string;
}
export const loginUser = createAsyncThunk<
    User,
    LoginByEmailProps,
    ThunkConfig<string>
>('login/loginUser', async (userData, thunkApi) => {
    const {dispatch, rejectWithValue} = thunkApi;
    try {
        const {
            data: { user, session },
            error
          } = await supabase.auth.signInWithPassword(userData);
        if (!session?.user) {
            dispatch(loginActions.setError(error));
            throw new Error();
        }
        dispatch(userActions.setAuthData(user));
        return user;
    } catch (e) {
        dispatch(loginActions.setError(e));
        return rejectWithValue('error');
    }
});