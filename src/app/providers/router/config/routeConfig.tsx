import { AboutPage } from "../../../../pages/AboutPage";
import { MainPage } from "../../../../pages/MainPage";
import { 
    AppRoutes, getRouteAbout, getRouteMain 
} from "../../../../shared/consts/router";
import { AppRouterProps } from "../types/router";

export const routeConfig: Record<AppRoutes, AppRouterProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />
    },
}