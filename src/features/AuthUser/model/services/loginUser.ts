import { createAsyncThunk } from "@reduxjs/toolkit"
import { User, userActions } from "../../../../entities/User"
import { ThunkConfig } from "../../../../app/providers/StoreProvider/config/StateSchema"
import { USER_LOCALSTORAGE_KEY } from "../../../../shared/consts/localstorage";

export const loginUser = createAsyncThunk<
    User,
    undefined,
    ThunkConfig<string>
>('login/loginUser', async (_, thunkApi) => {
    const {dispatch, extra, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api.get<User>('/users/1');
        if (!response.data) {
            throw new Error();
        }
        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data)
        )
        dispatch(userActions.setAuthData(response.data));
        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});