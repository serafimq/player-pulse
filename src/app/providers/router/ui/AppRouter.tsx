import { Suspense } from "react";
import { Routes, Route } from "react-router";
import { routeConfig } from "../config/routeConfig";
import { AppRouterProps } from "../types/router";

export default function AppRouter() {
    function route(route: AppRouterProps) {
        return (
            <Route 
                key={route.path} 
                path={route.path}
                element={route.element}
            />
        )
    }
    return (
        <Suspense fallback={''}>
            <Routes>
                {Object.values(routeConfig).map(route)}
            </Routes>
        </Suspense>
    )
}