import { RouteProps } from "react-router";

export type AppRouterProps = RouteProps & {
    authOnly?: boolean;
};