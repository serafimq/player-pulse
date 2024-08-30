import { createAsyncThunk } from "@reduxjs/toolkit";
import { userActions } from "../../../../entities/User";
import { ThunkConfig } from "../../../../app/providers/StoreProvider/config/StateSchema";
import { supabase } from "../../../../shared/lib/supabase";
import { User } from "@supabase/supabase-js";

interface LoginByUsernameProps {
    email: string;
    password: string;
}
export const loginUser = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/loginUser', async (userData, thunkApi) => {
    const {dispatch, rejectWithValue} = thunkApi;
    try {
        const {
            data: { user, session }
          } = await supabase.auth.signInWithPassword(userData);
        if (!session?.user) {
            throw new Error();
        }
        dispatch(userActions.setAuthData(user));
        return user;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});