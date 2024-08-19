import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch"
import { getLoginError } from "../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { loginUser } from "../model/services/loginUser";


export function LoginUser() {
    const dispatch = useAppDispatch();
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading)
    async function hendleLogin() {
        const result = await dispatch(loginUser());
        if (result.meta.requestStatus === 'fulfilled') {
            console.log('Success');
        }
    }
    return (
        <>  {error && <div>It looks like something is wrong!</div>}
            {isLoading && <div>Loading...</div>}
            <button disabled={isLoading} onClick={hendleLogin}>Login</button>
        </>
    )
}