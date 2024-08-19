import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { ReactNode } from "react";
import { StateSchema } from "../config/StateSchema";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema;
}

export function StoreProvider({ children }: StoreProviderProps) {

    const store = createReduxStore();
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}