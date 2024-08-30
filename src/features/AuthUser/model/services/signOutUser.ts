import { createAsyncThunk } from "@reduxjs/toolkit";
import { userActions } from "../../../../entities/User";
import { ThunkConfig } from "../../../../app/providers/StoreProvider/config/StateSchema";
import { supabase } from "../../../../shared/lib/supabase";
export const signOutUser = createAsyncThunk<
    undefined,
    undefined,
    ThunkConfig<string>
>('login/signOutUser', async (_, thunkApi) => {
    const {dispatch, rejectWithValue} = thunkApi;
    try {
        await supabase.auth.signOut();
        dispatch(userActions.logout());
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});