import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
interface HeaderProp {
    id: number,
    title: string,
    link: string
}
const Header = () => {
    const headers: HeaderProp[] = [
        {
            id: 1,
            title: "Profile",
            link: "#profile"
        },
        {
            id: 2,
            title: "Skills",
            link: "#skills"
        },
        {
            id: 3,
            title: "Favorites",
            link: "#favorites"
        },
        {
            id: 4,
            title: "Education",
            link: "#education"
        },
        {
            id: 5,
            title: "Portfolio",
            link: "#portfolio"
        }
    ]
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {headers.map(item => (
                    <NavigationMenuItem key={item.id}>
                        <NavigationMenuLink asChild>
                            <Link href={item.link} >
                                {item.title}
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default Header;