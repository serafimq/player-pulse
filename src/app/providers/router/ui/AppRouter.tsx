import { Suspense } from "react";
import { Routes, Route } from "react-router";
import { routeConfig } from "../config/routeConfig";
import { AppRouterProps } from "../types/router";
import { RequiredAuth } from "./RequireAuth";

export default function AppRouter() {
    function renderWithWrapper(route: AppRouterProps) {
        const element = (
            <Suspense fallback={'Loading...'}>{route.element}</Suspense>
        )
        return (
            <Route 
                key={route.path} 
                path={route.path}
                element={route.authOnly ? <RequiredAuth>{element}</RequiredAuth> : element}
            />
        )
    }
    return (
        <Suspense fallback={'Loading...'}>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    )
}