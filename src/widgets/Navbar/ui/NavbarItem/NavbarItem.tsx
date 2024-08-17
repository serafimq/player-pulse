import { AppLink } from "../../../../shared/ui/AppLink";
import { NavbarItemType } from "../../model/types/navbar";

interface NavbarItemProps {
    item: NavbarItemType;
}

export function NavbarItem({ item }: NavbarItemProps) {
    return (
        <AppLink to={item.path}>
            <span>{item.text}</span>
        </AppLink>
    )
}