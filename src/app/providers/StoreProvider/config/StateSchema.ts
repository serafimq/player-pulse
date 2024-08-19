import { AxiosInstance } from "axios";
import { CounterSchema } from "../../../../entities/Counter";
import { rtkApi } from "../../../../shared/api/rtkApi";
import { UserSchema } from "../../../../entities/User";
import { LoginSchema } from "../../../../features/AuthUser";

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginUser: LoginSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}