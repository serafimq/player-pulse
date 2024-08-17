import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

interface AppLinkProps extends LinkProps {
    children?: ReactNode
}

export function AppLink(props: AppLinkProps) {
    const {to, children, ...delegated} = props;
    return (
        <Link {...delegated} to={to}>
            {children}
        </Link>
    )
}