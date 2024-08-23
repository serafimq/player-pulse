import { useSelector } from "react-redux";
import { getUserAuthData } from "../../../../entities/User";
import { Navigate } from "react-router-dom";
import { getRouteMain } from "../../../../shared/consts/router";

interface RequireAuthProps {
    children: JSX.Element;
}

export function RequiredAuth({children}: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);

    if (!auth) {
        return <Navigate to={getRouteMain()} state={{from: location}} replace />
    }
    return children;
}