import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { counterReducer } from "../../../../entities/Counter";
import { rtkApi } from "../../../../shared/api/rtkApi";
import { $api } from "../../../../shared/api/api";
import { userReducer } from "../../../../entities/User";
import { loginReducer } from "../../../../features/AuthUser/model/slice/loginSlice";

export function createReduxStore() {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginUser: loginReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    }

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: rootReducers,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }).concat(rtkApi.middleware),
    })

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];